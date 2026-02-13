import React from "react";
import { View, ScrollView } from "react-native";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "rn-cn-ui/components/ui/input-otp";
import { Text } from "rn-cn-ui/components/ui/text";

export default function InputOTPScreen() {
  const [value, setValue] = React.useState("");

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Input OTP</Text>
      
      <View className="items-center gap-8">
        <View className="items-center gap-2">
            <Text className="text-muted-foreground mb-2">Default (6 digits)</Text>
            <InputOTP
            maxLength={6}
            value={value}
            onChangeText={setValue}
            >
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
            </InputOTP>
        </View>

        <View className="items-center gap-2">
            <Text className="text-muted-foreground mb-2">4 digits</Text>
            <InputOTP
            maxLength={4}
            value={value.slice(0, 4)}
            onChangeText={(v) => setValue(v)}
            >
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
            </InputOTPGroup>
            </InputOTP>
        </View>
      </View>
    </ScrollView>
  );
}
