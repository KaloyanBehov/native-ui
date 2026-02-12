import React from "react";
import { View, ScrollView } from "react-native";
import { Checkbox } from "rn-cn-ui/components/ui/checkbox";
import { Label } from "rn-cn-ui/components/ui/label";
import { Text } from "rn-cn-ui/components/ui/text";

export default function CheckboxScreen() {
  const [terms, setTerms] = React.useState(false);

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Checkbox</Text>
      
      <View className="gap-8">
        <View className="flex-row items-center gap-2">
            <Checkbox checked={terms} onCheckedChange={setTerms} />
            <Label onPress={() => setTerms(!terms)}>
                Accept terms and conditions
            </Label>
        </View>

        <View className="flex-row items-center gap-2">
            <Checkbox disabled checked={true} />
            <Label className="opacity-50">Disabled checked</Label>
        </View>

        <View className="flex-row items-center gap-2">
            <Checkbox disabled />
            <Label className="opacity-50">Disabled unchecked</Label>
        </View>
      </View>
    </ScrollView>
  );
}
