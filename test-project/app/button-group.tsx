import React from "react";
import { View, ScrollView } from "react-native";
import { ButtonGroup, ButtonGroupText } from "rn-cn-ui/components/ui/button-group";
import { Button } from "rn-cn-ui/components/ui/button";
import { Text } from "rn-cn-ui/components/ui/text";
import { Bold, Italic, Underline } from "lucide-react-native";

export default function ButtonGroupScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Button Group</Text>
      
      <View className="gap-8">
        <View className="gap-2">
            <Text className="text-lg font-semibold text-foreground">Horizontal</Text>
            <ButtonGroup>
                <Button variant="outline" size="icon">
                    <Bold size={16} className="text-foreground" />
                </Button>
                <Button variant="outline" size="icon">
                    <Italic size={16} className="text-foreground" />
                </Button>
                <Button variant="outline" size="icon">
                    <Underline size={16} className="text-foreground" />
                </Button>
            </ButtonGroup>
        </View>

        <View className="gap-2">
            <Text className="text-lg font-semibold text-foreground">With Text</Text>
            <ButtonGroup>
                <Button variant="outline" label="Save" />
                <Button variant="outline" label="Cancel" />
            </ButtonGroup>
        </View>

        <View className="gap-2">
            <Text className="text-lg font-semibold text-foreground">Vertical</Text>
            <ButtonGroup orientation="vertical">
                <Button variant="outline" label="Top" />
                <Button variant="outline" label="Middle" />
                <Button variant="outline" label="Bottom" />
            </ButtonGroup>
        </View>
      </View>
    </ScrollView>
  );
}
