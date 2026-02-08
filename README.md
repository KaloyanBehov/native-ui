# rn-cn-ui

A high-quality, open-source UI library for React Native, inspired by shadcn/ui.
**This is a CLI tool** that copies the component code into your project, allowing you to customize it fully.

## Prerequisites

1.  **React Native** project (Expo or CLI).
2.  **NativeWind** and **Tailwind CSS** configured.

## Usage

You do not install this library as a dependency. Instead, you use the CLI to add components to your project.

### Adding a Component

Run the following command to add a component (e.g., `button`) to your project:

```bash
npx rn-cn-ui add button
```

This will:
1.  Download `button.tsx` to your `src/components/ui/` directory.
2.  Install necessary dependencies (like `class-variance-authority`, `clsx`, `tailwind-merge`).

### Using the Component

Once added, import the component from your local directory:

```tsx
import { Button } from "./src/components/ui/button"

export default function App() {
  return (
    <Button label="Click me" onPress={() => console.log("Pressed")} />
  )
}
```

## Available Components

You can add any of the following components:

-   `button`
-   `text`
-   `input`
-   `card`
-   `badge`
-   `avatar`
-   `label`
-   `separator`
-   `skeleton`
-   `spinner`
-   `switch`
-   `checkbox`
-   `radio-group`
-   `textarea`
-   `alert`
-   `progress`

## Configuration

Ensure you have `nativewind` and `tailwindcss` configured in your project.

Add the following to your `tailwind.config.js`:

```js
module.exports = {
  // ...
  presets: [require("nativewind/preset")],
  // ...
}
```
