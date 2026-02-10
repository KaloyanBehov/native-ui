import React from "react";
import { View, ScrollView } from "react-native";
import { Badge } from "rn-cn-ui/components/ui/badge";
import { Text } from "rn-cn-ui/components/ui/text";

export default function BadgeScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Badge</Text>
      
      <View className="gap-8">
        <View className="gap-2">
            <Text className="text-lg font-semibold text-foreground">Default</Text>
            <View className="flex-row gap-4 flex-wrap">
                <Badge label="Badge" />
                <Badge variant="secondary" label="Secondary" />
                <Badge variant="destructive" label="Destructive" />
                <Badge variant="outline" label="Outline" />
            </View>
        </View>
      </View>
    </ScrollView>
  );
}
