import React from "react";
import { View } from "react-native";
import { ScrollArea, ScrollBar } from "rn-cn-ui/components/ui/scroll-area";
import { Text } from "rn-cn-ui/components/ui/text";

export default function ScrollAreaScreen() {
  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Scroll Area</Text>
      
      <View className="flex-1 border border-border rounded-lg overflow-hidden min-h-0">
        <ScrollArea className="flex-1">
          <View className="p-4 gap-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <View key={i} className="py-3 border-b border-border">
                <Text className="text-base text-foreground">
                  Item {i + 1} – Scroll to see the custom scrollbar on the right.
                </Text>
              </View>
            ))}
          </View>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </View>
    </View>
  );
}
