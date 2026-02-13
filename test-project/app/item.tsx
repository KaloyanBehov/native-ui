import React from "react";
import { View, ScrollView } from "react-native";
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemSeparator,
} from "rn-cn-ui/components/ui/item";
import { Text } from "rn-cn-ui/components/ui/text";
import { Button } from "rn-cn-ui/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "rn-cn-ui/components/ui/avatar";
import { Settings, ChevronRight, Bell, User } from "lucide-react-native";

export default function ItemScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Item</Text>
      
      <View className="gap-6">
        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Basic List</Text>
          <ItemGroup className="border border-border rounded-md">
            <Item>
              <ItemMedia>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>shadcn</ItemTitle>
                <ItemDescription>
                  Designed and developed by shadcn.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon">
                  <ChevronRight size={16} className="text-muted-foreground" />
                </Button>
              </ItemActions>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>John Doe</ItemTitle>
                <ItemDescription>
                  Frontend Developer at Acme Corp.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="ghost" size="icon">
                  <ChevronRight size={16} className="text-muted-foreground" />
                </Button>
              </ItemActions>
            </Item>
          </ItemGroup>
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Settings List</Text>
          <ItemGroup className="border border-border rounded-md">
            <Item>
              <ItemMedia>
                <User size={20} className="text-foreground" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Account</ItemTitle>
                <ItemDescription>Manage your account settings</ItemDescription>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia>
                <Bell size={20} className="text-foreground" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Notifications</ItemTitle>
                <ItemDescription>Configure push notifications</ItemDescription>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia>
                <Settings size={20} className="text-foreground" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>General</ItemTitle>
                <ItemDescription>App preferences and display</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </View>
      </View>
    </ScrollView>
  );
}
