---
title: "Heading"
sidebar_position: 30
---

## Basic usage

```jsx title=Codeblocks
export function HeadingExamples() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Semantic headings */}
      <Heading as="h1" size="xl">H1: Page Title (XL)</Heading>
      <Heading as="h2">H2: Section Title (LG default)</Heading>
      <Heading as="h3" size="md">H3: Card Title</Heading>
      
      {/* Custom overrides */}
      <Heading as="h4" size="lg" weight="bold">H4: Large Card Title</Heading>
      <Heading as="h6" size="xl">H6: Oversized small heading</Heading>
      
      {/* Different weights */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Heading size="lg" weight="normal">Normal weight</Heading>
        <Heading size="lg" weight="medium">Medium weight</Heading>
        <Heading size="lg" weight="bold">Bold weight</Heading>
      </div>
    </div>
  );
}
```

## Props

```js
export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    HeadingVariantProps {
  /** Semantic heading level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Render as child component (Radix Slot) */
  asChild?: boolean;
}
```
## Variant props

### Size system
```jsx
Token-based responsive typography:
"none" – inherit parent
"xs" – calc(var(--atom-text-xs))
"sm" – calc(var(--atom-text-sm))  
"md" – calc(var(--atom-text-md))
"lg" – calc(var(--atom-text-lg))
"xl" – calc(var(--atom-text-xl))

Smart defaults by semantic level:
h1 → xl, h2 → lg, h3 → md, h4 → sm, h5/h6 → xs
```
### Weight variants

```jsx
"normal" – var(--atom-font-weight-normal)
"medium" – var(--atom-font-weight-medium)  
"bold" – var(--atom-font-weight-bold)

<Heading size="lg" weight="normal">Normal</Heading>
<Heading size="lg" weight="medium">Medium</Heading>
<Heading size="lg" weight="bold">Bold</Heading>
```
## Smart defaults

### Semantic mapping

```jsx
// Just use `as` – size auto-selects perfectly:
<Heading as="h1">Perfect H1 size (xl)</Heading>
<Heading as="h2">Perfect H2 size (lg)</Heading>
<Heading as="h3">Perfect H3 size (md)</Heading>

// Override when needed:
<Heading as="h6" size="xl">Giant H6!</Heading>
<Heading as="h1" size="sm">Tiny H1</Heading>
```
## Behavioral props

### asChild

```jsx
// Perfect for router links / navigation
import { Link } from "react-router-dom";

<Heading asChild as="h2" size="lg">
  <Link to="/dashboard" className="no-underline hover:no-underline">
    Dashboard
  </Link>
</Heading>

// Button as heading (rare but possible)
<Heading asChild size="xl">
  <Button variant="ghost" asChild>
    <Link to="/docs">Documentation</Link>
  </Button>
</Heading>
```
## Real-world examples

### Page layout
```jsx
<Card className="max-w-4xl">
  <CardHeader>
    <Heading as="h1" size="xl" weight="bold">
      Welcome to Atom UI
    </Heading>
    <Heading as="h2" size="lg">
      Production-ready React components
    </Heading>
  </CardHeader>
  <CardBody>
    <Heading as="h3" size="md">Features</Heading>
    <ul>
      <li><Heading as="h4" size="sm">TypeScript first</Heading></li>
      <li><Heading as="h4" size="sm">Design tokens</Heading></li>
    </ul>
  </CardBody>
</Card>
```

### Card titles

```jsx
export function CardHeadings() {
  return (
    <>
      <Card className="w-80">
        <CardHeader>
          <Heading as="h3" size="lg" weight="bold">
            Sales Analytics
          </Heading>
          <Heading as="h4" size="sm" weight="medium">
            January 2026
          </Heading>
        </CardHeader>
      </Card>
      
      <Card className="w-80">
        <CardHeader>
          <Heading as="h3" size="md">
            Recent Activity
          </Heading>
        </CardHeader>
      </Card>
    </>
  );
}
```
## Integration patterns

### With ContentCard

```jsx
<ContentCard 
  variant="success"
  title={
    <Heading size="md" weight="bold">
      Deployment Successful
    </Heading>
  }
  footer="Jan 16, 2026 12:45 PM"
>
  All 47 tests passed
</ContentCard>
```
### With Card

```jsx
<Card className="w-[380px]">
  <CardHeader>
    <Heading as="h3" size="lg">User Profile</Heading>
  </CardHeader>
  <CardBody>
    <Heading as="h4" size="md">Jessica Parker</Heading>
    <Heading as="h5" size="sm" weight="medium">@jessica_p</Heading>
  </CardBody>
</Card>
```

## Accessibility features

```jsx
✅ Proper semantic HTML (h1-h6)
✅ Screen reader respects heading hierarchy
✅ data-slot="heading" for tooling
✅ Theme-aware text tokens
✅ Works with `asChild` for links/buttons
✅ Proper focus management via Slot
✅ Keyboard navigation friendly
```

## Theming 

```jsx
Token-driven typography system:

text-[var(--atom-text)] – primary text color
text-[calc(var(--atom-text-{size}))] – responsive sizes
font-[var(--atom-font-weight-{weight})] – theme weights

Perfect theme switching:
.light-theme { --atom-text-xl: 2.5rem; }
.dark-theme { --atom-text-xl: 2.25rem; }

All headings update instantly across your app.
```

## Size mapping reference

| Semantic | Default size | Use case      |
| -------- | ------------ | ------------- |
| h1       | xl           | Page titles   |
| h2       | lg           | Sections      |
| h3       | md           | Cards/groups  |
| h4       | sm           | Subsections   |
| h5/h6    | xs           | Labels/tables |

## Responsive override

```jsx
<Heading 
  as="h2" 
  size={{ base: "lg", md: "xl" }} // Requires responsive plugin
  weight="bold"
>
  Responsive heading
</Heading>
```
