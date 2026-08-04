'use client'

import { Dialog } from '@base-ui/react/dialog'
import type { ReactNode } from 'react'
import s from './lightbox.module.css'

interface LightboxProps {
  /** Full-size image URL shown in the enlarged view */
  src: string
  /** Accessible label for the enlarged view and the trigger button */
  alt: string
  /** The thumbnail element (e.g. an `Image`) that opens the lightbox when clicked */
  children: ReactNode
}

/**
 * Wraps a thumbnail so clicking it opens a full-size view in a modal overlay.
 * Built on the same Base UI Dialog primitive as AlertDialog, just without
 * the title/description semantics an alert needs.
 */
export function Lightbox({ src, alt, children }: LightboxProps) {
  return (
    <Dialog.Root>
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
          {/* biome-ignore lint/performance/noImgElement: on-demand full-size view, not part of the initial layout — next/image's strict sizing props don't fit an arbitrary-aspect-ratio modal */}
          <img alt={alt} className={s.image} src={src} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
