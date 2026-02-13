import React from "react";
import { View, ScrollView } from "react-native";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "rn-cn-ui/components/ui/input-group";
import { Text } from "rn-cn-ui/components/ui/text";
import { Label } from "rn-cn-ui/components/ui/label";
import { Search, Mail, Lock, Eye, EyeOff, Copy } from "lucide-react-native";
import { Button } from "rn-cn-ui/components/ui/button";

export default function InputGroupScreen() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Input Group</Text>
      
      <View className="gap-6">
        <View className="gap-2">
          <Label>Search</Label>
          <InputGroup>
            <InputGroupAddon>
              <Search size={16} className="text-muted-foreground" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
        </View>

        <View className="gap-2">
          <Label>Email</Label>
          <InputGroup>
            <InputGroupInput placeholder="Email" />
            <InputGroupAddon align="inline-end">
              <Mail size={16} className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </View>

        <View className="gap-2">
          <Label>Password</Label>
          <InputGroup>
            <InputGroupAddon>
              <Lock size={16} className="text-muted-foreground" />
            </InputGroupAddon>
            <InputGroupInput 
              placeholder="Password" 
              secureTextEntry={!showPassword} 
            />
            <InputGroupButton 
              size="icon-sm" 
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={16} className="text-muted-foreground" />
              ) : (
                <Eye size={16} className="text-muted-foreground" />
              )}
            </InputGroupButton>
          </InputGroup>
        </View>

        <View className="gap-2">
          <Label>Website</Label>
          <InputGroup>
            <InputGroupAddon>https://</InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
          </InputGroup>
        </View>

        <View className="gap-2">
          <Label>Copy Link</Label>
          <InputGroup>
            <InputGroupInput defaultValue="https://ui.shadcn.com" readOnly />
            <InputGroupButton variant="secondary" size="sm">
              <Copy size={14} className="mr-2 text-foreground" />
              <Text className="text-xs">Copy</Text>
            </InputGroupButton>
          </InputGroup>
        </View>

        <View className="gap-2">
          <Label>Amount</Label>
          <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupInput placeholder="0.00" keyboardType="numeric" />
            <InputGroupAddon align="inline-end">USD</InputGroupAddon>
          </InputGroup>
        </View>

        <View className="gap-2">
            <Label>Vertical Group (Textarea)</Label>
            <InputGroup className="flex-col items-stretch h-auto">
                <InputGroupTextarea placeholder="Type your message here." />
                <InputGroupAddon align="block-end" className="justify-between bg-transparent border-t-0 p-2">
                    <Text className="text-xs text-muted-foreground">0/100</Text>
                    <Button size="sm" label="Send" />
                </InputGroupAddon>
            </InputGroup>
        </View>
      </View>
    </ScrollView>
  );
}
