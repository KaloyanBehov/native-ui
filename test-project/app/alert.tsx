import React from "react";
import { View, ScrollView } from "react-native";
import { Alert, AlertDescription, AlertTitle } from "rn-cn-ui/components/ui/alert";
import { Terminal, AlertCircle } from "lucide-react-native";
import { Text } from "rn-cn-ui/components/ui/text";

export default function AlertScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Alert</Text>
      
      <View className="gap-4">
        <Alert>
          <Terminal size={16} color="currentColor" />
          <View className="pl-8">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </View>
        </Alert>

        <Alert variant="destructive">
          <AlertCircle size={16} color="currentColor" />
          <View className="pl-8">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </View>
        </Alert>

        <Alert>
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            This is an alert without an icon.
          </AlertDescription>
        </Alert>
      </View>
    </ScrollView>
  );
}
