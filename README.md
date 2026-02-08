# rn-cn-ui

A high-quality, open-source UI library for React Native, inspired by shadcn/ui.
**This is a CLI tool** that copies the component code into your project, allowing you to customize it fully.

## Prerequisites

1.  **React Native** project (Expo or CLI).
2.  **NativeWind v4** configured.

### Important: Install Dependencies

NativeWind v4 requires `react-native-reanimated`. Ensure you have installed it and its peer dependencies:

```bash
npm install nativewind react-native-reanimated react-native-safe-area-context react-native-svg
```

### Configure Babel

Add `react-native-reanimated/plugin` to your `babel.config.js`. **It must be listed last.**

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
    ],
  };
};
```

*Note: If you are using Expo, use `babel-preset-expo` instead of `module:metro-react-native-babel-preset`.*

## Setup

Run the init command to set up the base styles and utilities:

```bash
npx rn-cn-ui init
```

This will create:
- `src/global.css` (Base styles and theme variables)
- `src/lib/utils.ts` (Utility for class merging)

**Important:** Import `global.css` in your root file (e.g., `App.tsx` or `app/_layout.tsx`):

```tsx
import "./src/global.css";
```

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

-   `accordion`
-   `alert`
-   `aspect-ratio`
-   `avatar`
-   `badge`
-   `button`
-   `card`
-   `checkbox`
-   `dialog`
-   `input`
-   `label`
-   `progress`
-   `radio-group`
-   `select`
-   `separator`
-   `skeleton`
-   `spinner`
-   `switch`
-   `tabs`
-   `text`
-   `textarea`
-   `toggle`
-   `toggle-group`

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
