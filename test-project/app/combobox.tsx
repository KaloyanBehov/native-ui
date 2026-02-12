import React from "react";
import { View, ScrollView } from "react-native";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger } from "rn-cn-ui/components/ui/combobox";
import { Text } from "rn-cn-ui/components/ui/text";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

export default function ComboboxScreen() {
  const [value, setValue] = React.useState<string | string[]>("")

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Combobox</Text>
      
      <View className="gap-8 z-50">
        <View className="gap-2 z-50">
            <Text className="text-lg font-semibold text-foreground">Basic</Text>
            <Combobox value={value} onValueChange={setValue}>
                <ComboboxTrigger className="w-[200px] justify-between">
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select framework..."}
                </ComboboxTrigger>
                <ComboboxContent className="w-[200px] p-0">
                    <ComboboxInput placeholder="Search framework..." />
                    <ComboboxList>
                        <ComboboxEmpty>No framework found.</ComboboxEmpty>
                        <ComboboxGroup>
                            {frameworks.map((framework) => (
                            <ComboboxItem
                                key={framework.value}
                                value={framework.value}
                                label={framework.label}
                            >
                                {framework.label}
                            </ComboboxItem>
                            ))}
                        </ComboboxGroup>
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </View>
      </View>
    </ScrollView>
  );
}
