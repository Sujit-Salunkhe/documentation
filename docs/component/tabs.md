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
  TabContent props:
    export interface TabContentProps 
    extends React.HTMLAttributes<HTMLDivElement> {
    /** The tab value this content is associated with (required) */
    value: string;
  }
```
## Variant Props

### Variant

```jsx title=

