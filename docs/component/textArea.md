---
title: "TextArea"
sidebar_position: 70
---

## Basic usage

```jsx title=Codeblocks
export function TextAreaExamples() {
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "500px" }}>
      {/* Default textarea */}
      <div>
        <label className="mb-2 block text-sm font-medium">Description</label>
        <TextArea 
          placeholder="Enter a detailed description..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={4}
        />
      </div>

      {/* Invalid state */}
      <div>
        <label className="mb-2 block text-sm font-medium text-destructive">Feedback</label>
        <TextArea 
          placeholder="What went wrong?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          aria-invalid={feedback.length > 100}
          rows={3}
        />
      </div>

      {/* Sizes */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <TextArea size="sm" placeholder="Small textarea" />
          <TextArea size="lg" placeholder="Large textarea" />
        </div>
        <div>Filled state changes border color automatically</div>
      </div>
    </div>
  );
}
```
## Props

```js
export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  placeholder?: string;
}

// Standard textarea props:
value?: string;
onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
rows?: number;
disabled?: boolean;
readOnly?: boolean;
required?: boolean;
```
## Variant props

### Variants

```jsx
"default" – Standard background (default)
"outline" – bg-transparent
"subtle" – bg-input-background/60

<TextArea variant="outline" />
<TextArea variant="subtle" />
```
### Sizes
```jsx
"sm" – min-h-10 text-xs w-64
"md" – min-h-16 text-sm w-80 (default)
"lg" – min-h-24 text-base w-96

<TextArea size="sm" rows={2} />
<TextArea size="lg" rows={6} />
```
## Behavioral features

### Resizable

```jsx
// ✅ Allows user resize (unlike resize-none)
<TextArea rows={4} placeholder="Resizable by user" />

// Custom resize direction
<TextArea 
  rows={6}
  style={{ resize: 'vertical' }}
  placeholder="Only vertical resize"
/>
```
### Filled state

```jsx
// Auto-detects content via :not(:placeholder-shown)
<TextArea placeholder="Type here..." />
/* Empty: border-[var(--atom-theme-border-primary)]
   Filled: border-[color-mix(...70%,var(--atom-primary))]
   Focus: border-[var(--atom-primary)] */
```
### Invalid state

```jsx
<TextArea 
  aria-invalid={true}
  placeholder="This will show red border + ring"
/* aria-invalid:border-destructive
   aria-invalid:ring-destructive/20 */
```
## Real-world examples

### Form fields

```jsx
export function ContactForm() {
  return (
    <Paper padding="lg">
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Message</label>
          <TextArea 
            rows={4}
            placeholder="Tell us more about your project..."
            required
          />
        </div>
        
        <div>
          <label className="mb-2 block text-sm font-medium">Additional Notes</label>
          <TextArea 
            variant="outline"
            rows={6}
            placeholder="Optional details..."
          />
        </div>
      </div>
    </Paper>
  );
}
```

## Advanced patterns

### Auto-growing textarea

```jsx
function AutoGrowTextArea({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <TextArea
      ref={ref}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={1}
      placeholder="Start typing..."
    />
  );
}
```
## Styling details

### Core interactions

```
✅ resizable (user can drag corners)
✅ hover: bg + border tint
✅ focus: ring + border (your tokens)
✅ filled: darker primary border blend
✅ invalid: destructive border + ring

Base: min-h-16 px-3 py-2 text-sm w-80
dark:bg-input/30
```
### State progression

```
Empty → Filled → Focus → Invalid
border-primary → primary-blend → primary → destructive
```
## Usage checklist

```jsx
✅ Works with standard textarea props
✅ resizable by default (user-friendly)
✅ Auto-filled state styling
✅ Proper aria-invalid support
✅ Theme token integration
✅ Hover/focus/invalid states
✅ Pairs perfectly with labels
✅ Works in forms/Paper layouts
```