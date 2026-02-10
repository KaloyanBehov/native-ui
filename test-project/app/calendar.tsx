import React from "react";
import { View, ScrollView } from "react-native";
import { Calendar } from "rn-cn-ui/components/ui/calendar";
import { Text } from "rn-cn-ui/components/ui/text";

export default function CalendarScreen() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Calendar</Text>
      
      <View className="items-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        
        <View className="mt-4">
            <Text className="text-muted-foreground">
                Selected date: {date ? date.toDateString() : "None"}
            </Text>
        </View>
      </View>
    </ScrollView>
  );
}
