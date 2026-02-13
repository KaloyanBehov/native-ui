import { View, ScrollView } from "react-native";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "rn-cn-ui/components/ui/hover-card";
import { Button } from "rn-cn-ui/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "rn-cn-ui/components/ui/avatar";
import { Text } from "rn-cn-ui/components/ui/text";
import { CalendarDays } from "lucide-react-native";

export default function HoverCardScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Hover Card</Text>
      
      <View className="items-center justify-center flex-1 min-h-[400px]">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" label="@nextjs" />
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <View className="flex flex-row justify-between gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <View className="gap-1 flex-1">
                <Text className="text-sm font-semibold text-foreground">@nextjs</Text>
                <Text className="text-sm text-muted-foreground">
                  The React Framework – created and maintained by @vercel.
                </Text>
                <View className="flex flex-row items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70 text-muted-foreground" size={16} />
                  <Text className="text-xs text-muted-foreground">
                    Joined December 2021
                  </Text>
                </View>
              </View>
            </View>
          </HoverCardContent>
        </HoverCard>
      </View>
    </ScrollView>
  );
}
