---
title: "NumberInput"
sidebar_position: 40
---

## Basic usage

```jsx title=Codeblocks
export function NumberInputExamples() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(29.99);
  const [version, setVersion] = useState("A1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "400px" }}>
      {/* Numeric with spinners */}
      <div>
        <label className="mb-2 block text-sm font-medium">Quantity</label>
        <NumberInput
          showSpinners
          size="md"
          min={0}
          max={99}
          step={1}
          value={quantity}
          onChange={setQuantity}
          placeholder="0"
        />
      </div>

      {/* Decimal pricing */}
      <div>
        <label className="mb-2 block text-sm font-medium">Price ($)</label>
        <NumberInput
          showSpinners
          size="lg"
          min={0}
          step={0.01}
          decimalPlaces={2}
          value={price}
          onChange={setPrice}
        />
      </div>

      {/* Alphanumeric versioning */}
      <div>
        <label className="mb-2 block text-sm font-medium">Version</label>
        <NumberInput
          variant="alphanumeric"
          showSpinners
          size="md"
          value={version}
          onChange={setVersion}
        />
      </div>
    </div>
  );
}
```

## Props

```jsx
export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size' | 'value'>,
    VariantProps<typeof numberInputVariants> {
  /** Current value (string | number) */
  value?: string | number;
  /** Callback with new string value */
  onChange?: (value: string) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Increment/decrement step */
  step?: number;
  /** Show up/down spinner buttons */
  showSpinners?: boolean;
  /** Decimal precision (numeric only) */
  decimalPlaces?: number;
}
```

## Variant props
### Input modes
```jsx
"numeric" – Numbers + decimals (default)
"alphanumeric" – A-Z + 0-9 (A1 → A2 → B1...)
"alpha" – Letters only (A → B → C... → Z → AA...)

<NumberInput value={42} onChange={setValue} />
<NumberInput variant="alphanumeric" value="A1" onChange={setValue} />
<NumberInput variant="alpha" value="Z" onChange={setValue} />
```
### Sizes

```jsx
"sm" – h-9 text-xs w-38 (compact)
"md" – h-10 text-sm w-40 (default) 
"lg" – h-12 text-base w-48 (spacious)

<NumberInput size="sm" showSpinners value={1} onChange={setValue} />
<NumberInput size="lg" showSpinners value={999} onChange={setValue} />
```
## Behavioral features

### Spinner controls

```jsx
// Click ▲▼ or ArrowUp/Down keys
<NumberInput
  showSpinners
  min={0}
  max={100}
  step={5}
  value={50}
  onChange={(value) => console.log('New value:', value)}
/>

// Keyboard shortcuts work everywhere:
<NumberInput value={25} onChange={setValue} /> {/* Arrow keys work */}
```

### Numeric precision
```jsx
// Auto-limits decimals + validates input
<NumberInput
  decimalPlaces={2}
  step={0.25}
  min={0}
  max={100}
  value={12.34}
  onChange={setValue}
/>

// Handles edge cases:
"" → "0" | "-5.678" → "-5.67" | "abc" → "" (numeric mode)
```

## Alpha incrementing
```jsx
// A → B → C → ... → Z → AA → AB...
<NumberInput variant="alpha" value="ZZ" onChange={setValue} />

// A1 → A2 → A3 → ... → A9 → B1 → B2...
<NumberInput variant="alphanumeric" value="A9" onChange={setValue} />
```
## Real-world examples

### E-commerce controls

