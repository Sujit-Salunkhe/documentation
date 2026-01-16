---
title: "Input"
sidebar_position: 35
---

## Basic usage

```jsx title=Codeblocks
export function InputExamples() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "400px" }}>
      {/* Basic input */}
      <Input
        label="Email address"
        required
        placeholder="user@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      {/* With icons */}
      <Input
        label="Phone number"
        leftIcon={<FiPhone />}
        placeholder="+1 (555) 123-4567"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      {/* Error state */}
      <Input
        label="Password"
        required
        errorText="Password must be at least 8 characters"
        value={formData.password}
        type="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      {/* Success + loading */}
      <Input
        label="Confirmation code"
        tone="success"
        loading
        placeholder="Enter 6-digit code"
      />
    </div>
  );
}
```
## Props

```js
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Leading icon */
  leftIcon?: React.ReactNode;
  /** Trailing icon or loading spinner */
  rightIcon?: React.ReactNode;
  /** Helper text (shows when no error) */
  hint?: string;
  /** Error message (takes priority over hint) */
  errorText?: string;
  /** Show loading spinner in right slot */
  loading?: boolean;
  /** Form label */
  label?: string;
  /** Required field indicator */
  required?: boolean;
  /** Custom required error message */
  requiredText?: string;
}
```

## Variant props
### Sizes

```jsx
"sm" – h-9 px-3 text-sm (compact)
"md" – h-10 px-3.5 text-sm (default)
"lg" – h-11 px-4 text-base (spacious)

<Input size="sm" label="Compact input" />
<Input size="md" label="Default input" />
<Input size="lg" label="Large input" />
```

### Tone states
```jsx
"default" – standard theme border (default)
"invalid" – error border color
"success" – success border color

<Input tone="success" label="Valid input" />
<Input tone="invalid" label="Invalid input" />
```
## Behavioral features

### Form validation states
```jsx

const [errors, setErrors] = useState({});

function validateEmail(email) {
  return email.includes('@') ? null : 'Please enter a valid email';
}

// Auto-validation with errorText
<Input
  label="Email"
  required
  errorText={validateEmail(formData.email)}
  placeholder="user@example.com"
/>

// Required field validation (auto-triggered on blur)
<Input
  label="Phone"
  required
  requiredText="Phone number is required"
  value={formData.phone}
/>
```
### Icon slots

```jsx
import { FiSearch, FiMail, FiLock } from "react-icons/fi";

<Input
  leftIcon={<FiSearch />}
  placeholder="Search..."
/>

<Input
  leftIcon={<FiMail />}
  rightIcon={<FiLock />}
  type="password"
  placeholder="Password"
/>
```
### Loading state

```jsx
<Input
  label="Processing..."
  loading
  placeholder="Enter verification code"
  disabled
/>
```
## Real-world examples
## Complete form
```jsx
export function CompleteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (validateForm()) {
        setSubmitting(true);
        // Submit logic
      }
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Input
          label="Full name"
          required
          errorText={errors.name}
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <Input
          label="Email"
          type="email"
          required
          leftIcon={<FiMail />}
          errorText={errors.email}
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          label="Phone"
          leftIcon={<FiPhone />}
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <Button 
          type="submit" 
          variant="primary" 
          loading={submitting}
          disabled={submitting}
        >
          Create Account
        </Button>
      </div>
    </form>
  );
}
```
## Search + filters
```jsx
export function SearchInputs() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Input
        size="lg"
        leftIcon={<FiSearch />}
        placeholder="Search users..."
        className="flex-1 min-w-[300px]"
      />
      
      <Input
        size="md"
        leftIcon={<FiCalendar />}
        placeholder="Filter by date"
      />
      
      <Input
        size="sm"
        leftIcon={<FiFilter />}
        placeholder="Status"
      />
    </div>
  );
}
```

## Accessibility features

```jsx
✅ Proper label association (htmlFor/id)
✅ ARIA attributes: aria-invalid, aria-errormessage, aria-describedby
✅ Auto-generated IDs for all states
✅ Required field indicator (* + aria-required)
✅ Touch-friendly focus rings
✅ Screen reader announces errors/hints
✅ Semantic error/hint regions
✅ Keyboard navigation optimized
✅ Loading spinner (non-interactive right slot)
```
## Theming behavior

```jsx
Advanced input token system:

Core tokens:
--atom-input-bg, --atom-input-fg, --atom-input-border
--atom-input-focus, --atom-primary (caret/focus)

Smart interactions:
hover:bg-[color-mix(in_srgb,var(--atom-primary)_1%,transparent)]
focus-visible:border-[var(--atom-input-focus,var(--atom-primary))]
selection:bg-[color-mix(in_srgb,var(--atom-primary)_30%,transparent)]

Placeholder: 55% foreground opacity
Disabled: 60% opacity + no hover
Read-only: mixed background overlay
```
## Advanced patterns

### Inline validation

```jsx
function ValidatedInput({ label, value, error, ...props }) {
  return (
    <Input
      label={label}
      errorText={error}
      tone={error ? 'invalid' : value ? 'success' : 'default'}
      {...props}
    />
  );
}

// Usage
<ValidatedInput
  label="Email"
  value={email}
  error={errors.email}
  placeholder="user@example.com"
/>
```
### Compact stacked

```jsx
<div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
  <Input size="sm" label="First name" />
  <Input size="sm" label="Last name" />
  <Input size="sm" label="Email" type="email" />
</div>
```
## Integration examples
### With ContentCard
```jsx
jsx
<ContentCard title="Quick Search" size="sm">
  <Input
    size="sm"
    leftIcon={<FiSearch />}
    placeholder="Search entire codebase..."
    className="w-full"
  />
</ContentCard>
```
### With Card form

```jsx

<Card className="w-[450px]">
  <CardHeader>
    <Heading as="h3">User Profile</Heading>
  </CardHeader>
  <CardBody className="space-y-4">
    <Input label="Display name" />
    <Input label="Email" type="email" />
    <Input label="Bio" hint="Tell us about yourself (optional)" />
  </CardBody>
</Card>
```
## State matrix

| State    | Border          | Background      | Ring         |
| -------- | --------------- | --------------- | ------------ |
| Default  | Theme border    | Input bg        | Primary 35%  |
| Hover    | Enhanced border | Primary 1% tint | -            |
| Focus    | Primary         | Input bg        | Primary ring |
| Success  | Success color   | Input bg        | -            |
| Invalid  | Error color     | Input bg        | Error border |
| Disabled | Input border    | Input bg 60%    | -            |