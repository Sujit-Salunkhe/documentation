---
title: "Popover"
sidebar_position: 50
---

## Basic usage

```jsx title=Codeblocks
export function PopoverExamples() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Simple popover */}
      <Popover open={open1} onOpenChange={setOpen1}>
        <PopoverTrigger asChild>
          <Button variant="secondary">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>Rich content with full positioning control.</PopoverDescription>
          <div className="mt-4 flex gap-2">
            <Button variant="primary" size="sm">Action</Button>
            <PopoverClose asChild>
              <Button variant="ghost" size="sm">Close</Button>
            </PopoverClose>
          </div>
        </PopoverContent>
      </Popover>

      {/* Side positioned */}
      <Popover open={open2} onOpenChange={setOpen2}>
        <PopoverTrigger asChild>
          <Button variant="secondary">Right popover</Button>
        </PopoverTrigger>
        <PopoverContent side="right" align="start" size="sm">
          <PopoverHeader>
            <PopoverTitle>User Menu</PopoverTitle>
          </PopoverHeader>
          <PopoverBody>
            <div className="py-2">
              <div className="px-2 py-1 text-sm text-[var(--atom-text-muted)]">john@example.com</div>
            </div>
          </PopoverBody>
          <PopoverFooter>
            <PopoverClose asChild>
              <Button variant="ghost" size="sm" className="w-full justify-start">Sign out</Button>
            </PopoverClose>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </div>
  );
}
```
## Props

### Popover (root)

```js
export interface PopoverProps {
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Whether the popover is modal */
  modal?: boolean;
  /** Custom error boundary fallback */
  errorFallback?: ReactNode;
  /** Error handler callback */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  children: React.ReactNode;
}
```
### PopoverContent

```js
export interface PopoverContentProps
  extends VariantProps<typeof popoverContentVariants> {
  /** Portal container */
  container?: HTMLElement | null;
  /** Offset from trigger */
  sideOffset?: number;
  /** Align offset */
  alignOffset?: number;
  /** Prevent closing when clicking inside */
  preventClose?: boolean;
  /** Enable arrow pointer */
  showArrow?: boolean;
  /** Prevent closing on outside click */
  preventOutsideClick?: boolean;
}
```
## Variant props

### Positioning

```jsx
side: "top" | "bottom" | "left" | "right" (default: bottom)
align: "start" | "center" | "end" (default: center)

<PopoverContent side="top" align="end" />
<PopoverContent side="right" align="start" />
Sizing
jsx
"sm" – w-64
"md" – w-80 (default)
"lg" – w-96
"xl" – w-[32rem]
"full" – w-screen max-w-md

<PopoverContent size="sm">Compact</PopoverContent>
<PopoverContent size="xl">Wide content</PopoverContent>
```
## Behavioral features

### Controlled vs uncontrolled

```jsx
// Uncontrolled
<Popover defaultOpen={false}>
  <PopoverTrigger>Click me</PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>

// Controlled
const [open, setOpen] = useState(false);
<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger>Click me</PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>
```
### Modal behavior

```jsx
<Popover modal>
  <PopoverTrigger>Modal popover</PopoverTrigger>
  <PopoverContent>
    {/* Body scroll locked, focus trapped, backdrop */}
  </PopoverContent>
</Popover>
```
## Layout components

### Structured content

```jsx
<PopoverContent>
  <PopoverHeader>
    <PopoverTitle>Settings</PopoverTitle>
  </PopoverHeader>
  <PopoverBody>
    <Checkbox label="Notifications" />
    <Checkbox label="Dark mode" />
  </PopoverBody>
  <PopoverFooter>
    <Button variant="primary" className="w-full">Save</Button>
  </PopoverFooter>
</PopoverContent>
```

## Real-world examples

### User menu
```jsx
export function UserMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          John Doe
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" size="sm">
        <PopoverHeader>
          <PopoverTitle>John Doe</PopoverTitle>
          <PopoverDescription>john@example.com</PopoverDescription>
        </PopoverHeader>
        <PopoverBody className="p-0">
          <div className="py-2">
            <Button variant="ghost" size="sm" className="w-full justify-start h-10">Profile</Button>
            <Button variant="ghost" size="sm" className="w-full justify-start h-10">Settings</Button>
          </div>
        </PopoverBody>
        <PopoverFooter>
          <PopoverClose asChild>
            <Button variant="ghost" size="sm" className="w-full justify-start h-10">Sign out</Button>
          </PopoverClose>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
```
## Table actions

```jsx
export function TableActions({ row }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">Actions</Button>
      </PopoverTrigger>
      <PopoverContent size="sm">
        <PopoverTitle>Row actions</PopoverTitle>
        <div className="mt-2 grid gap-1 text-sm">
          <Button variant="ghost" size="sm" className="justify-start h-9">Edit</Button>
          <Button variant="ghost" size="sm" className="justify-start h-9">Duplicate</Button>
          <Button variant="danger" size="sm" className="justify-start h-9">Delete</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```
## Accessibility features

```jsx
✅ Full ARIA dialog pattern (role="dialog", aria-labelledby)
✅ Keyboard navigation (Escape closes, Tab trap for modal)
✅ Focus management (returns to trigger on close)
✅ Screen reader announcements
✅ Click-outside handling
✅ Error boundary protection
✅ Backdrop for modal mode
✅ Proper z-index stacking
✅ Resize/scroll position updates
```

## Advanced positioning

### Custom offsets

```jsx
<PopoverContent 
  side="top" 
  align="end"
  sideOffset={12}
  alignOffset={-4}
  showArrow
  size="lg"
/>
```

### Viewport collision detection

```jsx
// Automatically flips/positions within viewport
<PopoverContent 
  side="bottom"
  align="center"
  // Auto-adjusts if content would overflow
/>
```

## Integration patterns

### With form components

```jsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="secondary">Add Filter</Button>
  </PopoverTrigger>
  <PopoverContent size="lg">
    <PopoverTitle>Add Filter</PopoverTitle>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <Input placeholder="Min value" />
      <Input placeholder="Max value" />
      <NumberInput label="Threshold" />
    </div>
    <PopoverFooter className="mt-4 pt-4">
      <PopoverClose asChild>
        <Button variant="secondary">Cancel</Button>
      </PopoverClose>
      <Button variant="primary">Apply Filter</Button>
    </PopoverFooter>
  </PopoverContent>
</Popover>
```
## Animation system

```jsx
Slide + scale animations by side:
-  bottom/top: y-axis slide (8px)
-  left/right: x-axis slide (8px)
-  All: opacity 0→1 + scale 0.96→1

Smooth Framer Motion transitions:
transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
```
## Error handling

```jsx
<Popover errorFallback={<div>Something went wrong</div>}>
  {/* Error-safe content */}
</Popover>
```