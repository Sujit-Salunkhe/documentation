---
title: "Radio"
sidebar_position: 55
---

## Basic usage

```jsx title=Codeblocks
export function RadioGroupExamples() {
  const [payment, setPayment] = useState("credit-card");
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "400px" }}>
      {/* Vertical layout (default) */}
      <div>
        <RadioLabel className="mb-3 block font-semibold">Payment Method</RadioLabel>
        <RadioGroup value={payment} onValueChange={setPayment} direction="vertical">
          <RadioOption>
            <Radio value="credit-card" id="credit-card" />
            <label htmlFor="credit-card">Credit Card</label>
          </RadioOption>
          <RadioOption>
            <Radio value="paypal" id="paypal" />
            <label htmlFor="paypal">PayPal</label>
          </RadioOption>
          <RadioOption>
            <Radio value="bank" id="bank" />
            <label htmlFor="bank">Bank Transfer</label>
          </RadioOption>
        </RadioGroup>
        <RadioDescription>Selected: {payment}</RadioDescription>
      </div>

      {/* Horizontal layout */}
      <div>
        <RadioLabel className="mb-3 block font-semibold">Theme</RadioLabel>
        <RadioGroup value={theme} onValueChange={setTheme} direction="horizontal">
          <RadioOption>
            <Radio value="light" id="light" />
            <label htmlFor="light">Light</label>
          </RadioOption>
          <RadioOption>
            <Radio value="dark" id="dark" />
            <label htmlFor="dark">Dark</label>
          </RadioOption>
          <RadioOption>
            <Radio value="system" id="system" />
            <label htmlFor="system">System</label>
          </RadioOption>
        </RadioGroup>
      </div>
    </div>
  );
}
```
## Props

### RadioGroup

```js
export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
}
// Standard Radix props:
value?: string;
defaultValue?: string;
onValueChange?: (value: string) => void;
name?: string;
disabled?: boolean;
required?: boolean;
RadioGroup direction
jsx
"vertical" – flex-col (default)
"horizontal" – flex-row flex-wrap

<RadioGroup direction="vertical">Vertical stack</RadioGroup>
<RadioGroup direction="horizontal">Horizontal row</RadioGroup>
```
## Components
```jsx
RadioGroup          // Container (Radix.Root)
├── RadioOption     // Flex wrapper (flex gap-2)
│   ├── Radio       // Radio button (Radix.Item)
│   └── label       // Native label
├── RadioLabel      // Styled label helper
└── RadioDescription // Muted description
```

## Real-world examples

### Form fields
```jsx
export function PaymentForm() {
  const [method, setMethod] = useState("card");

  return (
    <Paper padding="lg">
      <RadioLabel className="mb-4 block text-base font-semibold">
        Payment Method
      </RadioLabel>
      <RadioGroup value={method} onValueChange={setMethod} className="space-y-2">
        <RadioOption>
          <Radio value="card" id="card" />
          <div>
            <label htmlFor="card" className="font-medium">Credit/Debit Card</label>
            <RadioDescription>Most popular & secure</RadioDescription>
          </div>
        </RadioOption>
        <RadioOption>
          <Radio value="paypal" id="paypal" />
          <div>
            <label htmlFor="paypal" className="font-medium">PayPal</label>
            <RadioDescription>Fast checkout</RadioDescription>
          </div>
        </RadioOption>
        <RadioOption>
          <Radio value="bank" id="bank" />
          <div>
            <label htmlFor="bank" className="font-medium">Bank Transfer</label>
            <RadioDescription>2-3 business days</RadioDescription>
          </div>
        </RadioOption>
      </RadioGroup>
    </Paper>
  );
}
```
### Settings panels
```jsx
export function ThemeSelector() {
  const [theme, setTheme] = useState("system");

  return (
    <Paper variant="outlined" padding="md">
      <RadioLabel className="mb-3 block font-medium">Appearance</RadioLabel>
      <RadioGroup 
        value={theme} 
        onValueChange={setTheme} 
        direction="horizontal" 
        className="gap-4"
      >
        <RadioOption>
          <Radio value="light" id="light" />
          <label htmlFor="light">Light</label>
        </RadioOption>
        <RadioOption>
          <Radio value="dark" id="dark" />
          <label htmlFor="dark">Dark</label>
        </RadioOption>
        <RadioOption>
          <Radio value="system" id="system" />
          <label htmlFor="system">System</label>
        </RadioOption>
      </RadioGroup>
    </Paper>
  );
}
```
## Advanced patterns

### Rich content options

``` jsx
<RadioGroup value={size} onValueChange={setSize}>
  <RadioOption>
    <Radio value="sm" id="sm" />
    <div>
      <label htmlFor="sm" className="font-medium">Small</label>
      <RadioDescription className="text-xs">Compact layout</RadioDescription>
    </div>
  </RadioOption>
  <RadioOption>
    <Radio value="md" id="md" />
    <div>
      <label htmlFor="md" className="font-medium">Medium</label>
      <RadioDescription className="text-xs">Default layout</RadioDescription>
    </div>
  </RadioOption>
  <RadioOption>
    <Radio value="lg" id="lg" />
    <div>
      <label htmlFor="lg" className="font-medium">Large</label>
      <RadioDescription className="text-xs">Spacious layout</RadioDescription>
    </div>
  </RadioOption>
</RadioGroup>
```
## Styling details

### RadioGroup base
```jsx
Base: flex gap-2
vertical: flex-col
horizontal: flex-row flex-wrap
```
### Radio item
```jsx
aspect-square h-4 w-4 rounded-full
border-[var(--atom-theme-border-primary)]
bg-[var(--atom-theme-surface-primary)]
text-[var(--atom-primary)]
focus-visible:ring-2 ring-[var(--atom-ring-color)]
Circle indicator: h-2.5 w-2.5 fill-current
```
### Helpers
```jsx
RadioLabel: text-sm font-medium text-[var(--atom-card-fg)] cursor-pointer
RadioDescription: text-sm text-[var(--atom-text-muted)]
RadioOption: flex items-center gap-2
```

## Accessibility features
```jsx
✅ Full Radix ARIA compliance
✅ Proper label association (htmlFor)
✅ Keyboard navigation (arrow/space/tab)
✅ Focus ring management
✅ Disabled states
✅ Screen reader friendly
✅ ROAM pattern compliant
```
## Integration patterns

### With Paper/Card
```jsx
<Paper variant="outlined" padding="md">
  <RadioLabel className="mb-4 block font-semibold">Notification preferences</RadioLabel>
  <RadioGroup value={notify} onValueChange={setNotify}>
    <RadioOption className="py-3">
      <Radio value="all" id="all" />
      <label htmlFor="all" className="font-medium">All messages</label>
    </RadioOption>
    <RadioOption className="py-3">
      <Radio value="important" id="important" />
      <label htmlFor="important" className="font-medium">Important only</label>
    </RadioOption>
    <RadioOption className="py-3">
      <Radio value="none" id="none" />
      <label htmlFor="none" className="font-medium">None</label>
    </RadioOption>
  </RadioGroup>
</Paper>
```
## Usage checklist
```jsx
✅ Always use unique `id` + `htmlFor` pairs
✅ Wrap in RadioOption for proper spacing
✅ Use RadioGroup for Radix.Root context
✅ direction="horizontal" for inline layouts
✅ RadioLabel for group titles
✅ RadioDescription for help text
```