import { Link } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { Button } from '../../src/components/ui/button'
import { useTheme } from '../../src/lib/theme-provider'

export default function Index() {
  const { theme, resolvedTheme, toggleTheme } = useTheme()
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <View className="gap-4 pb-10">
        <Button label={`Toggle Theme (${theme} → ${resolvedTheme})`} onPress={toggleTheme} />
        <View className="flex-row gap-4 mb-4 flex-wrap">
          <Link href="/empty-state" asChild>
            <Button label="Go to Empty State" />
          </Link>
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
          <Link href="/checkbox" asChild>
            <Button label="Go to Checkbox" />
          </Link>
          <Link href="/collapsible" asChild>
            <Button label="Go to Collapsible" />
          </Link>
          <Link href="/combobox" asChild>
            <Button label="Go to Combobox" />
          </Link>
          <Link href="/command" asChild>
            <Button label="Go to Command" />
          </Link>
          <Link href="/context-menu" asChild>
            <Button label="Go to Context Menu" />
          </Link>
          <Link href="/table" asChild>
            <Button label="Go to Table" />
          </Link>
          <Link href="/dialog" asChild>
            <Button label="Go to Dialog" />
          </Link>
          <Link href="/drawer" asChild>
            <Button label="Go to Drawer" />
          </Link>
          <Link href="/sheet" asChild>
            <Button label="Go to Sheet" />
          </Link>
          <Link href="/separator" asChild>
            <Button label="Go to Separator" />
          </Link>
          <Link href="/dropdown-menu" asChild>
            <Button label="Go to Dropdown Menu" />
          </Link>
          <Link href="/field" asChild>
            <Button label="Go to Field" />
          </Link>
          <Link href="/hover-card" asChild>
            <Button label="Go to Hover Card" />
          </Link>
          <Link href="/input" asChild>
            <Button label="Go to Input" />
          </Link>
          <Link href="/input-group" asChild>
            <Button label="Go to Input Group" />
          </Link>
          <Link href="/input-otp" asChild>
            <Button label="Go to Input OTP" />
          </Link>
          <Link href="/item" asChild>
            <Button label="Go to Item" />
          </Link>
          <Link href="/label" asChild>
            <Button label="Go to Label" />
          </Link>
          <Link href="/menubar" asChild>
            <Button label="Go to Menubar" />
          </Link>
          <Link href="/navigation-menu" asChild>
            <Button label="Go to Navigation Menu" />
          </Link>
          <Link href="/pagination" asChild>
            <Button label="Go to Pagination" />
          </Link>
          <Link href="/popover" asChild>
            <Button label="Go to Popover" />
          </Link>
          <Link href="/progress" asChild>
            <Button label="Go to Progress" />
          </Link>
          <Link href="/radio-group" asChild>
            <Button label="Go to Radio Group" />
          </Link>
          <Link href="/resizable" asChild>
            <Button label="Go to Resizable" />
          </Link>
          <Link href="/scroll-area" asChild>
            <Button label="Go to Scroll Area" />
          </Link>
          <Link href="/select" asChild>
            <Button label="Go to Select" />
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
  )
}
