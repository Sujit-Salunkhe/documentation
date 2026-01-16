---
title: "Dropdown"
sidebar_position: 6
---

## Basic usage

```tsx title=Codeblocks
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
  DropdownGroup,
} from "@workokay/atom/dropdown";
import { Button } from "@workokay/atom/button";

export function DropdownExample() {
  return (
    <Dropdown>
      <DropdownTrigger variant="default">Select option</DropdownTrigger>

      <DropdownContent>
        <DropdownLabel>Fruits</DropdownLabel>

        <DropdownItem value="apple">Apple</DropdownItem>
        <DropdownItem value="banana">Banana</DropdownItem>
        <DropdownItem value="orange">Orange</DropdownItem>

        <DropdownSeparator />

        <DropdownLabel>More</DropdownLabel>

        <DropdownItem value="grapes">Grapes</DropdownItem>
        <DropdownItem value="mango">Mango</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
```

## Exports

```tsx title=Codeblocks
export {
  Dropdown, // Root state + context + error boundary
  DropdownTrigger, // Button / Slot that opens the menu
  DropdownContent, // Positioned floating menu panel (portaled)
  DropdownItem, // Selectable option
  DropdownSeparator, // Horizontal separator line
  DropdownLabel, // Section label
  DropdownGroup, // Group wrapper for items
};
```

<p>All subcomponents must be used inside <span style={{color: 'red'}}>&lt;Dropdown&gt;</span> otherwise an error is thrown by the internal context guard.</p>

## Root component

### Dropdown

```tsx title=Codeblocks
export interface DropdownProps {
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Selected value for highlighting */
  value?: string;
  /** Callback when value changes */
  onValueChange?: (value: string) => void;
  /** Disable the entire dropdown */
  disabled?: boolean;
  /** Enable scale animation on dropdown items (hover/tap) */
  animateItems?: boolean;
  /** Custom error boundary fallback */
  errorFallback?: ReactNode;
  /** Error handler callback */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  children: React.ReactNode;
}
```

### Uncontrolled & Controlled

```tsx title=codeblocks
// Uncontrolled
<Dropdown defaultOpen={false}>
  <DropdownTrigger>Open</DropdownTrigger>
  <DropdownContent>
    <DropdownItem value="one">One</DropdownItem>
  </DropdownContent>
</Dropdown>

// Controlled
const [open, setOpen] = useState(false)
const [value, setValue] = useState<string>()

<Dropdown
  open={open}
  onOpenChange={setOpen}
  value={value}
  onValueChange={setValue}
>
  <DropdownTrigger>
    {value ?? 'Select value'}
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem value="one">One</DropdownItem>
    <DropdownItem value="two">Two</DropdownItem>
  </DropdownContent>
</Dropdown>

```

### Error boundry

The root wraps everything in an internal <span style={{color:"green"}}> DropdownErrorBoundary :</span>

<ul> 
    <li>Catches runtime errors inside dropdown children.</li>
    <li>Logs errors to console.</li>
    <li>Calls optional onError(error, errorInfo).</li>
    <li>Renders errorFallback if provided, otherwise nothing.</li>
</ul>

```jsx title=codeblocks
<Dropdown
  errorFallback={<span>Something went wrong</span>}
  onError={(error) => reportError(error)}
>
  {/* dropdown children */}
</Dropdown>
```

## Trigger

### Dropdown Trigger

```jsx title=codeblocks
export interface DropdownTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof dropdownTriggerVariants> {
  asChild?: boolean;
}
```

<ul>
    <li>Renders either a ` button ` or a Radix ` Slot ` when ` asChild ` is true.</li>
    <li>Manages open/close on click and keyboard (Space, Enter, ArrowUp, ArrowDown).</li>
    <li>Wires ARIA: `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`.</li>
</ul>

### Variants

```jsx title=codeblocks
type DropdownTriggerVariant = "default" | "ghost";
```

default
  - Solid surface With Theme

ghost
  - Transparent,subtle hover backgroud

#### Example

```jsx title=codeblocks
// Standard trigger
<DropdownTrigger variant="default">
  Open menu
</DropdownTrigger>

// Ghost trigger (default)
<DropdownTrigger>
  Ghost trigger
</DropdownTrigger>

// As child (for custom components)
<DropdownTrigger asChild>
  <Button variant="primary">
    Custom trigger
  </Button>
</DropdownTrigger>
```

## Content

### DropdownContent

```jsx title=codeblocks
export type DropdownSide = 'top' | 'bottom' | 'left' | 'right'
export type DropdownAlign = 'start' | 'center' | 'end'

export interface DropdownContentProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'children' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
  >,
    VariantProps<typeof dropdownContentVariants> {
  /** Portal container (defaults to theme portal / document.body) */
  container?: HTMLElement | null
  /** Offset from trigger in pixels */
  sideOffset?: number
  /** Align offset in pixels */
  alignOffset?: number
  /** Prevent closing on content click */
  preventClose?: boolean
  /** Close dropdown when an item is selected */
  closeOnSelect?: boolean
  children?: React.ReactNode
}
```
- Renders into a portal (theme container via `useThemePortal`, then `container` prop, else `document.body`).