```jsx
export function ShoppingInputs() {
  const [cartItems, setCartItems] = useState({ quantity: 1, price: 29.99 });

  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "end" }}>
      <div>
        <label className="text-sm font-medium block mb-2">Quantity</label>
        <NumberInput
          showSpinners
          size="md"
          min={1}
          max={99}
          value={cartItems.quantity}
          onChange={(val) => setCartItems({ ...cartItems, quantity: Number(val) })}
        />
      </div>
      
      <div>
        <label className="text-sm font-medium block mb-2">Unit Price</label>
        <NumberInput
          size="md"
          step={0.01}
          decimalPlaces={2}
          value={cartItems.price}
          onChange={(val) => setCartItems({ ...cartItems, price: Number(val) })}
        />
      </div>
      
      <div style={{ marginLeft: "auto", fontSize: "1.25rem", fontWeight: "bold" }}>
        ${(cartItems.quantity * cartItems.price).toFixed(2)}
      </div>
    </div>
  );
}
```

### Inventory versioning

```jsx
export function VersionInputs() {
  const [batch, setBatch] = useState("A12");
  const [priority, setPriority] = useState(5);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div style={{ flex: 1 }}>
        <label>Batch ID</label>
        <NumberInput
          variant="alphanumeric"
          showSpinners
          size="sm"
          value={batch}
          onChange={setBatch}
        />
      </div>
      
      <div style={{ flex: 1 }}>
        <label>Priority</label>
        <NumberInput
          showSpinners
          size="sm"
          min={1}
          max={10}
          value={priority}
          onChange={setPriority}
        />
      </div>
    </div>
  );
}
```


## Accessibility features
```jsx
✅ WAI-ARIA spinbutton role
✅ aria-valuemin/max with bounds
✅ Keyboard navigation (ArrowUp/Down)
✅ Screen reader spinner labels
✅ Proper focus management
✅ Invalid state announcements
✅ Disabled states handled correctly
✅ tabIndex=-1 on spinner buttons (input retains focus)
✅ Visual invalid states (border + ring)
```
## Keyboard shortcuts
```jsx
Universal across all modes:
-  ArrowUp → Increment
-  ArrowDown → Decrement  
-  Spinners also respond to click

Numeric mode input validation:
-  Only allows: -?[0-9]*.?[0-9]*
-  Auto-formats decimals on change
-  Respects min/max bounds
```
## Theming behavior

```jsx
Advanced number input tokens:

border-[var(--atom-theme-border-primary)]
focus-visible:ring-[color-mix(in_srgb,var(--atom-theme-border-primary)_35%,transparent)]
hover:bg-[color-mix(in_srgb,var(--atom-theme-border-primary)_6%,transparent)]

Invalid states:
aria-[invalid=true]:border-destructive
aria-[invalid=true]:ring-destructive/20

Native spinner suppression:
[&::-webkit-inner-spin-button]:appearance-none
```

## Advanced patterns
### Controlled decimal input
```jsx
function PriceInput({ value, onChange }) {
  return (
    <NumberInput
      variant="numeric"
      decimalPlaces={2}
      step={0.01}
      min={0}
      value={value}
      onChange={(val) => onChange(Number(val))}
      placeholder="0.00"
    />
  );
}
```
### Compact inline counters

```jsx
<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
  <span>Tickets:</span>
  <NumberInput
    showSpinners
    size="sm"
    min={1}
    max={10}
    step={1}
    value={2}
    onChange={setTickets}
    className="w-20"
  />
  <Button size="sm">Add to Cart</Button>
</div>
```
## Integration examples
### With Card
```jsx
<Card className="w-[400px]">
  <CardHeader>
    <Heading as="h3">Pricing Tier</Heading>
  </CardHeader>
  <CardBody className="space-y-4">
    <NumberInput
      label="Monthly Price"
      showSpinners
      decimalPlaces={2}
      size="lg"
      value={price}
      onChange={setPrice}
    />
  </CardBody>
</Card>
```
### Variant matrix

| Mode → Size ↓ | sm (compact) | md (default) | lg (spacious) |
| ------------- | ------------ | ------------ | ------------- |
| numeric       | Qty selector | Price input  | Inventory     |
| alphanumeric  | Batch ID     | Version      | SKU           |
| alpha         | Priority A-Z | Status       | Category      |