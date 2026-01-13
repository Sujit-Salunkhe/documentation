---
title: "Skeleton"
sidebar_position: 8
---

## Basic usage

```jsx title=Codeblocks
export function SkeletonExamples() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Skeleton variant="default" size="md" />
      
      <Skeleton variant="rounded" size="lg" />
      
      <Skeleton variant="circle" style={{ width: "48px", height: "48px" }} />
      
      <Skeleton variant="card" size="full" style={{ height: "200px" }} />
    </div>
  );
}
```

## Props

```jsx title=Codeblocks
  Skeleton props:
    export interface SkeletonProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
    /** Disable the shimmer animation */
    animate?: boolean;
  }
```

## Variant Props

### Variant

```jsx title=Codeblocks
  Visual shape for different content types:
    "default" – simple gray block with subtle rounding (default)
    "rounded" – more rounded corners, like pill/buttons
    "card" – card-like block with large rounded corners
    "circle" – circular shape for avatars (aspect-square)
    
  Example:
    <Skeleton variant="default" />
    <Skeleton variant="rounded" />
    <Skeleton variant="card" style={{ height: "150px" }} />
    <Skeleton variant="circle" style={{ width: "64px" }} />
```
### Size

```jsx title=Codeblocks
  Predefined dimensions for common text line heights:
    "sm" – compact: h-3 w-24 (12px height, 96px width)
    "md" – default: h-4 w-48 (16px height, 192px width)
    "lg" – large: h-6 w-72 (24px height, 288px width)
    "full" – full width: w-full (height customizable)
     
  Example:
    <Skeleton size="sm" />
    <Skeleton size="md" />
    <Skeleton size="lg" />
    <Skeleton size="full" style={{ height: "100px" }} />
```
## Behavioral props

### animate

```jsx title=Codeblocks
  Control the shimmer animation:
    <Skeleton animate />          // Animated shimmer (default)
    <Skeleton animate={false} />  // Static placeholder

  When animate is true:
    Shimmer effect moves from left to right
    Animation repeats infinitely
    Duration: 1.5 seconds with easeInOut timing
    Uses Framer Motion for smooth animation
  
  When animate is false:
    Shows static gray placeholder
    No animation overhead
    Useful for accessibility or performance
```
## Usage examples

### Loading text lines
```jsx title=Codeblocks
  import { Skeleton } from "@workokay/atom";

  export function TextLoading() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Skeleton size="lg" />
        <Skeleton size="md" />
        <Skeleton size="md" style={{ width: "80%" }} />
        <Skeleton size="sm" style={{ width: "60%" }} />
      </div>
    );
  }
```

### Loading user profile

```jsx title=Codeblocks
  import { Skeleton } from "@workokay/atom";

  export function ProfileLoading() {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Skeleton 
          variant="circle" 
          style={{ width: "64px", height: "64px" }} 
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Skeleton size="md" style={{ width: "150px" }} />
          <Skeleton size="sm" style={{ width: "100px" }} />
        </div>
      </div>
    );
  }
```

### Custom dimensions

```jsx title=Codeblocks
  import { Skeleton } from "@workokay/atom";

  export function CustomDimensions() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Custom width and height */}
        <Skeleton style={{ width: "300px", height: "20px" }} />
        
        {/* Percentage-based width */}
        <Skeleton style={{ width: "75%", height: "16px" }} />
        
        {/* Full width with custom height */}
        <Skeleton size="full" style={{ height: "120px" }} />
        
        {/* Custom circle size */}
        <Skeleton variant="circle" style={{ width: "80px", height: "80px" }} />
      </div>
    );
  }
```
## Theming behavior
```jsx title=codeblocks
  The Skeleton uses CSS tokens for theming:
    Background color:
      var(--atom-skeleton-bg-color)
    
    Shimmer overlay color:
      var(--atom-skeleton-shimmer-color, rgba(255,255,255,0.2))
    
    Border radius:
      default: rounded-sm (0.125rem)
      rounded: rounded-md (0.375rem)
      card: rounded-lg (0.5rem)
      circle: rounded-full

  These tokens are set by the active theme:
    .atom-theme[data-theme="light"] {
      --atom-skeleton-bg-color: #e5e7eb;
      --atom-skeleton-shimmer-color: rgba(255, 255, 255, 0.5);
    }

    .atom-theme[data-theme="dark"] {
      --atom-skeleton-bg-color: #374151;
      --atom-skeleton-shimmer-color: rgba(255, 255, 255, 0.1);
    }

  Changing data-theme will automatically update all Skeleton instances.
```

## Accessibility

```jsx title=Codeblocks
  The Skeleton follows accessibility best practices:
    Uses semantic HTML (div) for structure
    Can be hidden from screen readers when needed
    Motion can be disabled for users with motion sensitivity
    No interactive elements to avoid confusion

  Example with accessibility attributes:
    <div aria-busy="true" aria-label="Loading content">
      <Skeleton size="md" />
      <Skeleton size="sm" style={{ width: "70%" }} />
    </div>

  Disable animation for reduced motion:
    <Skeleton animate={false} />

  Hide from screen readers when decorative:
    <Skeleton aria-hidden="true" />

  Best practices:
    - Add aria-busy="true" to parent container
    - Provide aria-label describing what's loading
    - Respect prefers-reduced-motion user preference
    - Replace with actual content as soon as available
```

## Performance considerations

```jsx title=Codeblocks
  Animation performance:
    Uses Framer Motion for optimized animations
    GPU-accelerated transforms (translateX)
    Efficient repaint with position: absolute
    
  Optimization tips:
    Disable animations when many skeletons visible:
      <Skeleton animate={false} />
    
    Use static skeletons for long lists:
      {items.map(() => <Skeleton animate={false} />)}
    
    Lazy load skeleton groups:
      {visible && <SkeletonGroup />}
```