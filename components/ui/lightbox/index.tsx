'use client'

import { Dialog } from '@base-ui/react/dialog'
import {
  type PointerEvent,
  type ReactNode,
  useRef,
  useState,
  type WheelEvent,
} from 'react'
import s from './lightbox.module.css'

interface LightboxProps {
  /** Full-size image URL shown in the enlarged view */
  src: string
  /** Accessible label for the enlarged view and the trigger button */
  alt: string
  /** The thumbnail element (e.g. an `Image`) that opens the lightbox when clicked */
  children: ReactNode
}

const MIN_SCALE = 1
const MAX_SCALE = 4
const DOUBLE_CLICK_SCALE = 2.5

function clampScale(scale: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale))
}

function distanceBetween(a: PointerEvent, b: PointerEvent) {
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
}

/**
 * Wraps a thumbnail so clicking it opens a full-size, zoomable view in a
 * modal overlay. Built on the same Base UI Dialog primitive as AlertDialog,
 * just without the title/description semantics an alert needs.
 *
 * The enlarged image supports scroll-wheel zoom, pinch-to-zoom, drag-to-pan
 * once zoomed, and double-click/tap to toggle zoom.
 */
export function Lightbox({ src, alt, children }: LightboxProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const pointers = useRef(new Map<number, PointerEvent>())
  const dragStart = useRef({ x: 0, y: 0 })
  const pinchStart = useRef({ distance: 0, scale: 1 })

  function reset() {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  function zoomBy(delta: number) {
    setScale((current) => {
      const next = clampScale(current + delta)
      if (next === MIN_SCALE) setPosition({ x: 0, y: 0 })
      return next
    })
  }

  function handleWheel(event: WheelEvent) {
    event.preventDefault()
    zoomBy(-event.deltaY * 0.0025 * scale)
  }

  function handleDoubleClick() {
    if (scale > MIN_SCALE) {
      reset()
    } else {
      setScale(DOUBLE_CLICK_SCALE)
    }
  }

  function handlePointerDown(event: PointerEvent) {
    event.currentTarget.setPointerCapture(event.pointerId)
    pointers.current.set(event.pointerId, event)

    const [a, b] = pointers.current.values()
    if (a && b) {
      pinchStart.current = { distance: distanceBetween(a, b), scale }
    } else if (scale > MIN_SCALE) {
      setIsDragging(true)
      dragStart.current = {
        x: event.clientX - position.x,
        y: event.clientY - position.y,
      }
    }
  }

  function handlePointerMove(event: PointerEvent) {
    if (!pointers.current.has(event.pointerId)) return
    pointers.current.set(event.pointerId, event)

    const [a, b] = pointers.current.values()
    if (a && b) {
      const distance = distanceBetween(a, b)
      if (pinchStart.current.distance > 0) {
        const ratio = distance / pinchStart.current.distance
        setScale(clampScale(pinchStart.current.scale * ratio))
      }
      return
    }

    if (isDragging && scale > MIN_SCALE) {
      setPosition({
        x: event.clientX - dragStart.current.x,
        y: event.clientY - dragStart.current.y,
      })
    }
  }

  function handlePointerUp(event: PointerEvent) {
    pointers.current.delete(event.pointerId)
    pinchStart.current = { distance: 0, scale }
    if (pointers.current.size === 0) {
      setIsDragging(false)
      setScale((current) => {
        if (current <= MIN_SCALE) setPosition({ x: 0, y: 0 })
        return current
      })
    }
  }

  return (
    <Dialog.Root
      onOpenChange={(open) => {
        if (open) reset()
      }}
    >
      <Dialog.Trigger
        className={s.trigger}
        aria-label={`View larger image: ${alt}`}
      >
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className={s.backdrop} />
        <Dialog.Popup className={s.popup} aria-label={alt}>
          <Dialog.Close className={s.close} aria-label="Close">
            ✕
          </Dialog.Close>

          <div className={s.imageWrap}>
            {/* biome-ignore lint/performance/noImgElement: on-demand full-size view, not part of the initial layout — next/image's strict sizing props don't fit an arbitrary-aspect-ratio modal */}
            <img
              alt={alt}
              className={s.image}
              data-dragging={isDragging || undefined}
              data-zoomed={scale > MIN_SCALE || undefined}
              draggable={false}
              onDoubleClick={handleDoubleClick}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onWheel={handleWheel}
              src={src}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              }}
            />
          </div>

          <div className={s.zoomControls}>
            <button
              aria-label="Zoom out"
              className={s.zoomButton}
              disabled={scale <= MIN_SCALE}
              onClick={() => zoomBy(-0.5)}
              type="button"
            >
              −
            </button>
            <button
              aria-label="Zoom in"
              className={s.zoomButton}
              disabled={scale >= MAX_SCALE}
              onClick={() => zoomBy(0.5)}
              type="button"
            >
              +
            </button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