- Positions using a custom `usePosition` hook with collision handling and scroll/resize listeners.

- Uses `framer-motion + AnimatePresence` for enter/exit animations.

- Role: `role="menu"` with `aria-labelledby`, `aria-orientation`, and `aria-activedescendant`.


### Positioning

```jsx title=codeblocks
<DropdownContent
  side="bottom"      // 'top' | 'bottom' | 'left' | 'right'
  align="start"      // 'start' | 'center' | 'end'
  sideOffset={4}     // gap from trigger
  alignOffset={0}    // horizontal/vertical offset
>
  {/* items */}
</DropdownContent>
```
The menu uses fixed positioning and automatically clamps to viewport edges with a small padding.

Closing behavior
- Click outside → closes (unless preventClose).

- Escape key → closes and returns focus to trigger.

- Item selection → closes unless the item sets preventClose.

## Items

### Dropdownitem

```jsx title=codeblocks
export interface DropdownItemProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
  > {
  disabled?: boolean
  /** Prevent closing on click */
  preventClose?: boolean
  /** Value for this item */
  value?: string
}
```
- Role: `role="menuitem"`.
- Keyboard support:
    - Enter/Space:select item
    - ArrowUp/ArrowDown: move between items
    - Home/End: jump to first/last item.
    - Tab / Shift+Tab: move focus and optionally close on boundaries.

- ARIA
    - `aria-disabled`, `data-disabled`, `data-selected`.
    - `aria-activedescendant` managed on the menu via `activeDescendant`.

- Selection
    - `value` is compared against the dropdown’s selected value.
    -  Selected item gets `data-selected` and special styles

```jsx title=codeblocks
<Dropdown value={value} onValueChange={setValue}>
  <DropdownTrigger>
    {value || 'Select'}
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem value="light">Light</DropdownItem>
    <DropdownItem value="dark">Dark</DropdownItem>
  </DropdownContent>
</Dropdown>
```
### Prevent close

```jsx title=codeblocks
<DropdownItem value="edit" preventClose>
  Edit (keep menu open)
</DropdownItem>
 ```
### Item aniamtion
    - When `Dropdown` `animateItems` is `true`,items use `whileHover` / `WhileTap` scale effects from `framer-motion`.   
    - Disabled items do not animate.

```jsx title=codeblocks
   <Dropdown animateItems>
  {/* items scale subtly on hover/tap */}
</Dropdown>
```

## Grouping & labels

### DropdownGroup

```jsx title=codeblocks
export interface DropdownGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
```

```jsx title=codeblocks
export interface DropdownGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
```

```jsx title=codeblocks
<DropdownContent>
  <DropdownGroup>
    <DropdownLabel>Account</DropdownLabel>
    <DropdownItem value="profile">Profile</DropdownItem>
    <DropdownItem value="billing">Billing</DropdownItem>
  </DropdownGroup>

  <DropdownSeparator />

  <DropdownGroup>
    <DropdownLabel>Danger zone</DropdownLabel>
    <DropdownItem value="delete" disabled>
      Delete account
    </DropdownItem>
  </DropdownGroup>
</DropdownContent>
```
### DropdownLabel
- Role: role="presentation".

- Typography: small, bold, muted color.

- Use to visually group sections.

### DropdownSeparator
- Role: role="separator".

- A thin horizontal line with theme border color.

## Accessibility
- Root live region announces selection:

```jsx title=codeblocks
<div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
  {selectedValue && `Selected: ${selectedValue}`}
</div>
```

- Trigger:

    - aria-haspopup="menu ".

    - aria-expanded and aria-controls.

- Content:

    - role="menu", aria-labelledby, aria-orientation.

    - Active item tracked via aria-activedescendant.

- Keyboard:

    - Trigger: Enter / Space / Arrow keys open menu.

    - Content: full arrow key navigation, Home/End, Escape closes and refocuses trigger.

## Theming

The dropdown uses atom theme tokens and avoids hard-coded colors:

- Menu surface: bg-[var(--atom-theme-bg)]

- Border: border-[var(--atom-theme-border)]

- Trigger text: text-[var(--atom-theme-text-primary)]

- Muted text: text-[var(--atom-text-secondary)]

- Focus rings: focus-visible:ring-[var(--atom-primary)]

- Adjusting these tokens in your theme automatically restyles all dropdowns.

## Error Handling

- Any runtime error inside Dropdown children is captured by the internal error boundary.

- Use errorFallback to show a custom UI instead of breaking the page.

- Use onError to log to monitoring or analytics.

