# Optional Features

Conditionally loaded features for the root layout.

## Overview

`OptionalFeatures` is mounted in `app/layout.tsx` and conditionally loads heavy dependencies based on usage. This prevents unused features from bloating the client bundle.

## Features

| Feature | Trigger | Description |
|---------|---------|-------------|
| GSAP Runtime | Always loaded | Syncs GSAP with Tempus RAF |
| Dev Tools | Development mode | Orchestra debug panel |

### Dev Tools

Automatically enabled in development. Access with `Cmd/Ctrl + O`.

## How It Works

```tsx
// app/layout.tsx - already configured
<OptionalFeatures />
```

The component:
1. Waits for client-side hydration
2. Dynamically imports features with code splitting
3. Renders with `ssr: false` to avoid hydration issues

## Adding Custom Features

```tsx
// lib/features/index.tsx

const MyFeature = dynamic(
  () => import('@/components/my-feature').then((mod) => mod.MyFeature),
  { ssr: false }
)

// Conditionally render based on env var or other condition
{process.env.NEXT_PUBLIC_MY_FEATURE === 'true' && <MyFeature />}
```

## Architecture Note

This pattern keeps the root layout clean while allowing opt-in features. Features are code-split and only downloaded when needed.
