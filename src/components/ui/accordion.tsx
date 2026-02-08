import * as React from "react"
import { View, Pressable, Text, LayoutAnimation, Platform, UIManager } from "react-native"
import { ChevronDown } from "lucide-react-native"
import { cn } from "../../lib/utils"

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const Accordion = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & {
    type?: "single" | "multiple"
    collapsible?: boolean
    defaultValue?: string | string[]
    onValueChange?: (value: string | string[]) => void
  }
>(({ className, type = "single", collapsible = false, defaultValue, onValueChange, children, ...props }, ref) => {
  const [value, setValue] = React.useState<string | string[]>(defaultValue || (type === "multiple" ? [] : ""))

  const handleValueChange = (itemValue: string) => {
    if (type === "single") {
      const newValue = value === itemValue && collapsible ? "" : itemValue
      setValue(newValue)
      onValueChange?.(newValue)
    } else {
      const currentValues = Array.isArray(value) ? value : []
      const newValue = currentValues.includes(itemValue)
        ? currentValues.filter((v) => v !== itemValue)
        : [...currentValues, itemValue]
      setValue(newValue)
      onValueChange?.(newValue)
    }
  }

  return (
    <View ref={ref} className={cn("gap-2", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            // @ts-ignore
            expanded: Array.isArray(value) ? value.includes(child.props.value) : value === child.props.value,
            // @ts-ignore
            onPress: () => handleValueChange(child.props.value),
          })
        }
        return child
      })}
    </View>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & { value: string }
>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn("border-b border-border", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> & { expanded?: boolean }
>(({ className, children, expanded, onPress, ...props }, ref) => (
  <Pressable
    ref={ref}
    onPress={(e) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      onPress?.(e)
    }}
    className={cn(
      "flex-row items-center justify-between py-4 font-medium transition-all",
      className
    )}
    {...props}
  >
    {typeof children === 'string' ? (
        <Text className="text-sm font-medium text-foreground">{children}</Text>
    ) : children}
    <ChevronDown
      size={18}
      className={cn("text-muted-foreground transition-transform duration-200", expanded ? "rotate-180" : "")}
    />
  </Pressable>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & { expanded?: boolean }
>(({ className, children, expanded, ...props }, ref) => {
  if (!expanded) return null
  return (
    <View
      ref={ref}
      className={cn("overflow-hidden text-sm transition-all pb-4", className)}
      {...props}
    >
      <View className="pt-0 pb-4">{children}</View>
    </View>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
