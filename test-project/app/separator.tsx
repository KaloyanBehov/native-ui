import React from "react";
import { View, ScrollView } from "react-native";
import { Separator } from "rn-cn-ui/components/ui/separator";
import { Text } from "rn-cn-ui/components/ui/text";

export default function SeparatorScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Separator</Text>
      
      <View className="gap-6">
        <View>
            <Text className="text-sm font-medium leading-none text-foreground">Radix Primitives</Text>
            <Text className="text-sm text-muted-foreground">An open-source UI component library.</Text>
        </View>
        
        <Separator className="my-4" />
        
        <View className="flex h-5 items-center flex-row space-x-4">
            <Text className="text-sm text-foreground">Blog</Text>
            <Separator orientation="vertical" />
            <Text className="text-sm text-foreground">Docs</Text>
            <Separator orientation="vertical" />
            <Text className="text-sm text-foreground">Source</Text>
        </View>
      </View>
    </ScrollView>
  );
}
