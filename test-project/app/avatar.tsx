import React from "react";
import { View, ScrollView } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "rn-cn-ui/components/ui/avatar";
import { Text } from "rn-cn-ui/components/ui/text";

export default function AvatarScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Avatar</Text>
      
      <View className="gap-8">
        <View className="gap-2">
            <Text className="text-lg font-semibold text-foreground">Default Size</Text>
            <View className="flex-row gap-4">
                <Avatar>
                    <AvatarImage
                        source={{ uri: "https://github.com/shadcn.png" }}
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage
                        source={{ uri: "https://github.com/kaloyan.png" }} // Likely to fail fallback
                        alt="@kaloyan"
                    />
                    <AvatarFallback>KL</AvatarFallback>
                </Avatar>
            </View>
        </View>

        <View className="gap-2">
            <Text className="text-lg font-semibold text-foreground">Small Size</Text>
            <View className="flex-row gap-4">
                <Avatar size="sm">
                    <AvatarImage
                        source={{ uri: "https://github.com/shadcn.png" }}
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar size="sm">
                    <AvatarFallback>SM</AvatarFallback>
                </Avatar>
            </View>
        </View>

        <View className="gap-2">
            <Text className="text-lg font-semibold text-foreground">Large Size</Text>
            <View className="flex-row gap-4">
                <Avatar size="lg">
                    <AvatarImage
                        source={{ uri: "https://github.com/shadcn.png" }}
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                    <AvatarFallback>LG</AvatarFallback>
                </Avatar>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}
