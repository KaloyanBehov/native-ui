import React from "react";
import { View, ScrollView } from "react-native";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "rn-cn-ui/components/ui/dialog";
import { Button } from "rn-cn-ui/components/ui/button";
import { Text } from "rn-cn-ui/components/ui/text";
import { Input } from "rn-cn-ui/components/ui/input";

export default function DialogScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Dialog</Text>
      
      <View className="items-center justify-center flex-1 min-h-[300px]">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" label="Edit Profile" />
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <View className="gap-4 py-4">
                <View className="flex-row items-center gap-4">
                  <Text className="text-right w-20 text-foreground">Name</Text>
                  <Input defaultValue="Pedro Duarte" className="flex-1" />
                </View>
                <View className="flex-row items-center gap-4">
                  <Text className="text-right w-20 text-foreground">Username</Text>
                  <Input defaultValue="@peduarte" className="flex-1" />
                </View>
              </View>
              <DialogFooter>
                <DialogClose asChild>
                    <Button label="Save changes" />
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </View>
    </ScrollView>
  );
}
