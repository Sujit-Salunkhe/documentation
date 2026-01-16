---
title: "Switch"
sidebar_position: 65
---

## Basic usage

```jsx title=Codeblocks
export function SwitchExamples() {
  const [enabled, setEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Default switch */}
      <div className="flex items-center gap-3">
        <Switch 
          checked={enabled} 
          onCheckedChange={setEnabled}
          id="notifications"
        />
        <label htmlFor="notifications" className="text-sm font-medium">
          Enable notifications
        </label>
      </div>

      {/* Theme switch with icons */}
      <div className="flex items-center gap-3">
        <Switch 
          variant="theme"
          checked={darkMode}
          onCheckedChange={setDarkMode}
          id="theme"
        />
        <label htmlFor="theme" className="text-sm font-medium">
          Dark mode
        </label>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs">Small</div>
        <div className="flex items-center gap-3">
          <Switch size="sm" checked={true} />
          <span className="text-xs">sm (h-5 w-9)</span>
        </div>
        <div className="flex items-center gap-3">
          <Switch size="lg" checked={false} />
          <span className="text-xs">lg (h-7 w-14)</span>
        </div>
      </div>
    </div>
  );
}
```
## Props
```js
export type SwitchProps =
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>

// Standard Radix props:
checked?: boolean;
defaultChecked?: boolean;
onCheckedChange?: (checked: boolean) => void;
disabled?: boolean;
required?: boolean;
id: string;
name?: string;
```
## Variant props

### Variants

```jsx
"default" – Standard switch (default)
"theme" – Sun/Moon/Star theme icons

<Switch variant="default" />
<Switch variant="theme" /> {/* Animated sun→moon transition */}
```
### Sizes

```jsx
"sm" – h-5 w-9, thumb h-4 w-4
"md" – h-6 w-11, thumb h-5 w-5 (default)
"lg" – h-7 w-14, thumb h-6 w-6

Thumb slide distances:
sm: 16px | md: 20px | lg: 28px
```
### Layout
```jsx
fullWidth?: boolean; // w-full
```
### Theme animations
##Sun → Moon transition
```jsx
<Switch variant="theme" checked={darkMode} onCheckedChange={setDarkMode}>
  {/* Off (sun): amber sun icon */}
  {/* On (moon): white moon + star */}
</Switch>
```

### Animation details:
```jsx
Sun: rotate(-180→0), scale(0.4→1), opacity fade
Moon: scale(0.4→1), opacity fade  
Star: opacity fade (decorative)
Thumb: spring x-slide + scale bounce
```
## Real-world examples

### Settings panel

```jsx
export function SettingsSwitches() {
  return (
    <Paper padding="lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <RadioLabel>Push Notifications</RadioLabel>
            <RadioDescription>Receive notifications on mobile</RadioDescription>
          </div>
          <Switch id="push" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <RadioLabel>Dark Mode</RadioLabel>
            <RadioDescription>Switch to dark theme</RadioDescription>
          </div>
          <Switch id="dark" variant="theme" defaultChecked />
        </div>
      </div>
    </Paper>
  );
}
```
## Integration patterns

### Form controls

```jsx
<div className="space-y-4">
  <div className="flex items-center gap-3">
    <Switch id="terms" size="lg" />
    <label htmlFor="terms" className="text-sm font-medium">
      Accept terms & conditions
    </label>
  </div>
  
  <div className="flex items-center gap-3">
    <Switch id="newsletter" />
    <label htmlFor="newsletter" className="text-sm">
      Subscribe to newsletter
    </label>
  </div>
</div>
```
## Animation system
```jsx
Thumb motion:
x: 0 → [16|20|28]px (size-based)
scaleX: [1, 1.25, 1] bounce (on toggle)
scaleY: [1, 0.9, 1] squash (on toggle)

Theme icons (variant="theme"):
Sun: rotate(-180°→0°), scale(0.4→1)
Moon: scale(0.4→1), position left
Star: opacity fade (decorative)
```
Spring physics:
```jsx
transition={{ type: 'spring', stiffness: 500, damping: 30 }}
```

## Styling details

### Switch track
```jsx
default: bg-[color-mix(in_srgb,var(--atom-border)_40%,transparent)]
checked: bg-[var(--atom-primary)]
theme: slightly lighter border mix (35%)
focus: ring-[var(--atom-ring-color)]
```
### Thumb

```
bg-[var(--atom-bg)] shadow-md rounded-full
Precise size + translateX per size variant
```
## Accessibility features
```jsx
✅ Full Radix ARIA compliance
✅ Proper keyboard handling (Space/Enter)
✅ Focus ring management
✅ Disabled states
✅ Screen reader announcements
✅ ROAM pattern (Role, Owner, Accessible name, Math)
```
## Usage checklist
```jsx
✅ Always pair with matching `id` + `htmlFor` label
✅ Use `variant="theme"` for light/dark toggles
✅ `size="sm"` for tables/inline use
✅ Works perfectly with form layouts
✅ Full theme token integration
✅ Smooth spring animations built-in
```
Production-ready switch with theme-aware animations, perfect sizing scale, and seamless form integration!