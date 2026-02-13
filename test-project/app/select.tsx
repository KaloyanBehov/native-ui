import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "rn-cn-ui/components/ui/select";

export default function SelectScreen() {
  const [fruit, setFruit] = useState<string | undefined>(undefined);
  const [size, setSize] = useState<string | undefined>(undefined);

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Select</Text>

      <View className="gap-6">
        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Basic</Text>
          <Select value={fruit} onValueChange={setFruit}>
            <SelectTrigger>
              <SelectValue placeholder="Pick a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Trigger size: default</Text>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger size="default">
              <SelectValue placeholder="Pick a size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="md">Medium</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
            </SelectContent>
          </Select>
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Trigger size: sm</Text>
          <Select>
            <SelectTrigger size="sm">
              <SelectValue placeholder="Small trigger" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
            </SelectContent>
          </Select>
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">With groups and labels</Text>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose one" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="potato">Potato</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Disabled item</Text>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enabled">Enabled</SelectItem>
              <SelectItem value="disabled" disabled>
                Disabled option
              </SelectItem>
            </SelectContent>
          </Select>
        </View>
      </View>
    </View>
  );
}
