import React from "react";
import { View, ScrollView } from "react-native";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "rn-cn-ui/components/ui/drawer";
import { Button } from "rn-cn-ui/components/ui/button";
import { Text } from "rn-cn-ui/components/ui/text";
import { Minus, Plus } from "lucide-react-native";

export default function DrawerScreen() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Drawer</Text>
      
      <View className="items-center justify-center flex-1 min-h-[300px]">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" label="Open Drawer" />
          </DrawerTrigger>
          <DrawerContent>
            <View className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <View className="p-4 pb-0">
                <View className="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onPress={() => onClick(-10)}
                    disabled={goal <= 200}
                  >
                    <Minus className="h-4 w-4 text-foreground" />
                    <Text className="sr-only">Decrease</Text>
                  </Button>
                  <View className="flex-1 items-center justify-center">
                    <Text className="text-7xl font-bold tracking-tighter text-foreground">
                      {goal}
                    </Text>
                    <Text className="text-[0.70rem] uppercase text-muted-foreground">
                      Calories/day
                    </Text>
                  </View>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onPress={() => onClick(10)}
                    disabled={goal >= 400}
                  >
                    <Plus className="h-4 w-4 text-foreground" />
                    <Text className="sr-only">Increase</Text>
                  </Button>
                </View>
              </View>
              <DrawerFooter>
                <Button label="Submit" />
                <DrawerClose asChild>
                  <Button variant="outline" label="Cancel" />
                </DrawerClose>
              </DrawerFooter>
            </View>
          </DrawerContent>
        </Drawer>
      </View>
    </ScrollView>
  );
}
