import React from "react";
import { View, ScrollView } from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "rn-cn-ui/components/ui/card";
import { Button } from "rn-cn-ui/components/ui/button";
import { Text } from "rn-cn-ui/components/ui/text";
import { BellRing, Check, ShoppingCart, Star } from "lucide-react-native";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function CardScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Cards</Text>
      
      <View className="gap-8 pb-8">
        {/* Product Card */}
        <Card className="w-full">
          <View className="p-6 pb-0">
             <View className="aspect-[16/9] w-full rounded-md bg-muted items-center justify-center">
                <ShoppingCart size={48} className="text-muted-foreground opacity-50" />
             </View>
          </View>
          <CardHeader>
            <View className="flex-row justify-between items-start">
                <View className="flex-1 mr-2">
                    <CardTitle className="text-xl">Wireless Headphones</CardTitle>
                    <CardDescription className="mt-1">
                    High-fidelity audio with active noise cancellation.
                    </CardDescription>
                </View>
                <View className="bg-primary/10 px-2 py-1 rounded-md">
                    <Text className="text-primary font-bold text-sm">$299</Text>
                </View>
            </View>
          </CardHeader>
          <CardContent>
             <View className="flex-row items-center gap-1">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <Star size={16} className="text-muted-foreground" />
                <Text className="text-xs text-muted-foreground ml-1">(4.0)</Text>
             </View>
          </CardContent>
          <CardFooter className="flex-row justify-between gap-4">
            <Button variant="outline" className="flex-1" label="Details" />
            <Button className="flex-1" label="Add to Cart" />
          </CardFooter>
        </Card>

        {/* Notification Card */}
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="gap-4">
                <View className="flex-row items-center rounded-md border border-border p-4">
                    <BellRing size={24} className="text-foreground" />
                    <View className="flex-1 ml-4 gap-1">
                        <Text className="text-sm font-medium leading-none text-foreground">
                            Push Notifications
                        </Text>
                        <Text className="text-sm text-muted-foreground">
                            Send notifications to device.
                        </Text>
                    </View>
                </View>
                <View className="mt-4">
                    {notifications.map((notification, index) => (
                        <View
                            key={index}
                            className="mb-4 flex-row items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <View className="flex-row items-start gap-4">
                                <View className="h-2 w-2 translate-y-1.5 rounded-full bg-sky-500" />
                                <View className="gap-1">
                                    <Text className="text-sm font-medium leading-none text-foreground">
                                        {notification.title}
                                    </Text>
                                    <Text className="text-sm text-muted-foreground">
                                        {notification.description}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </CardContent>
            <CardFooter>
                <Button className="w-full" label="Mark all as read">
                    <Check className="mr-2 h-4 w-4 text-primary-foreground" />
                </Button>
            </CardFooter>
        </Card>
      </View>
    </ScrollView>
  );
}
