---
title: "Button"
sidebar_position: 1
---

## Basic usage

```jsx title=Codeblocks
export function ButtonExamples() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant="primary" size="md">
        Primary
      </Button>

      <Button variant="secondary" size="md">
        Secondary
      </Button>

      <Button variant="ghost" size="sm">
        Ghost
      </Button>

      <Button variant="success" size="md">
        Success
      </Button>
    </div>
  );
}
```

## Props

```js
  Button props:
    export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    /** Render as child element via Radix Slot (e.g. <a>, router <Link>) */
    asChild?: boolean;
    /** Enable/disable ripple ink (true by default) */
    ripple?: boolean;
    /** Optional toggle state hint for styling */
    "data-pressed"?: "on" | "off" | boolean;
  }
```

## Variant props

### Variant

```jsx
  Semantic visual style:
    "primary" – filled button using --atom-button-bg / --atom-button-fg
    "ghost" – transparent background, primary-colored text
    "success" – success green (--atom-success)
    "danger" – error/red (--atom-error)
    "warning" – warning/orange (--atom-warning)
    "info" – info/blue (--atom-info)
    "secondary" – outlined button (--atom-border, --atom-primary)
    "icon" – round icon button (transparent, circular)
    "iconGhost" – round ghost icon button
    "iconSquare" – square icon button
    "iconSquareGhost" – square ghost icon button

  Example:
    <Button variant="primary">Save</Button>
    <Button variant="secondary">Cancel</Button>
    <Button variant="danger">Delete</Button>
    <Button variant="success">Approved</Button>
```

### Size

```jsx
  Controls height, padding and icon size:
    "sm" – compact: h-8 px-3, small icons
    "md" – default: h-10 px-4
    "lg" – large: h-12 px-5
     
  Example:
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>

  FullWidth:
  Make the button stretch horizontally:
    <Button variant="primary" fullWidth>
    Full-width action
    </Button>
```

## Behavioral props 
### asChild
```jsx
  Render the button styles on a different underlying element, via Radix Slot.
  Useful for router links or <a> tags:

  import { Link } from "react-router-dom";

  <Button asChild variant="primary">
      <Link to="/dashboard">Go to Dashboard</Link>
  </Button>

  When asChild is true:
    Button does not render a <button> element.
    It renders a Slot that passes props & class names into the child.
```
### ripple
```jsx
  Controls the ink ripple effect on pointer down.
    true (default) → ripple is enabled
    false → ripple disabled

      <Button variant="primary">With ripple</Button>
      <Button variant="primary" ripple={false}>
          No ripple
      </Button>
```
### disabled
```jsx
  Standard HTML disabled support:
    <Button variant="primary" disabled>
      Disabled
    </Button>
  
  When disabled:
    Adds disabled attribute (for native <button>)
    Adds data-disabled attribute for styling
    Ripple is suppressed
  ```
### data-pressed
```jsx
  Optional state hint for “toggle” style buttons:
    <Button
    variant="secondary"
    data-pressed={isOn ? "on" : "off"}
    onClick={() => setIsOn((v) => !v)}
    >
      {isOn ? "On" : "Off"}
    </Button>

  You can use data-pressed in your own CSS if you want custom pressed styles later.
```
### Icon buttons
```jsx
  Use one of the icon* variants and pass an icon (SVG) as the child:
  import { Button } from "@workokay/atom";
  import { FiSettings } from "react-icons/fi";

  export function IconButtons() {
    return (
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <Button variant="icon" size="sm" aria-label="Settings">
          <FiSettings />
        </Button>

        <Button variant="iconSquare" size="md" aria-label="Settings">
          <FiSettings />
        </Button>

        <Button variant="iconGhost" size="lg" aria-label="Settings">
          <FiSettings />
        </Button>
      </div>
      );
    }

  Size + variant combinations use compoundVariants to keep the button square and sized correctly.
```
### Theming behaviour
```jsx
    The Button does not hard-code colors. It resolves its styles via utility classes pointing at tokens:
      text-[var(--atom-button-fg)]
      bg-[var(--atom-button-bg)]
      hover:bg-[var(--atom-button-bg-hover)]
      Similar for success / warning / danger / info

    These tokens are set by the active theme:
      .atom-theme[data-theme="light"] {
      --atom-button-bg: var(--atom-primary);
      --atom-button-bg-hover: var(--atom-primary-800);
      --atom-button-fg: var(--atom-primary-contrast);
        /* ... */
        }

    Changing data-theme (or overriding the token values) will automatically recolor all Button instances.
```
