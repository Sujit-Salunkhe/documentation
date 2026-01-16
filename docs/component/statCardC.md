---
title: "StatCardC"
sidebar_position: 64
---

## Basic usage

```jsx title=Codeblocks

export function StatCardCExamples() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: "1rem", 
      maxWidth: "500px" 
    }}>
      {/* Priority variants */}
      <StatCardC 
        label="High Priority Tasks" 
        value="12" 
        variant="high"
        size="md"
      />
      
      <StatCardC 
        label="Medium Priority" 
        value="23" 
        variant="medium"
      />
      
      <StatCardC 
        label="Low Priority Items" 
        value="156" 
        variant="low"
        pillIcon={<TrendingUp className="h-3 w-3" />}
      />
      
      {/* Compact inline */}
      <div className="flex gap-2">
        <StatCardC label="Urgent" value="3" variant="high" size="sm" />
        <StatCardC label="Today" value="8" variant="primary" size="sm" />
      </div>
    </div>
  );
}
```
## Props

```jsx

export interface StatCardCProps
  extends React.HTMLAttributes<HTMLDivElement>,
    StatCardCVariantProps {
  /** Required label text */
  label: string;
  /** Required pill value */
  value: React.ReactNode;
  /** Optional icon inside pill */
  pillIcon?: React.ReactNode;
}
```
## Variant props

### Priority variants
```jsx

"primary" – text-[var(--atom-primary)]
"high" – text-[var(--atom-error)] (urgent)
"medium" – text-[var(--atom-warning)]
"low" – text-[var(--atom-success)] (good)
"neutral" – text-[var(--atom-text)] (default)

<StatCardC variant="high" label="Critical Bugs" value="5" />
<StatCardC variant="low" label="Completed" value="98%" />
```
## Sizes

```jsx

"sm" – h-10 max-w-[320px] (compact)
"md" – h-12 max-w-[400px] (default)
"lg" – h-14 max-w-[480px] (spacious)

<StatCardC size="sm" label="Alerts" value="2" />
<StatCardC size="lg" label="Project Priority" value="High" />
```
## Appearance

```jsx

"elevated" – shadow-sm (default)
"outlined" – no background/shadow
"ghost" – transparent, hover effect
"soft" – card background, no border

<StatCardC appearance="ghost" label="Draft" value="12" />
```
## Layout patterns

### Priority dashboard

```jsx

export function PriorityOverview() {
  return (
    <Paper padding="lg">
      <Heading as="h3" size="md" className="mb-6">Task Priority</Heading>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <StatCardC label="🚨 Critical (P0)" value="3" variant="high" />
        <StatCardC label="⚠️ High (P1)" value="12" variant="medium" />
        <StatCardC label="📋 Medium (P2)" value="28" variant="neutral" />
        <StatCardC label="✅ Low (P3)" value="156" variant="low" pillIcon={<Check className="h-3 w-3" />} />
      </div>
    </Paper>
  );
}
```
## Inline status row

```jsx

export function TaskRow() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <div className="font-medium">Database Migration</div>
        <div className="text-sm text-[var(--atom-text-muted)]">Scheduled for 2:30 PM</div>
      </div>
      <StatCardC label="Priority" value="High" variant="high" size="sm" appearance="ghost" />
    </div>
  );
}
```
## Real-world examples

### Bug tracker

```jsx

export function BugStats() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
      gap: "1rem" 
    }}>
      <StatCardC 
        label="P0 - Critical" 
        value="2" 
        variant="high" 
        size="lg"
        pillIcon={<Bug className="h-4 w-4" />}
      />
      <StatCardC 
        label="P1 - High" 
        value="15" 
        variant="medium" 
        size="lg"
      />
      <StatCardC 
        label="P2 - Medium" 
        value="42" 
        variant="neutral" 
        size="lg"
      />
    </div>
  );
}
```
## Pill styling details

```jsx
Dynamic colored pills by variant:
high: bg-[color-mix(in_srgb,var(--atom-error)_15%,transparent)]
medium: bg-[color-mix(in_srgb,var(--atom-warning)_15%,transparent)]
low: bg-[color-mix(in_srgb,var(--atom-success)_15%,transparent)]
primary: subtle surface tint
neutral: muted border tint

All pills: rounded-md px-2.5 py-1 text-xs font-medium
```
## Custom content

```jsx
// Rich pill content
<StatCardC 
  label="Conversion Rate" 
  value={
    <>
      <TrendingUp className="h-3 w-3 mr-1" />
      3.2%
    </>
  } 
  variant="low" 
/>
```
## Responsive patterns

```jsx
// Stacked on mobile
<div className="space-y-2 lg:flex lg:gap-3 lg:space-y-0">
  <StatCardC label="Urgent" value="3" variant="high" />
  <StatCardC label="Today" value="12" variant="primary" />
</div>

// Table row integration
<td className="py-3">
  <StatCardC label="Priority" value="High" variant="high" size="sm" appearance="ghost" />
</td>
```
## Base styles

```
flex items-center justify-between
rounded-xl border bg-[var(--atom-theme-surface-primary)]
px-4 py-3 w-full transition-colors shadow-sm
```
## Usage checklist

```jsx

✅ label (string) required
✅ value (ReactNode) required
✅ variant matches semantic priority
✅ size="sm" for inline/table use
✅ pillIcon for trend indicators
✅ appearance="ghost" for subtle rows
✅ Works in flex/grid layouts
✅ Full theme token support
Perfect for priority indicators, task queues, bug trackers, and any left-label-right-metric display pattern!
```

