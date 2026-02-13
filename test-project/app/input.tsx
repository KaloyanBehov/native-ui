import React from "react";
import { View, ScrollView } from "react-native";
import { Input } from "rn-cn-ui/components/ui/input";
import { Button } from "rn-cn-ui/components/ui/button";
import { Text } from "rn-cn-ui/components/ui/text";
import { Label } from "rn-cn-ui/components/ui/label";

export default function InputScreen() {
  const [value, setValue] = React.useState("");

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Input</Text>
      
      <View className="gap-6">
        <View className="gap-2">
          <Label nativeID="email">Email</Label>
          <Input 
            placeholder="Email" 
            keyboardType="email-address"
            value={value}
            onChangeText={setValue}
            aria-labelledby="email"
          />
        </View>

        <View className="gap-2">
          <Label>File</Label>
          <Input type="file" />
        </View>

        <View className="gap-2">
          <Label>Disabled</Label>
          <Input disabled placeholder="Disabled" />
        </View>

        <View className="gap-2">
          <Label>With Button</Label>
          <View className="flex-row gap-2">
            <Input className="flex-1" placeholder="Search..." />
            <Button label="Search" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
