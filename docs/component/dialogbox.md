---
title: "DialogBox"
sidebar_position: 5
---

## Basic usage

```tsx title=Codeblocks
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogBody,
} from "@workokay/atom/dialog";
import { Button } from "@workokay/atom/button";

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open dialog</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            Short description about what this dialog is for.
          </DialogDescription>
        </DialogHeader>

        <DialogBody>
          <p>
            Put your form, text or any custom content here. The dialog is
            centered, scrollable, and respects the theme tokens.
          </p>
        </DialogBody>

        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Exports

```tsx titlebox=codeblocks
export {
  Dialog, // Root
  DialogTrigger, // Open trigger
  DialogPortal, // Portal into #app-root (or body fallback)
  DialogOverlay, // Backdrop
  DialogContent, // Centered panel + optional close button
  DialogHeader, // Title + description wrapper
  DialogFooter, // Actions row
  DialogTitle, // Typography wrapper
  DialogDescription, // Subtext
  DialogBody, // Scrollable content area
};
```

## Root & Trigger

### Dialog

```tsx titlebox=codeblocks
Dialog is the root state container.
It controls open/close state and handles accessibility wiring.

Usage:
  <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>Content</DialogContent>
  </Dialog>

```

### DialogTrigger

```tsx titlebox=codeblocks
Use any element to open the dialog.

Default:
  <DialogTrigger>Open dialog</DialogTrigger>

As child:
  <DialogTrigger asChild>
    <Button variant="primary">Open</Button>
  </DialogTrigger>

When asChild is true:
  The trigger does not render its own element.
  It passes onClick, aria-* and data-state into the child.

```

## Portal & Overlay

### DialogPortal

```tsx titlebox=codeblocks
Handles where the dialog is rendered in the DOM.

Behavior:
  - Tries to render inside #app-root container.
  - If #app-root is not found, falls back to document.body.
  - Ensures dialogs respect your atom-theme stacking context.

You usually don't use this directly; DialogContent wraps it for you.
```

### DialogOverlay

```tsx titlebox=codeblocksThe semi-transparent background behind the dialog.

Key behavior:
  - Covers the entire viewport (fixed inset-0).
  - Uses bg-black/50 by default.
  - Animates in/out based on data-state="open"/"closed".

Usage (handled automatically):
  <DialogContent>
    {/* DialogOverlay is already included inside */}
  </DialogContent>

```

### DialogContent

```tsx titlebox=codeblocks
interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  /** Show the top-right close icon button (default: true) */
  showClose?: boolean;
}

DialogContent:
  - Centers the dialog on screen (translate-x/y[-50%]).
  - Constrains width & height: max-w-lg, max-h-[90vh], scrolls if needed.
  - Uses theme tokens for background and border:
      bg-[var(--atom-theme-bg)]
      border-[var(--atom-theme-border)]
  - Adds rounding and shadow: rounded-lg shadow-2xl.
  - Animates scale + fade on open/close.

```

### Basic content

```tsx titlebox=codeblocks
<DialogContent>
  <DialogHeader>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description text.</DialogDescription>
  </DialogHeader>

  <DialogBody>{/* main content */}</DialogBody>

  <DialogFooter>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Save</Button>
  </DialogFooter>
</DialogContent>
```

### Show Close

```tsx titlebox=codeblocks
Control the top-right close button:

  <DialogContent showClose={false}>
    {/* No close icon in the corner */}
  </DialogContent>

Default:
  showClose = true

Behavior:
  - Renders a positioned <DialogPrimitive.Close> button in the top-right.
  - Uses lucide-react X icon.
  - Accessible: includes a visually hidden "Close" label.

```

## Layout helpers

### Dialog Header

```tsx titlebox=codeblocks
Semantic header wrapper for title + description.

Default layout:
  - Vertical stack of title and description.
  - Text centered on mobile, left-aligned on larger screens.
  - Padding: px-6 pt-6.

Usage:
  <DialogHeader>
    <DialogTitle>Dialog title</DialogTitle>
    <DialogDescription>Supporting text.</DialogDescription>
  </DialogHeader>

```

### DialogFooter

```tsx titlebox=codeblocks
Action buttons container.

Behavior:
  - Mobile: buttons stacked reversed (primary action last).
  - Desktop: row-aligned to the right with spacing.
  - Padding: px-6 pb-6.

