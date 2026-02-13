import React from "react";
import { View, ScrollView } from "react-native";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "rn-cn-ui/components/ui/popover";
import { Button } from "rn-cn-ui/components/ui/button";
import { Input } from "rn-cn-ui/components/ui/input";
import { Label } from "rn-cn-ui/components/ui/label";
import { Text } from "rn-cn-ui/components/ui/text";

export default function PopoverScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Popover</Text>
      
      <View className="items-center justify-center flex-1 min-h-[400px]">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" label="Open Popover" />
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <View className="grid gap-4">
              <View className="space-y-2">
                <Text className="font-medium leading-none text-foreground">Dimensions</Text>
                <Text className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </Text>
              </View>
              <View className="gap-2">
                <View className="flex-row items-center gap-4">
                  <Label className="w-1/3">Width</Label>
                  <Input defaultValue="100%" className="flex-1 h-8" />
                </View>
                <View className="flex-row items-center gap-4">
                  <Label className="w-1/3">MaxWidth</Label>
                  <Input defaultValue="300px" className="flex-1 h-8" />
                </View>
                <View className="flex-row items-center gap-4">
                  <Label className="w-1/3">Height</Label>
                  <Input defaultValue="25px" className="flex-1 h-8" />
                </View>
                <View className="flex-row items-center gap-4">
                  <Label className="w-1/3">MaxHeight</Label>
                  <Input defaultValue="none" className="flex-1 h-8" />
                </View>
              </View>
            </View>
          </PopoverContent>
        </Popover>
      </View>
    </ScrollView>
  );
}
