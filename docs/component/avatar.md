---
title: "Avatar"
sidebar_position: 7
---

## Basic usage

```jsx title=Codeblocks
export function AvatarExamples() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Avatar initials="JD" variant="primary" />

      <Avatar
        src="https://example.com/avatar.jpg"
        alt="John Doe"
        initials="JD"
      />

      <Avatar initials="AB" variant="success" size="lg" />

      <Avatar initials="CD" shape="square" appearance="solid" />
    </div>
  );
}
```

## Props

```jsx title=Codeblocks
  Avatar props:
    export interface AvatarProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
    /** Render via Radix Slot (e.g. wrap an <img> or <Link>) */
    asChild?: boolean;
    /** Initials or fallback text when no image is provided */
    initials?: string;
    /** Optional image source; automatically falls back to initials on error */
    src?: string;
    /** Alt text for the image; required for accessibility when src is provided */
    alt?: string;
    /** Whether the avatar is purely decorative (hides from screen readers) */
    decorative?: boolean;
  }
```

## Variant props

### Variant

```jsx title=Codeblocks
  Visual theme and semantic color:
    "primary" – primary brand color (default)
    "neutral" – gray/neutral tone
    "success" – green/success state
    "warning" – yellow/warning state
    "danger" – red/error state
    "info" – blue/informational
    "accent" – accent brand color

  Example:
    <Avatar initials="JD" variant="primary" />
    <Avatar initials="AB" variant="success" />
    <Avatar initials="CD" variant="danger" />
```

### Apperance

```jsx title=Codeblocks
  Fill intensity level:
    "soft" – light background with border (default)
    "subtle" – very light background
    "solid" – full color background
    "outline" – transparent with border
    "ghost" – minimal styling, no border

  Example:
    <Avatar initials="JD" appearance="soft" />
    <Avatar initials="AB" appearance="solid" variant="success" />
    <Avatar initials="CD" appearance="outline" />
    <Avatar initials="EF" appearance="ghost" />
```

### Size

```jsx title=Codeblocks
  Controls avatar dimensions:
    "sm" – compact: 32px (h-8 w-8)
    "md" – default: 40px (h-10 w-10)
    "lg" – large: 48px (h-12 w-12)

  Example:
    <Avatar initials="SM" size="sm" />
    <Avatar initials="MD" size="md" />
    <Avatar initials="LG" size="lg" />
```

### Shape

```jsx title=Codeblocks
  Controls avatar dimensions:
    "sm" – compact: 32px (h-8 w-8)
    "md" – default: 40px (h-10 w-10)
    "lg" – large: 48px (h-12 w-12)

  Example:
    <Avatar initials="SM" size="sm" />
    <Avatar initials="MD" size="md" />
    <Avatar initials="LG" size="lg" />
```

### Additional props

```jsx title=Codeblocks
  withRing:
  Add focus ring to highlight active/selected state:
    <Avatar initials="JD" withRing variant="primary" />
    <Avatar initials="AB" withRing variant="success" />
```

## Behavioral props

### initials

```jsx title=Codeblocks
  Fallback text displayed when no image is provided or image fails:
    <Avatar initials="JD" />
    <Avatar initials="AB" variant="success" />
    <Avatar initials="CD" size="lg" />

  Text is automatically:
    Uppercased
    Centered in the avatar
    Sized appropriately for the avatar size
```

### src

```jsx title=Codeblocks
  Image source URL with automatic fallback to initials on error:
    <Avatar
      src="https://example.com/avatar.jpg"
      alt="John Doe"
      initials="JD"
    />

  When image fails to load:
    Automatically falls back to initials
    No manual error handling needed
    Error state resets when src changes
```

### alt

```jsx title=Codeblocks
  Alt text for the image (required for accessibility):
    <Avatar
      src="/avatar.jpg"
      alt="John Doe"
      initials="JD"
    />

  Best practices:
    Always provide alt text when using images
    Use descriptive text for user identification
    Omit when decorative prop is true
```

### decorative

```jsx title=Codeblocks
  Set to true if avatar is purely decorative:
    <Avatar
      src="/decoration.jpg"
      initials="XX"
      decorative
    />

  When decorative is true:
    Avatar is hidden from screen readers (aria-hidden)
    Alt text is not announced
    Use for design elements that don't convey information

```

### asChild

```jsx title=Codeblocks
  Render as a Radix Slot to compose with other elements:
    <Avatar asChild initials="JD">
      <Link href="/profile/john-doe">
        <img src="/avatar.jpg" alt="John Doe" />
      </Link>
    </Avatar>

    <Avatar asChild initials="AB">
      <button onClick={handleClick}>
        <img src="/avatar.jpg" alt="Alice Brown" />
      </button>
    </Avatar>

  Useful for:
    Wrapping links for navigation
    Creating clickable avatars
    Custom interactive elements
```

## Usage examples

### User profile avatars

```jsx title=Codeblocks
import { Avatar } from "@workokay/atom";

export function UserProfile() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Avatar
        src="https://api.example.com/user/avatar.jpg"
        alt="Sarah Johnson"
        initials="SJ"
        variant="primary"
        size="lg"
      />
      <div>
        <h3>Sarah Johnson</h3>
        <p>Product Designer</p>
      </div>
    </div>
  );
}
```

### Interactive avatar with link

```jsx title=Codeblocks
import { Avatar } from "@workokay/atom";
import Link from "next/link";

export function InteractiveAvatar() {
  return (
    <Avatar asChild initials="JD">
      <Link href="/profile/john-doe" style={{ cursor: "pointer" }}>
        <img src="/avatar.jpg" alt="John Doe - View profile" />
      </Link>
    </Avatar>
  );
}
```

## Theming behavior

## Accessibility

```jsx title=Codeblocks
  The Avatar follows ARIA best practices:
    role="img" for initials-only avatars
    aria-label for screen reader description
    aria-hidden when decorative prop is true
    Proper alt text for images
    Keyboard focus support

  Example with full accessibility:
    <Avatar
      src="/avatar.jpg"
      alt="John Doe, Senior Developer"
      initials="JD"
      variant="primary"
      tabIndex={0}
      onClick={handleProfileClick}
    />

  Decorative usage (hidden from screen readers):
    <Avatar
      src="/decoration.jpg"
      initials="XX"
      decorative
    />

  Fallback initials with custom label:
    <Avatar
      initials="JD"
      alt="John Doe - Team Lead"
      variant="success"
    />

```
