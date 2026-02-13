import React from "react";
import { View, ScrollView } from "react-native";
import { Label } from "rn-cn-ui/components/ui/label";
import { Input } from "rn-cn-ui/components/ui/input";
import { Checkbox } from "rn-cn-ui/components/ui/checkbox";
import { Text } from "rn-cn-ui/components/ui/text";

export default function LabelScreen() {
  const [checked, setChecked] = React.useState(false);

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Label</Text>
      
      <View className="gap-8">
        <View className="gap-2">
            <Label>Your email address</Label>
            <Input placeholder="Email" />
        </View>

        <View className="flex-row items-center gap-2">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <Label onPress={() => setChecked(!checked)}>Accept terms and conditions</Label>
        </View>
      </View>
    </ScrollView>
  );
}
