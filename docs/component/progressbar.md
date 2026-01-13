---
title: "ProgressBar"
sidebar_position: 2
---

## Basic usage

```jsx title=Codeblocks
export function ProgressBarExamples() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ProgressBar value={30} variant="default" size="md" />
      
      <ProgressBar value={60} variant="outline" size="md" />
      
      <ProgressBar value={90} variant="subtle" size="sm" />
      
      <ProgressBar indeterminate variant="default" size="md" />
    </div>
  );
}
```

## Props
```jsx title=Codeblocks
  ProgressBar props:
    export interface ProgressBarProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof progressTrackVariants> {
    /** Progress value from 0 to 100 */
    value?: number;
    /** If true, shows animated indeterminate state */
    indeterminate?: boolean;
    /** Optional label for screen readers */
    ariaLabel?: string;
    /** Visual variant for both track and indicator */
    variant?: "default" | "outline" | "subtle";
  }
```

## Variant Props

### Variant
```jsx title=Codeblocks
  Visual style affecting both track and indicator:
    "default" – standard progress bar with subtle track background
    "outline" – transparent track with primary-colored indicator
    "subtle" – softer appearance with reduced opacity
    
  Example:
    <ProgressBar value={50} variant="default" />
    <ProgressBar value={75} variant="outline" />
    <ProgressBar value={25} variant="subtle" />

```
### Size
```jsx title=codeblocks
  Controls the height of the progress bar:
    "sm" – compact: h-3
    "md" – default: h-3.5
    "lg" – large: h-4
     
  Example:
    <ProgressBar value={40} size="sm" />
    <ProgressBar value={60} size="md" />
    <ProgressBar value={80} size="lg" />

  FullWidth:
  Make the progress bar stretch horizontally (true by default):
    <ProgressBar value={50} variant="default" fullWidth />
    <ProgressBar value={50} variant="outline" fullWidth={false} />

```
## Behavioral props

### value
```jsx title=codeblocks
  Progress value from 0 to 100:
    <ProgressBar value={0} variant="default" />
    <ProgressBar value={50} variant="default" />
    <ProgressBar value={100} variant="default" />

  Values are automatically clamped between 0 and 100.
  The indicator width transitions smoothly when value changes.

```
### indeterminate
```jsx title=codeblocks
  Shows an animated loading state when progress is unknown:
    <ProgressBar indeterminate variant="default" />

  When indeterminate is true:
    The indicator animates continuously
    aria-valuenow and aria-valuetext are omitted
    aria-busy is set to true
    The value prop is ignored
```
### ariaLabel
``` jsx title=jsx
  Provides accessible label for screen readers:
    <ProgressBar 
      value={75} 
      ariaLabel="Upload progress" 
      variant="default" 
    />

  Default value is "Progress" if not specified.
```
## Usage examples
### Loading state
```jsx title=codeblocks
  import { ProgressBar } from "@workokay/atom";

  export function LoadingExample() {
    return (
      <div>
        <p>Loading your data...</p>
        <ProgressBar indeterminate variant="default" size="md" />
      </div>
    );
  }
```
### Upload progress
``` jsx title=codeblocks
  import { ProgressBar } from "@workokay/atom";
  import { useState, useEffect } from "react";

  export function UploadProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 500);
      return () => clearInterval(timer);
    }, []);

    return (
      <div>
        <p>Uploading file... {progress}%</p>
        <ProgressBar 
          value={progress} 
          variant="outline" 
          size="md"
          ariaLabel="File upload progress"
        />
      </div>
    );
  }
```
### Status indicators
```jsx title=codeblocks
  import { ProgressBar } from "@workokay/atom";

  export function StatusIndicators() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <p>Task completion: 25%</p>
          <ProgressBar value={25} variant="default" size="sm" />
        </div>

        <div>
          <p>Storage used: 80%</p>
          <ProgressBar value={80} variant="subtle" size="md" />
        </div>

        <div>
          <p>Processing...</p>
          <ProgressBar indeterminate variant="outline" size="lg" />
        </div>
      </div>
    );
  }
```

### Theming behavior
```jsx title=codeblocks
  The ProgressBar uses CSS tokens for theming:
    Track background:
      color-mix(in srgb, var(--atom-badge-archived-border) 8%, transparent)
    
    Track border:
      var(--atom-badge-archived-border)
    
    Indicator background (default variant):
      var(--atom-progressbar-bg)
    
    Indicator background (outline variant):
      var(--atom-primary)
    
    Border radius:
      var(--atom-radius-1)

  These tokens are set by the active theme:
    .atom-theme[data-theme="light"] {
      --atom-progressbar-bg: var(--atom-primary);
      --atom-badge-archived-border: var(--atom-border);
      --atom-radius-1: 0.375rem;
      /* ... */
    }

  Changing data-theme will automatically update all ProgressBar instances.
```

### Accessibility
```jsx title=codeblocks
  The ProgressBar follows ARIA best practices:
    role="progressbar" for semantic meaning
    aria-valuemin="0" and aria-valuemax="100" for range
    aria-valuenow and aria-valuetext for current value
    aria-busy when in indeterminate state
    aria-label for custom descriptions

  Example with full accessibility:
    <ProgressBar 
      value={65}
      variant="default"
      ariaLabel="Document processing progress"
    />
```