import React, { useState } from "react";
import { View, Text } from "react-native";
import { Switch } from "rn-cn-ui/components/ui/switch";

export default function SwitchScreen() {
  const [on, setOn] = useState(false);

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Switch</Text>

      <View className="gap-6">
        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Default size (controlled)</Text>
          <View className="flex-row items-center gap-3">
            <Switch checked={on} onCheckedChange={setOn} />
            <Text className="text-sm text-muted-foreground">{on ? "On" : "Off"}</Text>
          </View>
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Small size</Text>
          <View className="flex-row items-center gap-3">
            <Switch size="sm" checked={on} onCheckedChange={setOn} />
            <Text className="text-sm text-muted-foreground">size=&quot;sm&quot;</Text>
          </View>
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Uncontrolled</Text>
          <Switch />
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Disabled</Text>
          <View className="flex-row items-center gap-4">
            <Switch disabled checked={false} />
            <Text className="text-sm text-muted-foreground">Off</Text>
            <Switch disabled checked />
            <Text className="text-sm text-muted-foreground">On</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
