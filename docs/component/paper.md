---
title: "Paper"
sidebar_position: 45
---

## Basic usage

```jsx title=Codeblocks
export function PaperExamples() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "500px" }}>
      {/* Default outlined */}
      <Paper padding="md" radius="md">
        <Heading as="h3" size="md">Default Paper (outlined)</Heading>
        <p className="mt-2 text-sm text-[var(--atom-text-muted)]">
          Surface with border, background, and subtle shadow.
        </p>
      </Paper>

      {/* Flat variant */}
      <Paper variant="flat" padding="lg" radius="lg">
        <Heading as="h3" size="md">Flat Paper</Heading>
        <p className="mt-2 text-sm">No border, just surface + shadow.</p>
      </Paper>

      {/* Dashed variant */}
      <Paper variant="dashed" size="sm" padding="sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[var(--atom-primary)] rounded-full"></span>
          <span>Quick note</span>
        </div>
      </Paper>
    </div>
  );
}
```
## Props
```js
export interface PaperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PaperVariantProps {
  /** Render as child component (Radix Slot) */
  asChild?: boolean;
}
```
## Variant props

### Variant

```jsx
"outlined" – border border-[var(--atom-theme-border)] (default)
"flat" – No border styling
"dashed" – bg-transparent border border-dashed border-[var(--atom-border)]

<Paper variant="outlined">Bordered surface</Paper>
<Paper variant="flat">Clean surface</Paper>
<Paper variant="dashed">Dashed outline</Paper>
```

## Size (text scaling)

```jsx
"none" – No text scaling
"sm" – text-sm
"md" – text-base (default)
"lg" – text-lg

<Paper size="sm" padding="md">Small text</Paper>
<Paper size="lg" padding="md">Large text</Paper>
```

## Padding

```jsx
"none" – p-0
"sm" – p-4
"md" – p-6 (default)
"lg" – p-8

<Paper padding="none" className="p-3">Custom padding</Paper>
<Paper padding="lg">Generous padding</Paper>
```
## Radius

```jsx
"none" – rounded-none
"sm" – rounded-sm
"md" – rounded-md (default)
"lg" – rounded-lg

<Paper radius="none">Square corners</Paper>
<Paper radius="lg">Fully rounded</Paper>
```

## Behavioral props

### asChild
```jsx
<Paper asChild variant="outlined" padding="md">
  <section className="max-w-md">
    <Heading as="h3">Paper on custom element</Heading>
    Paper styles applied to section.
  </section>
</Paper>

<Paper asChild variant="flat">
  <article>Article styled as Paper surface</article>
</Paper>
```

## Real-world examples

### Dashboard cards

```jsx
export function DashboardPapers() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
      gap: "1.5rem" 
    }}>
      <Paper variant="outlined" padding="md">
        <Heading as="h4" size="md">Revenue</Heading>
        <div className="mt-3 text-2xl font-bold">$24,392</div>
        <div className="mt-1 text-sm text-[var(--atom-text-muted)]">+12% from last month</div>
      </Paper>

      <Paper variant="flat" padding="md">
        <Heading as="h4" size="md">Active Users</Heading>
        <div className="mt-3 text-2xl font-bold">1,247</div>
      </Paper>

      <Paper variant="dashed" padding="sm" size="sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-[var(--atom-warning)] rounded-full animate-pulse"></span>
          Maintenance in 2h
        </div>
      </Paper>
    </div>
  );
}
```
### Content blocks
```jsx
<Paper variant="outlined" padding="lg" radius="lg" className="max-w-2xl">
  <Heading as="h2" size="lg">Welcome to Atom UI</Heading>
  <p className="mt-4 text-[var(--atom-text-muted)] leading-relaxed">
    Production-ready React components built with TypeScript, Tailwind CSS, 
    and your design token system.
  </p>
  <div className="mt-6 flex gap-3">
    <Button variant="primary">Get Started</Button>
    <Button variant="secondary">View Docs</Button>
  </div>
</Paper>
```

### Inline annotations

```jsx
<div className="max-w-2xl">
  <p className="mb-4">
    Paper works great for inline content blocks and callouts.
  </p>
  
  <Paper variant="flat" padding="sm" size="sm" radius="sm" className="mb-4">
    <ContentCard variant="info" size="sm">
      Pro tip: Use <code>variant="dashed"</code> for annotations
    </ContentCard>
  </Paper>
  
  <Paper variant="outlined" padding="md">
    <Heading as="h5" size="sm">Next steps</Heading>
    <ul className="mt-2 space-y-1 text-sm">
      <li>✅ Install Atom UI</li>
      <li>📦 Add to your project</li>
      <li>🎨 Customize tokens</li>
    </ul>
  </Paper>
</div>
```

## Integration patterns

### With form components

```jsx
<Paper variant="outlined" padding="lg" className="max-w-md">
  <Heading as="h3" size="md" className="mb-6">Quick Settings</Heading>
  <div className="space-y-4">
    <Input label="Display name" />
    <Checkbox label="Enable notifications" />
    <NumberInput 
      showSpinners 
      label="Refresh rate (s)" 
      min={1} 
      max={60}
    />
    <div className="pt-2 flex gap-2">
      <Button variant="secondary" className="flex-1">Cancel</Button>
      <Button variant="primary" className="flex-1">Save</Button>
    </div>
  </div>
</Paper>
```
## Base styles (always applied)
```js
css
transition-colors duration-200
bg-[var(--atom-theme-surface-primary)]
shadow-[var(--atom-border-xs2)]
Accessibility features
jsx
✅ Semantic data-slot="paper"
✅ Works with asChild (maintains child semantics)
✅ Theme-aware contrast ratios
✅ Keyboard focus compatible
✅ Screen reader friendly surfaces
✅ Elevation hierarchy via shadow tokens
```
## Theming behavior
```jsx
Core tokens:
--atom-theme-surface-primary (background)
--atom-theme-border (outlined/dashed borders)
--atom-border-xs2 (subtle shadow)
--atom-border (dashed variant)

All variants respond instantly to theme changes.
```
## Variant matrix

| Variant ↓ Padding → | none         | sm (p-4) | md (p-6) | lg (p-8) |
| ------------------- | ------------ | -------- | -------- | -------- |
| outlined            | Border frame | Tight    | Balanced | Spacious |
| flat                | Surface only | Widget   | Panel    | Hero     |
| dashed              | Dashed frame | Note     | Callout  | Section  |

