import React from "react";
import { View, ScrollView } from "react-native";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "rn-cn-ui/components/ui/alert-dialog";
import { Button } from "rn-cn-ui/components/ui/button";
import { Text } from "rn-cn-ui/components/ui/text";

export default function AlertDialogScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Alert Dialog</Text>
      
      <View className="gap-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" label="Show Dialog" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel label="Cancel" />
              <AlertDialogAction label="Continue" />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </View>
    </ScrollView>
  );
}
