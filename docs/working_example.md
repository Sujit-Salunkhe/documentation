---
title : Working Example
sidebar_position: 8 
---
## Example: minimal working app
```js
// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@workokay/atom/dist/atom.css";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="atom-theme" data-theme="light">
      <App />
    </div>
  </React.StrictMode>
);

----

// App.tsx
import { Button } from "@workokay/atom";

export default function App() {
  return (
    <div
      style={{
        background: "var(--atom-bg)",
        color: "var(--atom-text)",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "var(--atom-button-bg)",
          color: "var(--atom-button-fg)",
          padding: 8,
          borderRadius: 4,
        }}
      >
        Button primary swatch
      </div>

      <Button variant="primary" size="lg">
        Primary
      </Button>

      <Button variant="secondary" size="md">
        Secondary
      </Button>

      <Button variant="ghost" size="sm">
        Ghost
      </Button>

      <Button variant="success" size="md">
        Success
      </Button>
    </div>
  );
  ```