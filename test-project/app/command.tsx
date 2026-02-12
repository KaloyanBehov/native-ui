import React from "react"
import { View } from "react-native"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "rn-cn-ui/components/ui/command"
import { Button } from "rn-cn-ui/components/ui/button"
import { Text } from "rn-cn-ui/components/ui/text"
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react-native"

export default function CommandScreen() {
  const [open, setOpen] = React.useState(false)

  return (
    <View className="flex-1 bg-background p-4 items-center justify-center gap-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Command</Text>
      <Text className="text-muted-foreground text-center mb-4">
        Press the button below to open the command menu.
      </Text>
      
      <Button
        variant="outline"
        onPress={() => setOpen(true)}
      >
        <Text className="text-muted-foreground">Press me</Text>
        <CommandShortcut>⌘K</CommandShortcut>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">Calendar</Text>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">Search Emoji</Text>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">Calculator</Text>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">Profile</Text>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">Billing</Text>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4 text-foreground" />
              <Text className="text-foreground">Settings</Text>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      
      <View className="mt-10 w-full max-w-[300px] border border-border rounded-md p-0 overflow-hidden">
        <Command className="h-[200px]">
            <CommandInput placeholder="Inline command..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Inline Group">
                    <CommandItem>
                        <User className="mr-2 h-4 w-4 text-foreground" />
                        <Text className="text-foreground">User</Text>
                    </CommandItem>
                     <CommandItem>
                        <Settings className="mr-2 h-4 w-4 text-foreground" />
                        <Text className="text-foreground">Settings</Text>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
      </View>
    </View>
  )
}
