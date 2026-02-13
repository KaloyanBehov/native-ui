import React from "react";
import { View, ScrollView } from "react-native";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "rn-cn-ui/components/ui/navigation-menu";
import { Text } from "rn-cn-ui/components/ui/text";

export default function NavigationMenuScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Navigation Menu</Text>
      
      <View className="items-center justify-center flex-1 min-h-[400px]">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <View className="gap-3 p-4 w-[300px]">
                    <NavigationMenuLink>
                        <Text className="text-sm font-medium leading-none text-foreground">Introduction</Text>
                        <Text className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Re-usable components built using Radix UI and Tailwind CSS.
                        </Text>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Text className="text-sm font-medium leading-none text-foreground">Installation</Text>
                        <Text className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            How to install dependencies and structure your app.
                        </Text>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Text className="text-sm font-medium leading-none text-foreground">Typography</Text>
                        <Text className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Styles for headings, paragraphs, lists...etc
                        </Text>
                    </NavigationMenuLink>
                </View>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <View className="gap-3 p-4 w-[300px]">
                    <NavigationMenuLink>
                        <Text className="text-sm font-medium leading-none text-foreground">Alert Dialog</Text>
                        <Text className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            A modal dialog that interrupts the user with important content and expects a response.
                        </Text>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Text className="text-sm font-medium leading-none text-foreground">Hover Card</Text>
                        <Text className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            For sighted users to preview content available behind a link.
                        </Text>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <Text className="text-sm font-medium leading-none text-foreground">Progress</Text>
                        <Text className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
                        </Text>
                    </NavigationMenuLink>
                </View>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Text className="text-sm font-medium px-4 py-2 text-foreground">Documentation</Text>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </View>
    </ScrollView>
  );
}
