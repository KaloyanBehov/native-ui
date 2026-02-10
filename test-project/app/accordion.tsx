import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "rn-cn-ui/components/ui/text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "rn-cn-ui/components/ui/accordion";

export default function AccordionScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Accordion</Text>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            <Text>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            <Text>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollView>
  );
}
