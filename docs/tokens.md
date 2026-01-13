---
title : Tokens
sidebar_position: 5 
---
## Tokens (high-level) 

```js
  Tokens are defined with CSS custom properties under .atom-theme, for example:
    Brand:
        --atom-primary, --atom-primary-50 … --atom-primary-900

    Text:
        --atom-text, --atom-text-muted, --atom-text-inverse

    Surfaces:
        --atom-bg, --atom-surface, --atom-surface-alt

    Buttons:
        --atom-button-bg, --atom-button-bg-hover, --atom-button-fg
        --atom-button-success-*, --atom-button-warning-*, etc.

    Inputs:
        --atom-input-bg, --atom-input-fg, --atom-input-border, --atom-input-focus

    Effects:
        --atom-ring-color, --atom-ring-offset
        --atom-ripple-color-solid, --atom-ripple-color-ghost

    You can override tokens in the consuming app if you want to customize the palette:
        /* example – tweak primary color in your app */
        .atom-theme[data-theme="light"] {
        --atom-primary-700: #005b4f;
        --atom-primary: var(--atom-primary-700);
        }
```