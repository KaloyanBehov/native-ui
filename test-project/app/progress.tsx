import React from "react";
import { View, ScrollView } from "react-native";
import { Progress } from "rn-cn-ui/components/ui/progress";
import { Text } from "rn-cn-ui/components/ui/text";
import { Button } from "rn-cn-ui/components/ui/button";

export default function ProgressScreen() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Progress</Text>
      
      <View className="items-center justify-center flex-1 min-h-[200px] gap-8">
        <View className="w-full max-w-[300px] gap-2">
            <Text className="text-sm text-muted-foreground">Default (66%)</Text>
            <Progress value={progress} />
        </View>

        <View className="w-full max-w-[300px] gap-2">
            <Text className="text-sm text-muted-foreground">Completed (100%)</Text>
            <Progress value={100} />
        </View>

        <View className="w-full max-w-[300px] gap-2">
            <Text className="text-sm text-muted-foreground">Indeterminate (0%)</Text>
            <Progress value={0} />
        </View>

        <Button 
            variant="outline" 
            label="Reset Progress" 
            onPress={() => {
                setProgress(0);
                setTimeout(() => setProgress(66), 500);
            }} 
        />
      </View>
    </ScrollView>
  );
}
