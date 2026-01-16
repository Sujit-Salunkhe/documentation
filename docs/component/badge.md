---
title: "Badge"
sidebar_position: 5
---

## Basic usage

```jsx title=Codeblocks
export function BadgeExamples() {
  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
      <Badge variant="primary" tone="medium">
        Primary
      </Badge>
      
      <Badge variant="success" tone="high">
        Success
      </Badge>
      
      <Badge variant="warning" tone="medium">
        12 Pending
      </Badge>
      
      <Badge variant="danger" tone="high">
        Critical
      </Badge>
      
      <Badge variant="info" tone="low">
        New
      </Badge>
      
      <Badge variant="neutral" tone="medium">
        Draft
      </Badge>
    </div>
  );
}
```
## Props

```jsx title=codeblocks
export type BadgeProps = React.ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeVariants> & {
    /** Render as child element via Radix Slot */
    asChild?: boolean;
    /** Semantic color variant */
    variant?: BadgeVariant;
    /** Intensity level within variant */
    tone?: BadgeTone;
  };
```

## Variant props

### Variant + Tone system

```jsx title =codeblocks
8 semantic variants × 3 tone levels = 24 combinations:

**Variants:**
primary – main brand color
secondary – subtle secondary brand
success – green (positive/complete)
warning – yellow/orange (caution)
danger – red (error/critical)  
info – blue (information)
neutral – gray (neutral/status)
accent – purple/pink (highlight/special)

**Tones:**
"low" – subtle, outline-like (default)
"medium" – moderate fill
"high" – solid, high contrast

Examples:
<Badge variant="primary" tone="low">Primary Low</Badge>
<Badge variant="primary" tone="medium">Primary Medium</Badge>
<Badge variant="primary" tone="high">Primary High</Badge>

<Badge variant="success" tone="high">✓ Complete</Badge>
<Badge variant="danger" tone="high">✗ Failed</Badge>
<Badge variant="warning" tone="medium">⚠ 2 Warnings</Badge>
```


## Icon support
```jsx title =Codeblocks
import { FiBell, FiCheck, FiAlertTriangle } from "react-icons/fi";

export function BadgeWithIcons() {
  return (
    <div style={{ display: "flex", gap: "0.75rem" }}>
      <Badge variant="info" tone="medium">
        <FiBell />
        5 New
      </Badge>
      
      <Badge variant="success" tone="high">
        <FiCheck />
        Complete
      </Badge>
      
      <Badge variant="warning" tone="medium">
        <FiAlertTriangle />
        Warnings
      </Badge>
    </div>
  );
}
```

## Behavioral props

### asChild
```jsx title =Codeblocks
Render badge styles on any child element:

<Badge asChild variant="success" tone="high">
  <a href="#completed" className="no-underline hover:no-underline">
    ✓ Task Complete
  </a>
</Badge>

<Badge asChild variant="primary" tone="medium">
  <button type="button" onClick={() => {}}>
    Edit
  </Badge>

Badge becomes a Slot, passing classes/props to single child.
```

### Numbers & Status

```jsx title =Codeblocks
// Notification counts
<Badge variant="info" tone="high">42</Badge>
<Badge variant="primary" tone="medium">1.2K</Badge>

// Status badges
<Badge variant="success" tone="low">Active</Badge>
<Badge variant="danger" tone="medium">Blocked</Badge>
<Badge variant="warning" tone="high">Review</Badge>
<Badge variant="neutral" tone="low">Draft</Badge>
```


### Sizing & Layout

```jsx title =Codeblocks
// Fixed height, auto-width by default
<Badge variant="secondary" tone="medium" className="px-3">
  Custom padding
</Badge>

// Stack multiple badges
<div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
  <Badge variant="success" tone="high">Published</Badge>
  <Badge variant="primary" tone="low">Pro</Badge>
  <Badge variant="info" tone="medium">Sponsored</Badge>
</div>
```

### Accessibility features

```jsx title =Codeblocks
Built-in a11y support:

✅ Focus ring with theme colors
✅ Proper contrast ratios across all variants/tones  
✅ Semantic data-slot="badge" attribute
✅ Screen reader friendly sizing (text-xs readable)
✅ Works with screen magnifiers (no overflow clipping issues)
✅ Keyboard focus visible on all interactive children via asChild
```

### Theming behavior
```jsx title =Codeblocks
Complete token-based theming:

Each variant×tone combo maps to specific tokens:
--atom-badge-{variant}-{bg,fg,border}-{tone}

Examples:
primary-medium → --atom-badge-primary-bg-medium
success-high → --atom-badge-success-bg-high
danger-low → --atom-badge-danger-border-low

Theme structure:
.atom-theme[data-theme="light"] {
  --atom-badge-primary-bg-low: rgba(var(--atom-primary-rgb), 0.1);
  --atom-badge-primary-fg-low: hsl(var(--atom-primary));
  /* 48 total tokens (8×3×2 per theme) */
}

Full theme switching support – all 24 combinations update instantly.
```

### Compound variant matrix

| Variant ↓ / Tone → | low (subtle)   | medium      | high (solid)    |
| ------------------ | -------------- | ----------- | --------------- |
| primary            | Outline        | Semi-fill   | Solid brand     |
| secondary          | Subtle outline | Muted fill  | Solid secondary |
| success            | Light green    | Green fill  | Solid success ✓ |
| warning            | Pale yellow    | Amber fill  | Solid warning ⚠ |
| danger             | Light red      | Red fill    | Solid danger ✗  |
| info               | Light blue     | Blue fill   | Solid info ℹ    |
| neutral            | Light gray     | Gray fill   | Solid neutral   |
| accent             | Light purple   | Purple fill | Solid accent    |

## Advanced usage

### Data table badges

```jsx title =Codeblocks
export function TableBadges() {
  const statuses = [
    { id: 1, status: "active", count: 42 },
    { id: 2, status: "pending", count: 12 },
    { id: 3, status: "error", count: 3 },
  ];

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
          <th>ID</th>
          <th>Status</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {statuses.map(({ id, status, count }) => (
          <tr key={id} style={{ borderBottom: "1px solid #f3f4f6" }}>
            <td style={{ padding: "0.75rem" }}>{id}</td>
            <td style={{ padding: "0.75rem" }}>
              <Badge 
                variant={status === "active" ? "success" : status === "pending" ? "warning" : "danger"}
                tone="high"
              >
                {status.toUpperCase()}
              </Badge>
            </td>
            <td style={{ padding: "0.75rem" }}>
              <Badge variant="neutral" tone="medium">
                {count}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

## Notification badges
```jsx title = Codeblocks
<Badge variant="danger" tone="high" className="absolute -top-2 -right-2">
  99+
</Badge>
text
```

