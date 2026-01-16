---
title: "StatCardB"
sidebar_position: 62
---

## Basic usage

```jsx title=Codeblocks
export function StatCardBExamples() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
      gap: "1.5rem" 
    }}>
      {/* Default neutral */}
      <StatCardB 
        label="Completed" 
        value="1,247" 
        variant="success"
      />
      
      {/* With icon */}
      <StatCardB 
        label="Failed" 
        value="23" 
        variant="danger"
        icon={<Circle className="h-3 w-3 fill-current" />}
      />
      
      {/* Full width */}
      <StatCardB 
        label="Total Users" 
        value="12,847" 
        variant="primary"
        fullWidth
        size="lg"
      />
      
      {/* Ghost appearance */}
      <StatCardB 
        label="Pending" 
        value="456" 
        variant="warning"
        appearance="ghost"
      />
    </div>
  );
}
```
## Props

```js
export interface StatCardBProps
  extends React.HTMLAttributes<HTMLDivElement>,
    StatCardBVariantProps {
  /** Required title */
  label: string;
  /** Required main metric value */
  value: React.ReactNode;
  /** Optional top-right icon */
  icon?: React.ReactNode;
  /** Render as child (Link, Button, etc.) */
  asChild?: boolean;
}
```
## Variant props
### Semantic variants
```jsx
"neutral" – text-[var(--atom-text)] (default)
"primary" – text-[var(--atom-primary)]
"success" – text-[var(--atom-success)]
"warning" – text-[var(--atom-warning)]
"danger" – text-[var(--atom-error)]
"info" – text-[var(--atom-info)]
"accent" – text-[var(--atom-accent)]

<StatCardB variant="success" label="Validated" value="98%" />
<StatCardB variant="danger" label="Errors" value="12" />
```
### Sizes
```jsx
"sm" – h-[72px] w-[160px] gap-1
"md" – h-[84px] w-[200px] gap-1.5 (default)
"lg" – h-[96px] w-[240px] gap-2

<StatCardB size="sm" label="CPU" value="87%" />
<StatCardB size="lg" label="Total Revenue" value="$124K" />
```
### Appearance
```jsx
"elevated" – shadow-sm (default)
"outlined" – shadow-none bg-transparent
"ghost" – no border/bg, hover:bg-[var(--atom-card-bg)]
"soft" – bg-[var(--atom-card-bg)] no shadow/border

<StatCardB appearance="ghost" label="Draft" value="5" />
<StatCardB appearance="soft" label="Active" value="23" />
```
## Layout patterns

### Status overview
```jsx
export function StatusCards() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
      gap: "1rem" 
    }}>
      <StatCardB label="Validated" value="1,247" variant="success" />
      <StatCardB label="Pending" value="456" variant="warning" />
      <StatCardB label="Failed" value="23" variant="danger" icon={<X className="h-3 w-3" />} />
      <StatCardB label="Skipped" value="12" variant="neutral" />
    </div>
  );
}
```

### Job/pipeline metrics
```jsx
export function PipelineStats() {
  return (
    <Paper padding="lg">
      <div style={{ 
        display: "flex", 
        gap: "1rem", 
        flexWrap: "wrap"
      }}>
        <StatCardB label="Completed" value="98" variant="success" size="sm" />
        <StatCardB label="Running" value="4" variant="info" size="sm" />
        <StatCardB label="Failed" value="2" variant="danger" size="sm" />
        <StatCardB label="Queued" value="15" variant="warning" size="sm" />
      </div>
    </Paper>
  );
}
```
## Real-world examples

### Build status dashboard

```jsx
export function BuildStatus() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
      gap: "1.5rem" 
    }}>
      <StatCardB 
        label="Passing Builds" 
        value="1,847" 
        variant="success"
        icon={<CheckCircle className="h-3.5 w-3.5" />}
      />
      <StatCardB 
        label="Failed Builds" 
        value="23" 
        variant="danger"
        appearance="outlined"
      />
      <StatCardB 
        label="Avg Duration" 
        value="2m 14s" 
        variant="neutral"
        fullWidth
      />
    </div>
  );
}
```
## Base styles
```js
flex flex-col justify-center
rounded-xl border bg-[var(--atom-theme-surface-primary)]
border-[var(--atom-theme-border-primary)]
px-4 py-3
transition-colors duration-150 ease-in-out
shadow-sm
```
## Integration patterns

### With responsive grids
```jsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
  <StatCardB label="CPU" value="73%" variant="warning" size="sm" fullWidth />
  <StatCardB label="RAM" value="4.2GB" variant="neutral" size="sm" fullWidth />
  <StatCardB label="Disk" value="128GB" variant="info" size="sm" fullWidth />
</div>
```
### In table headers
```jsx
<Paper padding="md">
  <div className="flex items-center justify-between">
    <Heading as="h3">Recent Activity</Heading>
    <div className="flex gap-2">
      <StatCardB label="Today" value="12" size="sm" appearance="ghost" />
      <StatCardB label="Week" value="89" size="sm" appearance="ghost" />
    </div>
  </div>
</Paper>
```
## Usage checklist
```jsx
✅ label (string) is required
✅ value (ReactNode) is required  
✅ Use variant for semantic meaning
✅ size="sm" for dense layouts
✅ appearance="ghost" for inline/subtle
✅ fullWidth for grid filling
✅ icon for small status indicators
✅ asChild for links/buttons
```
Compact, semantic stat cards perfect for status overviews, build pipelines, notifications, and metrics dashboards!

