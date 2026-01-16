---
title: "Card"
sidebar_position: 10
---

## Basic usage

```jsx title=Codeblocks
export function CardExamples() {
  return (
    <>
      {/* Elevated Card */}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardHeader>
        <CardBody>
          <p>Card body content goes here. Supports any content.</p>
        </CardBody>
        <CardFooter className="justify-between">
          <Badge variant="neutral" tone="medium">Draft</Badge>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Edit</Button>
            <Button variant="primary" size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>

      <div style={{ height: "1rem" }} />

      {/* Card with Media */}
      <Card className="w-[350px]" hoverable>
        <CardMedia 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" 
          alt="Avatar"
          size="lg"
        />
        <CardHeader divider>
          <CardTitle>Profile Card</CardTitle>
        </CardHeader>
        <CardBody>Rich profile content with media support.</CardBody>
      </Card>
    </>
  );
}
```

## Props

### Card (root)
```js
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** Elevation style */
  variant?: "elevated" | "outlined" | "flat";
  /** Enable hover animations */
  hoverable?: boolean;
  /** Enable focus ring for keyboard navigation */
  clickable?: boolean;
}
```
## CardHeader

```js
export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardHeaderVariants> {
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  /** Add bottom divider */
  divider?: boolean;
  /** Text alignment */
  align?: "left" | "center" | "right";
}
```

## CardTitle And CardSubtitle

```js title=Codeblocks 
CardTitle: React.HTMLAttributes<HTMLHeadingElement>
CardSubtitle: React.HTMLAttributes<HTMLParagraphElement>
```

## CardBody
```js
export interface CardBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardBodyVariants> {
  /** Remove default padding */
  noPadding?: boolean;
}
```
## CardFooter
```js
export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {
  /** Add top divider */
  divider?: boolean;
  /** Alignment */
  align?: "left" | "center" | "right" | "between";
}
```
## CardMedia
```js
export interface CardMediaProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "height">,
    VariantProps<typeof cardMediaVariants> {
  src: string;
  alt: string;
  /** Height preset */
  size?: "sm" | "md" | "lg" | "xl" | "auto";
  /** CSS object-fit */
  objectFit?: "cover" | "contain" | "fill" | "none";
}
```
## Variant props

### Card variants

```js
"elevated" – shadow-md, hover:shadow-lg (default)
"outlined" – subtle shadow-sm  
"flat" – no shadow, transparent border

<Card variant="elevated" className="w-80">
  Default elevated
</Card>

<Card variant="outlined" className="w-80">
  Subtle outlined
</Card>

<Card variant="flat" className="w-80">
  Minimal flat
</Card>
```

### Hover & Click states
```jsx
<Card hoverable className="w-80" onClick={() => alert("Clicked!")}>
  Hover: shadow-xl + scale 1.02
</Card>

<Card clickable className="w-80" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && alert("Activated!")}>
  Keyboard focus ring + tabIndex=0
</Card>
```

## Layout components

### CardHeader patterns

```jsx
{/* Simple title */}
<CardHeader>
  <CardTitle>Simple</CardTitle>
</CardHeader>

{/* With avatar + action */}
<CardHeader avatar={<Avatar src="..." />} action={<Button size="sm">Follow</Button>}>
  <CardTitle>John Doe</CardTitle>
  <CardSubtitle>Software Engineer</CardSubtitle>
</CardHeader>

{/* Divider */}
<CardHeader divider align="center">
  <CardTitle>Section Title</CardTitle>
</CardHeader>
```
## CardFooter alignment

```jsx
<CardFooter align="left">
  <Button variant="ghost">Cancel</Button>
</CardFooter>

<CardFooter align="between">
  <div>Left content</div>
  <Button variant="primary">Right action</Button>
</CardFooter>

<CardFooter divider align="right">
  <Button variant="primary">Save Changes</Button>
</CardFooter>
```

## Media support

### CardMedia sizes
```jsx
<CardMedia 
  size="sm"   // h-32 (128px)
  src="..." 
  alt="Small" 
/>

<CardMedia 
  size="lg"   // h-64 (256px)  
  src="..."
  alt="Large"
/>

<CardMedia 
  size="auto" 
  src="..."
  alt="Natural height"
/>
```

## Real-world examples

### Profile Card
```jsx
<Card className="w-[380px]" hoverable>
  <CardHeader avatar={<Avatar size="lg" src="..." />}>
    <div>
      <CardTitle>Jessica Parker</CardTitle>
      <CardSubtitle>@jessica_p -  2h</CardSubtitle>
    </div>
    <Button variant="ghost" size="sm">Follow</Button>
  </CardHeader>
  <CardBody>
    <p>Full-stack developer building beautiful UIs with React & TypeScript.</p>
  </CardBody>
  <CardFooter divider className="gap-2">
    <Badge variant="primary" tone="low">Atom UI</Badge>
    <Badge variant="success" tone="low">Open Source</Badge>
    <div className="ml-auto flex gap-1">
      <Button variant="ghost" size="sm">View</Button>
      <Button variant="primary" size="sm">Contact</Button>
    </div>
  </CardFooter>
</Card>
```

## Stats Card
```jsx
<Card className="w-72">
  <CardHeader divider align="center">
    <CardTitle>Sales Overview</CardTitle>
  </CardHeader>
  <CardBody noPadding className="p-0">
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <span className="text-sm text-[var(--atom-text-muted)]">This month</span>
        <Badge variant="success" tone="high">+12%</Badge>
      </div>
      <div className="text-3xl font-bold text-[var(--atom-theme-text-primary)]">
        $24,392
      </div>
    </div>
  </CardBody>
</Card>
```

## Accessibility features

```jsx
✅ Proper heading hierarchy (h3 for CardTitle)
✅ Focus management for clickable cards (tabIndex=0)
✅ Theme-aware focus rings
✅ Semantic HTML structure
✅ Screen reader friendly spacing/tokens
✅ Works with keyboard navigation
✅ High contrast text tokens
```

## Theming behavior

```jsx
Token-driven design system integration:

Card: --atom-theme-surface-primary, --atom-theme-border-primary
Title: --atom-theme-text-primary  
Subtitle: --atom-text-muted
Focus: --atom-ring-color, --atom-ring-offset

color-mix(in_srgb,var(--atom-theme-border-primary)_60%,transparent)
→ Automatic theme-aware border opacity

Theme switching updates ALL cards instantly.
```