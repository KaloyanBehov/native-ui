import * as React from "react"
import { View, Pressable, Text, Modal, FlatList } from "react-native"
import { Check, ChevronDown } from "lucide-react-native"
import { cn } from "../../lib/utils"

interface SelectContextValue {
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}

const SelectContext = React.createContext<SelectContextValue>({
  open: false,
  setOpen: () => {},
})

const Select = ({
  value,
  onValueChange,
  children,
}: {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      {children}
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable>
>(({ className, children, ...props }, ref) => {
  const { setOpen } = React.useContext(SelectContext)
  return (
    <Pressable
      ref={ref}
      onPress={() => setOpen(true)}
      className={cn(
        "flex h-10 w-full flex-row items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown size={16} className="opacity-50" />
    </Pressable>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text> & { placeholder?: string }
>(({ className, placeholder, ...props }, ref) => {
  const { value } = React.useContext(SelectContext)
  return (
    <Text
      ref={ref}
      className={cn("text-sm text-foreground", !value && "text-muted-foreground", className)}
      {...props}
    >
      {value || placeholder}
    </Text>
  )
})
SelectValue.displayName = "SelectValue"

const SelectContent = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) => {
  const { open, setOpen } = React.useContext(SelectContext)
  
  if (!open) return null

  return (
    <Modal
        transparent
        animationType="fade"
        visible={open}
        onRequestClose={() => setOpen(false)}
    >
        <Pressable className="flex-1 bg-black/50" onPress={() => setOpen(false)}>
            <View className="flex-1 justify-center p-4">
                <View
                    className={cn(
                        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
                        className
                    )}
                    {...props}
                >
                    <View className="p-1">
                        {children}
                    </View>
                </View>
            </View>
        </Pressable>
    </Modal>
  )
}
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const { value: selectedValue, onValueChange, setOpen } = React.useContext(SelectContext)
  const isSelected = selectedValue === value

  return (
    <Pressable
      ref={ref}
      onPress={() => {
        onValueChange?.(value)
        setOpen(false)
      }}
      className={cn(
        "relative flex w-full cursor-default select-none flex-row items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        isSelected && "bg-accent",
        className
      )}
      {...props}
    >
      {isSelected && (
        <View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <Check size={14} className="text-foreground" />
        </View>
      )}
      <Text className="text-popover-foreground">{children}</Text>
    </Pressable>
  )
})
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
