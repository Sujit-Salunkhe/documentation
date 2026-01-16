---
title: "Tabs"
sidebar_position: 10
---

## Basic usage

```jsx title=Codeblocks
export function TabsExamples() {
  return (
    <Tabs defaultValue="tab1" variant="default">
      <TabsList aria-label="Main navigation">
        <TabTrigger value="tab1">Overview</TabTrigger>
        <TabTrigger value="tab2">Details</TabTrigger>
        <TabTrigger value="tab3">Settings</TabTrigger>
      </TabsList>
      
      <TabContent value="tab1">
        <p>Overview content goes here</p>
      </TabContent>
      
      <TabContent value="tab2">
        <p>Details content goes here</p>
      </TabContent>
      
      <TabContent value="tab3">
        <p>Settings content goes here</p>
      </TabContent>
    </Tabs>
  );
}
```

## Props

### Tabs(Root)

```jsx title=Codeblocks
  Tabs props:
    export interface TabsProps 
    extends React.HTMLAttributes<HTMLDivElement> {
    /** The default active tab ID */
    defaultValue: string;
    /** Controlled active tab ID */
    value?: string;
    /** Callback when active tab changes */
    onValueChange?: (value: string) => void;
    /** Visual variant */
    variant?: 'default' | 'pills' | 'underline';
    /** Layout orientation */
    orientation?: 'horizontal' | 'vertical';
    children: React.ReactNode;
  }
```

### TabsList

```jsx title=Codeblocks
  TabsList props:
    export interface TabsListProps 
    extends React.HTMLAttributes<HTMLDivElement> {
    /** Label for screen readers (required) */
    'aria-label': string;
  }
```
### TabTrigger

```jsx title=Codeblocks
  TabTrigger props:
    export interface TabTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Unique identifier for this tab (required) */
    value: string;
    /** If true, tab is disabled */
    disabled?: boolean;
    /** Change the default rendered element */
    asChild?: boolean;
  }
```
### TabContent

```jsx title=Codeblocks
  TabContent props:
    export interface TabContentProps 
    extends React.HTMLAttributes<HTMLDivElement> {
    /** The tab value this content is associated with (required) */
    value: string;
  }

```
## Variant Props

### Variant

```jsx title=coeblocks
Visual styles for tabs:

"default" – bottom border indicator (classic tab look)
"pills" – rounded, filled active tab with background
"underline" – simple underline indicator only

Example:
<Tabs variant="default">
  <TabsList aria-label="Tabs">
    <TabTrigger value="react">React</TabTrigger>
    <TabTrigger value="vue">Vue</TabTrigger>
  </TabsList>
</Tabs>

<Tabs variant="pills">
  <TabsList aria-label="Pills">
    <TabTrigger value="react">React</TabTrigger>
    <TabTrigger value="vue">Vue</TabTrigger>
  </TabsList>
</Tabs>

<Tabs variant="underline">
  <TabsList aria-label="Underline">
    <TabTrigger value="react">React</TabTrigger>
    <TabTrigger value="vue">Vue</TabTrigger>
  </TabsList>
</Tabs>
```

### Orientation

```jsx title=codeblocks
"horizontal" – left-to-right tabs (default)
"vertical" – stacked tabs (sidebar style)

Horizontal:
<Tabs orientation="horizontal">
  <TabsList aria-label="Horizontal">
    <TabTrigger value="one">One</TabTrigger>
    <TabTrigger value="two">Two</TabTrigger>
  </TabsList>
</Tabs>

Vertical:
<Tabs orientation="vertical" className="w-48">
  <TabsList aria-label="Vertical">
    <TabTrigger value="one">One</TabTrigger>
    <TabTrigger value="two">Two</TabTrigger>
  </TabsList>
  <TabContent value="one" className="ml-4 mt-0">
    Vertical content
  </TabContent>
</Tabs>
```

## Behavioral props

### Controlled vs Uncontrolled

```jsx title=codeblocks
// Uncontrolled (defaultValue)
<Tabs defaultValue="tab1">
  <TabsList aria-label="Uncontrolled">
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
  </TabsList>
</Tabs>

// Controlled
function ControlledTabs() {
  const [value, setValue] = useState("tab1");
  
  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList aria-label="Controlled">
        <TabTrigger value="tab1">Tab 1</TabTrigger>
        <TabTrigger value="tab2">Tab 2</TabTrigger>
      </TabsList>
      <TabContent value="tab1">Content 1</TabContent>
    </Tabs>
  );
}
```

### Disabled tab

```jsx title=codeblocks
<Tabs defaultValue="tab1">
  <TabsList aria-label="Disabled example">
    <TabTrigger value="tab1">Active</TabTrigger>
    <TabTrigger value="tab2" disabled>
      Disabled
    </TabTrigger>
    <TabTrigger value="tab3">Active</TabTrigger>
  </TabsList>
</Tabs>

When disabled:
- Pointer events blocked
- Visual opacity reduced
- Excluded from keyboard navigation
```

### Keyboard  navigation

```jsx title=codeblocks
Full WAI-ARIA keyboard support built-in:

Horizontal tabs (ArrowLeft/ArrowRight):
- Left/Right arrows move between tabs
- Wraps around at edges
- Home/End jump to first/last

Vertical tabs (ArrowUp/ArrowDown):
- Up/Down arrows move between tabs
- Same wraparound behavior

Only navigates enabled tabs.
Active tab receives tabIndex="0", others get tabIndex="-1".
```

### asChild(TabTrigger)

```jsx title=codeblocks
<TabTrigger asChild value="link">
  <a href="#tab-content" className="no-underline">
    Link styled as tab
  </a>
</TabTrigger>

Renders child element with tab props & styles applied.
```

## Accessibility features

```jsx title=codeblocks
Complete ARIA tabs pattern:

✅ role="tablist" on TabsList
✅ role="tab" on TabTrigger  
✅ role="tabpanel" on TabContent
✅ aria-selected on active tabs
✅ aria-controls/aria-labelledby linking
✅ Proper tabIndex management
✅ aria-orientation support
✅ Screen reader labels via aria-label
✅ Full keyboard navigation (arrows, Home/End)
✅ Focus management
```

## Theming behavior

```jsx title=codeblocks
Tabs use design tokens for full theme support:

--atom-card-border (list border)
--atom-card-bg (pill background)
--atom-primary (active states)
--atom-text (hover text)

Active tab styles:
data-[state=active]:border-[var(--atom-primary)]
data-[state=active]:bg-[var(--atom-primary)]
data-[state=active]:text-[var(--atom-primary)]

Theme switching automatically updates all tab colors.
```

## Advance usage

### Pills + Vertical

```jsx title=codeblocks
<Tabs 
  variant="pills" 
  orientation="vertical" 
  className="w-64 border-r"
  defaultValue="dashboard"
>
  <TabsList aria-label="Navigation" className="flex-col p-1">
    <TabTrigger value="dashboard" className="justify-start">
      📊 Dashboard
    </TabTrigger>
    <TabTrigger value="analytics" className="justify-start">
      📈 Analytics
    </TabTrigger>
    <TabTrigger value="reports" className="justify-start">
      📋 Reports
    </TabTrigger>
  </TabsList>
  <TabContent value="dashboard" className="ml-0">
    Dashboard content here
  </TabContent>
</Tabs>
```




