import React from "react";
import { View, ScrollView } from "react-native";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "rn-cn-ui/components/ui/carousel";
import { Card, CardContent } from "rn-cn-ui/components/ui/card";
import { Text } from "rn-cn-ui/components/ui/text";

export default function CarouselScreen() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold text-foreground mb-6">Carousel</Text>
      
      <View className="items-center justify-center flex-1 min-h-[400px]">
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <View className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Text className="text-4xl font-semibold text-foreground">{index + 1}</Text>
                                </CardContent>
                            </Card>
                        </View>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </View>
    </ScrollView>
  );
}
