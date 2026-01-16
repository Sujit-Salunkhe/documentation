---
title: "StatCardA"
sidebar_position: 60
---

## Basic usage

```jsx title=Codeblocks
export function StatCardExamples() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", 
      gap: "1.5rem", 
      maxWidth: "800px" 
    }}>
      {/* Default column layout */}
      <StatCardA 
        label="Revenue" 
        value="$24,392" 
        variant="primary"
        size="md"
      />
      
      {/* Success variant */}
      <StatCardA 
        label="Orders" 
        value="1,247" 
        variant="success"
        size="md"
      />
      
      {/* Row layout */}
      <StatCardA 
        label="Growth" 
        value="+12.4%" 
        variant="success"
        order="row"
        size="lg"
      />
      
      {/* Compact */}
      <StatCardA 
        label="Users" 
        value="2.4K" 
        size="sm"
      />
    </div>
  );
}
```
## Props
```jsx
export interface StatCardAProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardVariants> {
  /** Semantic color variant */
  variant?: 'primary' | 'secondary' | 'success';
  /** Label text below value */
  label?: React.ReactNode;
  /** Main stat value/number */
  value?: React.ReactNode;
  /** Status indicator (future) */
  status?: 'high' | 'medium' | 'low';
  /** Render as child element */
  asChild?: boolean;
}
```
## Variant props
### Layout order
```jsx
"col" – flex-col items-center justify-center (default)
"colR" – flex-col-reverse items-center justify-center
"row" – flex-row items-center justify-between
"rowR" – flex-row-reverse items-center justify-between

<StatCardA order="row" label="Sales" value="$9.8K" />
```
### Sizes
```jsx
"xs" – h-[64px] w-[112px] (ultra compact)
"sm" – h-[80px] w-[128px] (default)
"md" – h-[96px] w-[160px] (bordered)
"lg" – h-[112px] w-[192px] (spacious)

<StatCardA size="xs" label="CPU" value="87%" />
<StatCardA size="lg" label="Total Revenue" value="$124K" />
```
### Color variants
```jsx
"primary" – --atom-theme-text-primary
"secondary" – --atom-theme-surface-secondary  
"success" – --atom-info-card-jobstatus-success-text

<StatCardA variant="success" label="Completed" value="98%" />
```
## Layout patterns

### Dashboard grid

```jsx
export function DashboardStats() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
      gap: "1.5rem" 
    }}>
      <StatCardA label="Total Revenue" value="$124,392" size="lg" />
      <StatCardA label="Orders" value="1,247" variant="success" />
      <StatCardA label="Avg Order" value="$99.60" />
      <StatCardA label="Conversion" value="3.2%" variant="success" order="row" />
    </div>
  );
}
```
### Compact metrics
```jsx
export function CompactMetrics() {
  return (
    <div style={{ 
      display: "flex", 
      gap: "1rem", 
      overflowX: "auto",
      padding: "1rem 0"
    }}>
      <StatCardA size="xs" label="CPU" value="87%" />
      <StatCardA size="xs" label="RAM" value="73%" />
      <StatCardA size="xs" label="Disk" value="42%" />
      <StatCardA size="xs" label="Net" value="1.2Mb" />
    </div>
  );
}
```

## Real-world examples

### KPI cards

```jsx
export function KPIOverview() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
      gap: "2rem" 
    }}>
      <StatCardA 
        size="md"
        label="Monthly Revenue" 
        value="$24,392"
        variant="primary"
      />
      <StatCardA 
        size="md"
        label="New Customers" 
        value="+184"
        variant="success"
        order="rowR"
      />
      <StatCardA 
        size="md"
        label="Retention Rate" 
        value="87%"
        variant="secondary"
      />
      <StatCardA 
        size="md"
        label="Churn Rate" 
        value="2.1%"
        variant="success"
      />
    </div>
  );
}
```
### Server metrics
```jsx
export function ServerMetrics() {
  return (
    <Paper variant="outlined" padding="lg">
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
        gap: "1rem" 
      }}>
        <StatCardA size="sm" label="CPU Usage" value="73%" />
        <StatCardA size="sm" label="Memory" value="4.2/8GB" />
        <StatCardA size="sm" label="Storage" value="128/256GB" />
        <StatCardA size="sm" label="Uptime" value="99.9%" variant="success" />
      </div>
    </Paper>
  );
}
```
## Styling details
### Base container
```
bg-[color-mix(in_oklab,var(--atom-theme-surface-tertiary)_50%,transparent)]
flex + variants
```
### Layout variants
```
col/colR: border-none shadow-none (compact)
md: border-[var(--atom-border)] border-[var(--atom-border-style)]
All: rounded-[var(--atom-radius-2)]
```
### Text styles
```
Value (primary): text-[calc(var(--atom-text-2xl))] font-semibold
Label: font-[var(--atom-text-xs)] text-[var(--atom-theme-text-secondary)]
Responsive spacing via CSS vars: --spacing, --atom-space-1
```
### Responsive grid patterns
```jsx
// Mobile-first responsive
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
  <StatCardA size="sm" label="Sales" value="$9.8K" />
  <StatCardA size="sm" label="Orders" value="247" />
  {/* ... */}
</div>
// Full-width hero stats
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <StatCardA size="lg" label="Total Revenue" value="$124K" />
  <StatCardA size="lg" label="Monthly Growth" value="+18%" variant="success" />
  <StatCardA size="lg" label="Customer Lifetime Value" value="$2,847" />
</div>
```
## Usage checklist
```jsx
✅ Use fixed sizes for uniform grids
✅ order="row" for icon+value layouts
✅ variant="success" for positive metrics
✅ Wrap in CSS Grid for responsive layouts
✅ size="md" adds subtle border
✅ Works with asChild for custom elements
✅ Full theme token integration
```