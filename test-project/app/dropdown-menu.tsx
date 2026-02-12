import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "rn-cn-ui/components/ui/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "rn-cn-ui/components/ui/dropdown-menu";
import { Button } from "rn-cn-ui/components/ui/button";
import { Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from "lucide-react-native";

export default function DropdownMenuScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Dropdown Menu</Text>
      
      <View className="items-center justify-center flex-1 min-h-[400px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" label="Open Menu" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4 text-foreground" />
                <Text className="text-foreground">Profile</Text>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4 text-foreground" />
                <Text className="text-foreground">Billing</Text>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4 text-foreground" />
                <Text className="text-foreground">Settings</Text>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4 text-foreground" />
                <Text className="text-foreground">Keyboard shortcuts</Text>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4 text-foreground" />
                <Text className="text-foreground">Team</Text>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4 text-foreground" />
                  <Text className="text-foreground">Invite users</Text>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4 text-foreground" />
                      <Text className="text-foreground">Email</Text>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4 text-foreground" />
                      <Text className="text-foreground">Message</Text>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4 text-foreground" />
                      <Text className="text-foreground">More...</Text>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4 text-foreground" />
                <Text className="text-foreground">New Team</Text>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">GitHub</Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">Support</Text>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Cloud className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">API</Text>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">Log out</Text>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
    </ScrollView>
  );
}
