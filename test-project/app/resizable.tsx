import React from "react";
import { View } from "react-native";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "rn-cn-ui/components/ui/resizable";
import { Text } from "rn-cn-ui/components/ui/text";

export default function ResizableScreen() {
  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-4">Resizable</Text>
      
      <View className="flex-1 border border-border rounded-lg overflow-hidden min-h-0">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20} className="bg-muted/20 items-center justify-center p-4">
            <Text className="font-semibold">Sidebar</Text>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25} className="items-center justify-center p-4">
                <Text className="font-semibold">Header</Text>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75} className="items-center justify-center p-4">
                <Text className="font-semibold">Content</Text>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </View>
    </View>
  );
}