Usage:
  <DialogFooter>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </DialogFooter>

```

### DialogBody

```tsx titlebox=codeblocks
Scrollable main content area.

Behavior:
  - Adds inner padding: px-6 py-4.
  - Inherits text color from card foreground token:
    text-(--atom-card-fg).

Usage:
  <DialogBody>
    <p>Any text, forms, lists, etc.</p>
  </DialogBody>

```

## Typography helpers

### DialogTitle

```tsx titlebox=codeblocks
Accessible heading for the dialog.

Styles:
  - text-lg font-semibold
  - leading-none tracking-tight
  - text-(--atom-card-fg)

Usage:
  <DialogTitle>Update profile</DialogTitle>

```

### DialogDescription

```tsx titlebox=codeblocks
Secondary text below the title.

Styles:
  - text-sm
  - text-(--atom-text-muted)

Usage:
  <DialogDescription>
    Make changes to your profile. Click save when you're done.
  </DialogDescription>

```

## Behavioral props & patterns

### controlled vs uncontrolled

```tsx titlebox=codeblocks
// Uncontrolled (internal state)
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>…</DialogContent>
</Dialog>

// Controlled
const [open, setOpen] = React.useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button onClick={() => setOpen(true)}>Open</Button>
  </DialogTrigger>
  <DialogContent>…</DialogContent>
</Dialog>

```

### Closing from inside

```tsx titlebox=codeblocks
Use DialogPrimitive.Close directly or wrap interactive elements:

  <DialogContent>
    <DialogBody>
      <DialogPrimitive.Close asChild>
        <Button variant="secondary">Cancel</Button>
      </DialogPrimitive.Close>
    </DialogBody>
  </DialogContent>

```

## Theming behavior

```tsx titlebox=codeblocks
The dialog respects your atom design tokens and does not hard-code colors.

Key tokens:
  --atom-theme-bg        → dialog background
  --atom-theme-border    → dialog border
  --atom-card-fg         → text color (title/body)
  --atom-text-muted      → description text
  --atom-ring-color      → focus ring for the close button

Example theme:
  .atom-theme[data-theme="light"] {
    --atom-theme-bg: #ffffff;
    --atom-theme-border: #e5e7eb;
    --atom-card-fg: #111827;
    --atom-text-muted: #6b7280;
    --atom-ring-color: #2563eb;
  }

Switching data-theme or overriding these tokens updates all dialogs automatically.

```

## Accesibility

```tsx titlebox=codeblocks
Accessibility is handled by the underlying primitives:

- Focus trapping inside dialog when open.
- aria-labelledby wired to DialogTitle.
- aria-describedby wired to DialogDescription.
- Escape key closes dialog by default.
- Screen readers recognize it as a modal dialog.

Best practices:
  - Always provide a DialogTitle.
  - Provide DialogDescription for non-trivial dialogs.
  - Ensure primary actions are reachable and keyboard focusable.

```

## Comman patterns

### Form in dialog

```jsx titlebox=codeblocks
<Dialog>
  <DialogTrigger asChild>
    <Button variant="primary">Edit profile</Button>
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Update your personal information.</DialogDescription>
    </DialogHeader>

    <DialogBody>
      <form className="space-y-4">{/* form fields */}</form>
    </DialogBody>

    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Destructive confirmation

```jsx titlebox=codeblocks
<Dialog>
  <DialogTrigger asChild>
    <Button variant="danger">Delete project</Button>
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete project</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your project.
      </DialogDescription>
    </DialogHeader>

    <DialogFooter>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Scrollble contnet

```jsx titlebox=codeblocks
<DialogContent>
  <DialogHeader>
    <DialogTitle>Terms of service</DialogTitle>
  </DialogHeader>

  <DialogBody>
    <div className="space-y-4">
      {/* long content; DialogContent has max-h-[90vh] and scrolls */}
    </div>
  </DialogBody>

  <DialogFooter>
    <Button variant="primary">Accept</Button>
  </DialogFooter>
</DialogContent>
```

### Integration notes

```jsx titlebox=codeblocks
- The portal prefers #app-root for correct stacking within your app shell.
- z-index is high (overlay 9998, content 9999) to sit above most UI.
- Animations use data-[state=open|closed] attributes, so they are
  compatible with Radix's state transitions.
- Works well alongside other overlay components (Drawer, Popover, etc.)
  as long as you respect z-index layering conventions.

```
