---
title : Themes
sidebar_position: 4 
---
```jsx
Atom uses a .atom-theme wrapper with a data-theme attribute:
    data-theme="light" → Deep Teal light theme (default)
    data-theme="dark" → Deep Teal dark theme
    data-theme="cyan-light" → Cyan / Sapphire light theme
    data-theme="cyan-dark" → Cyan / Sapphire dark theme

Example:
    export function ThemedShell() {
    return (
        <div className="atom-theme" data-theme="light">
        {/* your app */}
        </div>
    );
}

You can change the theme at runtime by toggling the data-theme value on the wrapper.
```