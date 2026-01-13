---
title : GlobalSetUp
sidebar_position: 3 
---
In your app entry (e.g. main.tsx in a Vite React app):

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@workokay/atom/dist/atom.css"; // Atom tokens + component styles
import "./index.css";                  // your app styles
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Theme wrapper – required for tokens to take effect */}
    <div className="atom-theme" data-theme="light">
      <App />
    </div>
  </React.StrictMode>
);
```