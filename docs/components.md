---
title: Component
sidebar_position: 6 
---


#### More components (Input, Card, etc.) will be added as the library grows.
```js
<!-- docs/components-button.md -->
```
    # Button
 
    ```md
    The `Button` component is the primary action trigger in Atom.  
    It is:

    - Fully theme-aware (uses the `--atom-button-*` tokens)
    - Variants & sizes powered by `class-variance-authority`
    - Ripple-enabled by default
    - Slot-aware (`asChild`) for linking with `<a>`, router links, etc.
    ```

    ## Import

```tsx
import { Button } from "@workokay/atom";

Make sure you’ve already imported @workokay/atom/dist/atom.css and wrapped your app with .atom-theme as shown 
in the main Components docs.

More components will follow the same pattern:
   * Theme-aware via tokens.
   * Variants and sizes via cva.
   * Clean slotting via asChild.
   * Zero per-project Tailwind configuration required for colors.
```
