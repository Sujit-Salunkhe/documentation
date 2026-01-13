---
title: "Text"
sidebar_position: 9
---

## Basic usage

```jsx title=Codeblocks
export function TextExamples() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text variant="primary" size="lg">Primary heading text</Text>
      
      <Text variant="secondary" size="md">Secondary text content</Text>
      
      <Text variant="success" size="sm" weight="bold">Success message</Text>
      
      <Text variant="error" size="xs">Error message</Text>
    </div>
  );
}
```
## Props

```jsx title=Codeblocks
  Text props:
    export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    /** Render via Radix Slot (e.g. wrap a heading or link) */
    asChild?: boolean;
    /** Font size using design system tokens */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    /** Font weight from design system */
    weight?: 'none' | 'normal' | 'medium' | 'bold';
    /** Visual variant for semantic colors */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'neutral' | 
              'success' | 'error' | 'info' | 'warning' | 'disabled';
  }
```

## Variant props

### Variant

```jsx title=Codeblocks
    Visual theme and semantic color:
    "primary" – primary brand color (default)
    "secondary" – secondary brand/informational color
    "tertiary" – tertiary accent color
    "neutral" – default text color
    "success" – green/success state
    "error" – red/error state
    "info" – blue/informational
    "warning" – yellow/warning state
    "disabled" – muted/archived color
    
  Example:
    <Text variant="primary">Primary heading</Text>
    <Text variant="success">Success message</Text>
    <Text variant="error">Error occurred</Text>
    <Text variant="warning">Warning notice</Text>
```

### Size 

```jsx title=Codeblocks
  Font size using design system tokens:
    "xs" – extra small: var(--atom-text-xs)
    "sm" – small: var(--atom-text-sm)
    "md" – medium (default): var(--atom-text-md)
    "lg" – large: var(--atom-text-lg)
    "xl" – extra large: var(--atom-text-xl)
    "none" – no size class (inherit or custom)
     
  Example:
    <Text size="xs">Extra small text</Text>
    <Text size="sm">Small text</Text>
    <Text size="md">Medium text</Text>
    <Text size="lg">Large text</Text>
    <Text size="xl">Extra large text</Text>
```

### Weight

```jsx title=Codeblocks
  Font weight using design system tokens:
    "none" – no weight class (inherit or custom)
    "normal" – regular weight: var(--atom-font-weight-normal)
    "medium" – medium weight: var(--atom-font-weight-medium)
    "bold" – bold weight: var(--atom-font-weight-bold)
     
  Example:
    <Text weight="normal">Normal weight text</Text>
    <Text weight="medium">Medium weight text</Text>
    <Text weight="bold">Bold weight text</Text>
```

## Behavioral props

### asChild

```jsx title=Codeblocks
  Render as a Radix Slot to compose with other elements:
    <Text asChild variant="primary" size="lg">
      <h1>Main heading</h1>
    </Text>

    <Text asChild variant="info" size="sm">
      <Link href="/about">Learn more</Link>
    </Text>

    <Text asChild variant="error">
      <p>Error message with custom element</p>
    </Text>

  Useful for:
    Applying text styles to semantic HTML elements
    Wrapping links while maintaining text styling
    Creating styled headings (h1, h2, h3, etc.)
    Custom interactive text elements
```

## Usage examples

### Page headings with sementics HTML   
```jsx title=Codeblocks
  import { Text } from "@workokay/atom";

  export function PageHeadings() {
    return (
      <div>
        <Text asChild variant="primary" size="xl" weight="bold">
          <h1>Welcome to Our Platform</h1>
        </Text>
        
        <Text asChild variant="secondary" size="lg" weight="medium">
          <h2>Getting Started Guide</h2>
        </Text>
        
        <Text asChild variant="neutral" size="md">
          <p>Follow these steps to set up your account.</p>
        </Text>
      </div>
    );
  }
```

### Status message 

```jsx title=Codeblocks
  import { Text } from "@workokay/atom";

  export function StatusMessages() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Text variant="success" size="sm" weight="medium">
          ✓ Profile updated successfully
        </Text>
        
        <Text variant="error" size="sm" weight="medium">
          ✕ Failed to save changes
        </Text>
        
        <Text variant="warning" size="sm" weight="medium">
          ⚠ Your session will expire in 5 minutes
        </Text>
        
        <Text variant="info" size="sm">
          ℹ New features are available
        </Text>
      </div>
    );
  }
```

### Typography scale showcase

