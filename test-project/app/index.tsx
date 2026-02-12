import { View, Text, ScrollView } from "react-native";
import { Button } from "../../src/components/ui/button";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <View className="gap-4 pb-10">
        <View className="flex-row gap-4 mb-4 flex-wrap">
            <Link href="/accordion" asChild>
                <Button label="Go to Accordion" />
            </Link>
            <Link href="/alert" asChild>
                <Button label="Go to Alert" />
            </Link>
            <Link href="/alert-dialog" asChild>
                <Button label="Go to Alert Dialog" />
            </Link>
            <Link href="/avatar" asChild>
                <Button label="Go to Avatar" />
            </Link>
            <Link href="/badge" asChild>
                <Button label="Go to Badge" />
            </Link>
            <Link href="/breadcrumb" asChild>
                <Button label="Go to Breadcrumb" />
            </Link>
            <Link href="/button-group" asChild>
                <Button label="Go to Button Group" />
            </Link>
            <Link href="/calendar" asChild>
                <Button label="Go to Calendar" />
            </Link>
            <Link href="/card" asChild>
                <Button label="Go to Card" />
            </Link>
            <Link href="/carousel" asChild>
                <Button label="Go to Carousel" />
            </Link>
            <Link href="/chart" asChild>
                <Button label="Go to Chart" />
            </Link>
        </View>

        <Text className="text-2xl font-bold text-foreground mb-4">Button Variants</Text>
        
        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Default</Text>
          <Button label="Default Button" />
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Destructive</Text>
          <Button variant="destructive" label="Destructive Button" />
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Outline</Text>
          <Button variant="outline" label="Outline Button" />
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Secondary</Text>
          <Button variant="secondary" label="Secondary Button" />
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Ghost</Text>
          <Button variant="ghost" label="Ghost Button" />
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Link</Text>
          <Button variant="link" label="Link Button" />
        </View>

        <Text className="text-2xl font-bold text-foreground mt-8 mb-4">Button Sizes</Text>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Default Size</Text>
          <Button label="Default Size" />
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Small (sm)</Text>
          <Button size="sm" label="Small Size" />
        </View>

        <View className="gap-2">
          <Text className="text-lg font-semibold text-foreground">Large (lg)</Text>
          <Button size="lg" label="Large Size" />
        </View>
        
        <View className="gap-2">
           <Text className="text-lg font-semibold text-foreground">Icon Size</Text>
           <View className="flex-row gap-2">
             <Button size="icon" label="+" />
           </View>
        </View>

      </View>
    </ScrollView>
  );
}
