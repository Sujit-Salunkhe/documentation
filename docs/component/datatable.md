---
title: "Data Table"
sidebar_position: 11
---

A powerful, theme-aware data table component with **search, sorting, filtering, column visibility, pagination, and export** support.  
Built with accessibility, composability, and design tokens in mind.

---

## Basic usage

```jsx title=code blocks
import { DataTable } from "@workokay/atom";

const columns = [
  {
    name: "Name",
    key: "name",
    sortable: true,
  },
  {
    name: "Email",
    key: "email",
    sortable: true,
  },
  {
    name: "Role",
    key: "role",
  },
];

const data = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
];

export function DataTableExample() {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      options={{ search: true }}
    />
  );
}
```

## Props

```jsx title=code blocks
DataTable props:
  export interface DataTableProps {
    columns: Column[]                    // Required: Column definitions
    data: DataRow[]                      // Required: Table data
    pagination?: boolean                 // Enable pagination (10/page)
    className?: string                   // Additional CSS classes
    options?: DataTableOptions           // Feature configuration
  }
```
## Column configuration

### Column defination

```jsx title=code blocks
export interface Column {
  /** Column header label */
  name: string;

  /** Unique column key (maps to row data) */
  key: string;

  /** Extract value from row (used for sorting, filtering, search) */
  selector?: (row: DataRow) => unknown;

  /** Fully custom cell renderer */
  cell?: (row: DataRow, rowIndex: number) => ReactNode;

  /** Conditional renderer based on raw value */
  conditionalCell?: (value: unknown, row: DataRow) => ReactNode;

  /** Enable / disable sorting (default: true) */
  sortable?: boolean;
}
```
### Render priority:

```jsx title=code blocks
1. cell → Full custom render
2. conditionalCell → Value + row context
3. selector → Custom accessor + default render
4. row[key] → Direct property + default render
```



### DataRow

```jsx title=code blocks
export interface DataRow {
  /** Arbitrary row data */
  [key: string]: unknown;

  /** Optional stable row id (recommended) */
  id?: string | number;
}
```

Providing ``` id ```  improves rendering performance and avoids index-based keys.

---

## Options

```jsx title=code blocks
export interface DataTableOptions {
  /** Enable search input */
  search?: boolean;

  /** Enable CSV export */
  download?: boolean;

  /** Enable column visibility toggle */
  viewColumns?: boolean;

  /** Enable filters */
  filter?: boolean;

  /** Filter UI type */
  filterType?: "dropdown";

  /** Fixed table body height */
  tableBodyHeight?: string;

  /** Max table body height */
  tableBodyMaxHeight?: string;

  /** Export format (future-proofed) */
  exportFormat?: "csv" | "excel";
}
```
### Search

```jsx title=code blocks
<DataTable
  columns={columns}
  data={data}
  options={{ search: true }}
/>
```

 - Case-insensitive

 - Normalized text search

 - Searches across all columns

 ---

 ### Sorting

 ```jsx title=code blocks
{
  name: "Price",
  key: "price",
  sortable: true,
}
```

 - Asc / Desc controls in header

 - Numeric & string sorting

 - Accessible via aria-sort

---

### Filters

```jsx title=code blocks
<DataTable
  columns={columns}
  data={data}
  options={{ filter: true }}
/>
```

 - Column-wise filtering

 - Multi-select values

 - Active filter chips with remove action

 - ``` Clear all ``` support

 ---

 ### Column visibility

 ```jsx title=code blocks
<DataTable
  columns={columns}
  data={data}
  options={{ viewColumns: true }}
/>
```
 - Toggle columns at runtime
 - Minimum one column enforced
 - State preserved internally

---

### Pagination

```jsx title=code block
<DataTable
  columns={columns}
  data={data}
  pagination
/>
```

### Export (CSV)

```jsx title=code block
<DataTable
  columns={columns}
  data={data}
  options={{ download: true }}
/>
```
 - Exports ``` visible  columns only ```
 - UTF-8 BOM safe for Excel
 - Respects filters & sorting

---

## Cell rendering examples

### Custom Cell rendered

```jsx title=code block
const columns = [{
  name: "Actions",
  key: "id",
  cell: (row, rowIndex) => (
    <div className="flex gap-2">
      <Button size="sm" variant="ghost">Edit</Button>
      <Button size="sm" variant="danger">Delete</Button>
    </div>
  )
}]
```

### Conditional cell
```jsx title=code blocks
const columns = [{
  name: "Status",
  key: "status",
  conditionalCell: (value, row) => {
    const color = value === 'active' ? 'green' : 'red'
    return (
      <span className={`px-2 py-1 rounded-full text-xs bg-${color}-100 text-${color}-800`}>
        {String(value)}
      </span>
    )
  }
}]
```

### Selector function
```jsx title=code blocks
const columns = [{
  name: "Full Name",
  key: "fullName",
  selector: (row) => `${row.firstName} ${row.lastName}`
}]
```

## Advance patterns

### Stable row IDs

```jsx title=code blocks
const data = [
  { id: "user-1", name: "John", email: "john@example.com" },  // ✅ Recommended
  { name: "Jane", email: "jane@example.com" }                 // Uses index key
]
```
### Fixed height table
```jsx title=code blocks
<DataTable
  options={{
    tableBodyMaxHeight: '400px',  // Scrollable body
    tableBodyHeight: '500px'      // Fixed height
  }}
/>
```

### Custom empty state

```jsx title=code blocks
// Use cell renderer for custom no-results
columns={[{
  name: "",
  key: "empty",
  cell: () => <div className="text-center py-8">Custom empty state</div>
}]}
```

### Theming behavior 

```jsx title=code blocks
// Uses Atom design tokens throughout:
text-[var(--atom-theme-text-primary)]
bg-[var(--atom-theme-surface-primary)]
border-[var(--atom-theme-border-primary)]
// etc...

// Full light/dark mode support via CSS variables
// Hover states: color-mix() transitions
// Responsive: overflow-x-auto + flexible widths
```

### Keyboard navigation

```jsx title=code blocks
Tab: Navigate controls (search → filter → columns → pagination)
Enter/Space: Activate buttons/checkboxes
Escape: Close dropdowns
Arrow keys: Pagination navigation
```

### Accessbility features

```jsx title=code blocks
✅ ARIA table/row/cell roles
✅ aria-sort="ascending/descending/none" 
✅ aria-expanded/aria-haspopup on dropdowns
✅ aria-live="polite" for pagination
✅ Proper focus management
✅ Screen reader friendly
```