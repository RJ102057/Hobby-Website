// No <Wrapper> here: Header/Lenis pull in client-side JS the loading
// fallback shouldn't wait on. Keep this dependency-free for instant paint.
export default function Loading() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center uppercase">
      <p>Cooking...</p>
    </div>
  )
}
