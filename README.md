# Native UI

A high-quality, open-source UI library for React Native, inspired by shadcn/ui.

## Features

- **Minimal Design**: Clean and modern aesthetic.
- **Highly Reusable**: Built with reusability in mind.
- **Class Merging**: Uses `clsx` and `tailwind-merge` for easy styling overrides.
- **NativeWind**: Built on top of NativeWind for Tailwind CSS in React Native.

## Installation

```bash
npm install native-cn-ui
```

## Usage

### Button

```tsx
import { Button } from "native-cn-ui"

<Button label="Click me" onPress={() => console.log("Pressed")} />
<Button variant="destructive" label="Delete" />
<Button variant="outline" label="Cancel" />
```

### Text

```tsx
import { Text } from "native-cn-ui"

<Text variant="h1">Heading 1</Text>
<Text variant="lead">This is a lead text.</Text>
```

### Input

```tsx
import { Input, Label } from "native-cn-ui"

<Label>Email</Label>
<Input placeholder="Enter your email" />
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "native-cn-ui"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <Text>Content goes here</Text>
  </CardContent>
  <CardFooter>
    <Button label="Action" />
  </CardFooter>
</Card>
```

### Badge

```tsx
import { Badge } from "native-cn-ui"

<Badge label="New" />
<Badge variant="destructive" label="Error" />
```

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback, AvatarFallbackText } from "native-cn-ui"

<Avatar>
  <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
  <AvatarFallback>
    <AvatarFallbackText>CN</AvatarFallbackText>
  </AvatarFallback>
</Avatar>
```

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
