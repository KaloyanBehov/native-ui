import React from "react";
import { View, ScrollView } from "react-native";
import { RadioGroup, RadioGroupItem } from "rn-cn-ui/components/ui/radio-group";
import { Label } from "rn-cn-ui/components/ui/label";
import { Text } from "rn-cn-ui/components/ui/text";

export default function RadioGroupScreen() {
  const [value, setValue] = React.useState("default");

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Radio Group</Text>
      
      <View className="gap-6">
        <View className="gap-2">
            <Text className="text-lg font-semibold text-foreground">Default</Text>
            <RadioGroup value={value} onValueChange={setValue}>
                <View className="flex-row items-center gap-2">
                    <RadioGroupItem value="default" />
                    <Label onPress={() => setValue("default")}>Default</Label>
                </View>
                <View className="flex-row items-center gap-2">
                    <RadioGroupItem value="comfortable" />
                    <Label onPress={() => setValue("comfortable")}>Comfortable</Label>
                </View>
                <View className="flex-row items-center gap-2">
                    <RadioGroupItem value="compact" />
                    <Label onPress={() => setValue("compact")}>Compact</Label>
                </View>
            </RadioGroup>
        </View>
      </View>
    </ScrollView>
  );
}
