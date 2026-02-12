import React from "react";
import { View, ScrollView } from "react-native";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "rn-cn-ui/components/ui/collapsible";
import { Button } from "rn-cn-ui/components/ui/button";
import { Text } from "rn-cn-ui/components/ui/text";
import { ChevronsUpDown } from "lucide-react-native";

export default function CollapsibleScreen() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Collapsible</Text>
      
      <View className="gap-8">
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-2"
        >
            <View className="flex-row items-center justify-between space-x-4 px-4">
                <Text className="text-sm font-semibold text-foreground">
                    @peduarte starred 3 repositories
                </Text>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="w-9 h-9 p-0">
                        <ChevronsUpDown className="h-4 w-4 text-foreground" size={16} />
                        <Text className="sr-only">Toggle</Text>
                    </Button>
                </CollapsibleTrigger>
            </View>
            <View className="rounded-md border border-border px-4 py-3 font-mono text-sm">
                <Text className="text-foreground">@radix-ui/primitives</Text>
            </View>
            <CollapsibleContent className="space-y-2">
                <View className="rounded-md border border-border px-4 py-3 font-mono text-sm">
                    <Text className="text-foreground">@radix-ui/colors</Text>
                </View>
                <View className="rounded-md border border-border px-4 py-3 font-mono text-sm">
                    <Text className="text-foreground">@stitches/react</Text>
                </View>
            </CollapsibleContent>
        </Collapsible>
      </View>
    </ScrollView>
  );
}
