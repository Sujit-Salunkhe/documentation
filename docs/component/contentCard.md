---
title: "Content Card"
sidebar_position: 15
---

## Basic usage

```jsx title=Codeblocks
import { FiInfo, FiCheck, FiAlertTriangle, FiX } from "react-icons/fi";

export function ContentCardExamples() {
  return (
    <>
      {/* Default */}
      <ContentCard 
        title="Default card"
        footer="Updated 2 minutes ago"
      >
        Standard content card with automatic layout.
      </ContentCard>

      <div style={{ height: "1rem" }} />

      {/* Status variants */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <ContentCard 
          variant="success"
          icon={<FiCheck />}
          title="Success"
          footer="Task completed successfully"
        >
          All operations completed without errors.
        </ContentCard>

        <ContentCard 
          variant="warning" 
          icon={<FiAlertTriangle />}
          title="2 Warnings"
          footer="Review required"
        >
          Minor issues detected during validation.
        </ContentCard>

        <ContentCard 
          variant="error"
          icon={<FiX />}
          title="Validation Failed"
          footer="Fix 3 errors to continue"
        >
          Required fields missing or invalid data format.
        </ContentCard>

        <ContentCard 
          variant="info"
          icon={<FiInfo />}
          title="New Feature"
          footer="Available now"
        >
          ContentCard component added to Atom UI library.
        </ContentCard>
      </div>
    </>
  );
}
```

## Props
```js
export interface ContentCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Semantic status variant */
  variant?: ContentCardVariant;
  /** Content sizing */
  size?: ContentCardSize;
  /** Optional title (renders as h3) */
  title?: string;
  /** Optional leading icon */
  icon?: React.ReactNode;
  /** Optional footer text */
  footer?: React.ReactNode;
  children: React.ReactNode;
}
```

## Variant props

### Variants (status colors)

```jsx
"info" – light blue (information/notifications)
"success" – light green (positive/complete)
"warning" – light yellow (caution/attention)  
"error" – light red (problems/failures)
"neutral" – subtle gray (archived/low priority)
"default" – theme surface (standard content)

Using color-mix(in_srgb) for perfect theme-aware tints:
bg-[color-mix(in_srgb,var(--atom-success)_8%,transparent)]

Examples:
<ContentCard variant="success" title="✓ Complete">Done!</ContentCard>
<ContentCard variant="error" title="✗ Failed">Check logs</ContentCard>
Sizes
jsx
"sm" – p-3 text-xs gap-2 (compact)
"md" – p-4 text-sm gap-3 (default) 
"lg" – p-6 text-base gap-4 (spacious)

<ContentCard size="sm" title="Compact">Small content</ContentCard>
<ContentCard size="lg" title="Spacious">Roomy content area</ContentCard>
```
## Layout patterns

### With icon + title + footer

```jsx
<ContentCard 
  variant="info"
  size="md"
  icon={<FiInfo />}
  title="Database Migration"
  footer="Completed at 14:32"
>
  Successfully migrated 12,847 records to production database.
</ContentCard>
```
### Compact status (no title)

```jsx
<ContentCard variant="success" size="sm" icon={<FiCheck />}>
  All tests passed ✓
</ContentCard>

<ContentCard variant="warning" size="sm" icon={<FiAlertCircle />}>
  3 deprecation warnings
</ContentCard>
```
### Footer usage

```jsx
<ContentCard title="API Response" footer="Last updated: Jan 16, 2026">
  Status: 200 OK<br/>
  Response time: 147ms
</ContentCard>
```
## Real-world examples

### Form validation states

```jsx
export function FormValidationCards() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <ContentCard 
        variant="success" 
        icon={<FiCheck />}
        size="sm"
        title="Email Valid"
      >
        user@example.com ✓
      </ContentCard>

      <ContentCard 
        variant="error"
        icon={<FiX />}
        size="sm" 
        title="Password Invalid"
      >
        Must be 8+ characters with special chars
      </ContentCard>

      <ContentCard 
        variant="warning"
        icon={<FiAlertTriangle />}
        size="sm"
        title="Phone Incomplete"
      >
        Missing country code
      </ContentCard>
    </div>
  );
}
```

### Build status cards

```jsx
export function BuildStatusCards() {
  const builds = [
    { status: "success", message: "Production deploy", time: "2m ago" },
    { status: "warning", message: "2 lint warnings", time: "5m ago" },
    { status: "error", message: "Tests failed", time: "8m ago" },
  ];

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {builds.map(({ status, message, time }, i) => (
        <ContentCard
          key={i}
          variant={status as any}
          size="sm"
          title={message}
          footer={time}
        >
          Build #{i + 1}
        </ContentCard>
      ))}
    </div>
  );
}
```

### Notification cards
```jsx
<ContentCard 
  variant="info"
  icon={<FiBell />}
  title="New Component"
  footer="Atom UI v1.2.0"
>
  ContentCard added with full variant + size support.
</ContentCard>
```

## Accessibility features

```jsx
✅ role="region" for screen readers
✅ aria-live="polite" on error/warning (announces automatically)
✅ Proper heading hierarchy (h3 for title)
✅ Icon aria-hidden (decorative only)
✅ Semantic data-slot="content-card"
✅ Theme-aware color contrast
✅ Keyboard selectable (select-text)
✅ Focus-visible transitions
```
## Theming behavior
```jsx
Advanced color-mix blending:

bg-[color-mix(in_srgb,var(--atom-success)_8%,transparent)]
→ 8% success tint over surface

border-[color-mix(in_srgb,var(--atom-success)_25%,transparent)]
→ 25% success border

text-[color-mix(in_srgb,var(--atom-success)_90%,black)]
→ Near-pure success text

Icon colors match variant automatically:
variant="error" → text-[var(--atom-error)]

Perfect light/dark mode support via theme tokens.
```
## Advanced patterns
### Inline with actions
```jsx
<div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
  <ContentCard 
    variant="error" 
    size="sm"
    icon={<FiX />}
    className="flex-1"
  >
    Failed to save draft
  </ContentCard>
  <Button variant="primary" size="sm">Retry</Button>
</div>
```
### Table row integration
```jsx
// Perfect for table status cells
<td>
  <ContentCard 
    variant="success" 
    size="sm"
    icon={<FiCheck />}
    className="w-full"
  >
    Active
  </ContentCard>
</td>
```
## Size + Variant matrix

| Size \\ Variant | default         | info | success | warning | error | neutral |
| -------------- | --------------- | ---- | ------- | ------- | ----- | ------- |
| sm             | Compact neutral | 🔵   | ✅       | 🟡      | ❌     | ⚪       |
| md             | Standard        | ℹ️   | ✓       | ⚠️      | ✗     | ·       |
| lg             | Spacious        | i    | check   | !       | x     | -       |