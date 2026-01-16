---
title: "Checkbox"
sidebar_position: 25
---

## Basic usage

```jsx title=Codeblocks
export function CheckboxExamples() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Default */}
      <Checkbox 
        id="terms" 
        checked={termsAccepted}
        onChange={(e) => setTermsAccepted(e.target.checked)}
        label="Accept terms and conditions"
      />

      {/* Sizes */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Checkbox size="sm" label="Small checkbox" />
        <Checkbox size="md" label="Medium checkbox (default)" />
        <Checkbox size="lg" label="Large checkbox" />
      </div>

      {/* Disabled */}
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked" />
    </div>
  );
}
```

## Props
```js
export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** Optional label content */
  label?: React.ReactNode;
  /** Visual size */
  size?: CheckboxSize;
  /** Indeterminate state support */
  indeterminate?: boolean;
  /** Wrapper div className */
  wrapperClassName?: string;
  /** Label className */
  labelClassName?: string;
}
```

## Size variants

### Checkbox sizes
```jsx
"sm" – h-3.5 w-3.5 (14px, compact forms)
"md" – h-4 w-4 (16px, default) 
"lg" – h-5 w-5 (20px, large touch targets)

<Checkbox size="sm" label="Compact" />
<Checkbox size="md" label="Default" />
<Checkbox size="lg" label="Large touch target" />
```
## Behavioral props

### Indeterminate state

```jsx
const [indeterminate, setIndeterminate] = useState(true);

<Checkbox 
  indeterminate={indeterminate}
  onChange={(e) => {
    setIndeterminate(false);
    // Standard checked state
  }}
  label="Select all (indeterminate)"
/>

// Programmatic control
useEffect(() => {
  checkboxRef.current.indeterminate = someItemsSelected && !allItemsSelected;
}, [selectedItems]);
```

### Custom labels

```jsx
<Checkbox label="Plain text" />
<Checkbox label={<span><strong>Required</strong> field</span>} />
<Checkbox label={
  <div className="flex items-center gap-1">
    <Badge variant="info" tone="low">v1.2</Badge>
    Enable notifications
  </div>
} />
```

### Styling customization

```jsx
<Checkbox 
  wrapperClassName="flex items-start gap-3 py-2"
  labelClassName="text-base font-normal leading-relaxed"
  label="Custom styled wrapper + label"
/>
```

## Real-world examples
### Form row
```jsx
export function FormCheckboxes() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    updates: true,
    marketing: false,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
      <Checkbox
        size="lg"
        checked={preferences.newsletter}
        onChange={(e) => setPreferences(p => ({ ...p, newsletter: e.target.checked }))}
        label="Newsletter updates"
      />
      
      <Checkbox
        checked={preferences.updates}
        onChange={(e) => setPreferences(p => ({ ...p, updates: e.target.checked }))}
        label={
          <div className="space-y-1">
            <span>Product updates</span>
            <span className="text-xs text-[var(--atom-text-muted)]">New features and improvements</span>
          </div>
        }
      />
      
      <Checkbox
        size="sm"
        disabled
        label="Marketing emails (coming soon)"
      />
    </div>
  );
}
```

### Table selection
```jsx
export function TableSelection() {
  const [selectedRows, setSelectedRows] = useState([]);
  const allSelected = selectedRows.length === 5;
  const someSelected = selectedRows.length > 0 && !allSelected;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Checkbox
        size="lg"
        indeterminate={someSelected}
        checked={allSelected}
        onChange={(e) => {/* toggle all */}}
        aria-label="Select all rows"
      />
      
      <span className="text-sm">{selectedRows.length}/5 rows selected</span>
      
      <div style={{ marginLeft: "auto" }}>
        <Button 
          variant="primary" 
          size="sm" 
          disabled={selectedRows.length === 0}
        >
          Delete selected
        </Button>
      </div>
    </div>
  );
}
```

### Settings panel

```jsx
export function SettingsCheckboxes() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <Checkbox id="dark-mode" label="Dark mode" />
        <Checkbox id="notifications" label="Push notifications" />
      </div>
      
      <div>
        <h3 className="mb-3 font-medium text-[var(--atom-theme-text-primary)]">Permissions</h3>
        <Checkbox id="camera" size="md" label="Camera access" />
        <Checkbox id="location" size="md" label="Location services" />
      </div>
    </div>
  );
}
```

## Accessibility features
```jsx
✅ Native <input type="checkbox"> accessibility
✅ Proper label association (htmlFor/id)
✅ Indeterminate state support  
✅ Auto-generated IDs when none provided
✅ Focus rings with theme-aware colors
✅ Disabled states with proper semantics
✅ Screen reader friendly (data-slot="checkbox")
✅ Keyboard navigation support
```

## Theming behavior

```jsx
Advanced token system:

accent-[var(--atom-primary)] → Custom checkmark color
bg-[var(--atom-input-bg)] → Theme-aware input background
border-[var(--atom-card-border)] → Theme-aware border

Focus ring:
focus-visible:ring-[color-mix(in_srgb,var(--atom-primary)_35%,transparent)]

Hover border enhancement:
hover:border-[color-mix(in_srgb,var(--atom-card-border)_70%,var(--atom-text))]

Theme switching updates colors instantly across all states.
```
## Advanced patterns

### Compact inline

```jsx
<div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
  <Checkbox size="sm" label="WiFi" />
  <Checkbox size="sm" label="Bluetooth" />
  <Checkbox size="sm" label="Airplane mode" />
  <Checkbox size="sm" label="Do Not Disturb" />
</div>
```

### With helper text
```jsx
<div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
  <Checkbox 
    id="privacy" 
    label={
      <>
        Share analytics data
        <span className="ml-2 text-xs text-[var(--atom-text-muted)]">
          Helps improve Atom UI
        </span>
      </>
    }
  />
</div>
```