```jsx title=Codeblocks
  import { Text } from "@workokay/atom";

  export function TypographyScale() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Text size="xl" weight="bold">Extra Large Heading (XL)</Text>
        <Text size="lg" weight="bold">Large Heading (LG)</Text>
        <Text size="md" weight="medium">Medium Text (MD)</Text>
        <Text size="sm">Small Text (SM)</Text>
        <Text size="xs">Extra Small Text (XS)</Text>
      </div>
    );
  }
```

### Card with mixed text styles

```jsx title=Codeblocks
  import { Text } from "@workokay/atom";

  export function InfoCard() {
    return (
      <div style={{ 
        padding: "1.5rem", 
        border: "1px solid #e5e7eb", 
        borderRadius: "0.5rem" 
      }}>
        <Text variant="primary" size="lg" weight="bold">
          Product Title
        </Text>
        
        <Text variant="secondary" size="sm" style={{ marginTop: "0.5rem" }}>
          Category: Electronics
        </Text>
        
        <Text variant="neutral" size="md" style={{ marginTop: "1rem" }}>
          This is a detailed description of the product with all the 
          important information you need to know.
        </Text>
        
        <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
          <Text variant="success" size="md" weight="bold">
            $99.99
          </Text>
          <Text variant="disabled" size="sm" style={{ textDecoration: "line-through" }}>
            $149.99
          </Text>
        </div>
      </div>
    );
  }
```

### Form lables and help text 

```jsx title=Codeblocks
  import { Text } from "@workokay/atom";

  export function FormWithLabels() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <Text asChild variant="neutral" size="sm" weight="medium">
            <label htmlFor="email">Email Address</label>
          </Text>
          <input 
            id="email"
            type="email" 
            style={{ 
              width: "100%", 
              marginTop: "0.25rem",
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem"
            }}
          />
          <Text variant="secondary" size="xs" style={{ marginTop: "0.25rem" }}>
            We'll never share your email with anyone else.
          </Text>
        </div>
        
        <div>
          <Text asChild variant="neutral" size="sm" weight="medium">
            <label htmlFor="password">Password</label>
          </Text>
          <input 
            id="password"
            type="password"
            style={{ 
              width: "100%", 
              marginTop: "0.25rem",
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem"
            }}
          />
          <Text variant="error" size="xs" style={{ marginTop: "0.25rem" }}>
            Password must be at least 8 characters
          </Text>
        </div>
      </div>
    );
  }
```

## Theming behavior
```jsx title=codeblocks
  The Text component uses CSS tokens for theming:
    Text color variants:
      --atom-primary
      --atom-info-card-jobstatus-secondary-text
      --atom-info-card-jobstatus-success-text
      --atom-text
      --atom-success
      --atom-error
      --atom-info
      --atom-warning
      --atom-badge-archived-text
    
    Font sizes:
      --atom-text-xs
      --atom-text-sm
      --atom-text-md
      --atom-text-lg
      --atom-text-xl
    
    Font weights:
      --atom-font-weight-normal
      --atom-font-weight-medium
      --atom-font-weight-bold

  These tokens are set by the active theme:
    .atom-theme[data-theme="light"] {
      --atom-primary: #3b82f6;
      --atom-text: #1f2937;
      --atom-success: #16a34a;
      --atom-error: #dc2626;
      --atom-text-md: 1rem;
      --atom-font-weight-medium: 500;
      /* ... */
    }

  Changing data-theme will automatically update all Text instances.
```

## Accessibility

```jsx title=codeblocks
  The Text component follows accessibility best practices:
    Uses semantic HTML via asChild prop
    Maintains proper text contrast ratios
    Supports screen reader content
    Respects font size preferences

  Example with semantic HTML:
    <Text asChild variant="primary" size="xl" weight="bold">
      <h1>Main Page Heading</h1>
    </Text>

  Proper heading hierarchy:
    <Text asChild size="xl" weight="bold">
      <h1>Level 1 Heading</h1>
    </Text>
    
    <Text asChild size="lg" weight="bold">
      <h2>Level 2 Heading</h2>
    </Text>
    
    <Text asChild size="md" weight="medium">
      <h3>Level 3 Heading</h3>
    </Text>

  Color contrast considerations:
    Success variant provides sufficient contrast
    Error variant provides sufficient contrast
    Warning variant may need weight adjustment
    Disabled variant intentionally has lower contrast

  Screen reader friendly:
    <Text variant="error" size="sm" role="alert">
      Form validation error
    </Text>

  Best practices:
    - Use asChild with semantic HTML elements
    - Maintain proper heading hierarchy
    - Ensure color is not the only indicator
    - Test contrast ratios meet WCAG standards
    - Provide text alternatives for icon-only content
```