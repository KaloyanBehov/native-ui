import * as React from "react"
import { Modal, View, Pressable, Text } from "react-native"
import { X } from "lucide-react-native"
import { cn } from "../../lib/utils"

const Dialog = React.forwardRef<
  React.ElementRef<typeof Modal>,
  React.ComponentPropsWithoutRef<typeof Modal> & {
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(({ className, children, open, onOpenChange, ...props }, ref) => (
  <Modal
    ref={ref}
    transparent
    animationType="fade"
    visible={open}
    onRequestClose={() => onOpenChange?.(false)}
    {...props}
  >
    <View className="flex-1 items-center justify-center bg-black/50 p-4">
      <Pressable className="absolute inset-0" onPress={() => onOpenChange?.(false)} />
      <View
        className={cn(
          "w-full max-w-lg gap-4 rounded-lg border border-border bg-background p-6 shadow-lg",
          className
        )}
      >
        {children}
        <Pressable
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          onPress={() => onOpenChange?.(false)}
        >
          <X size={18} className="text-muted-foreground" />
        </Pressable>
      </View>
    </View>
  </Modal>
))
Dialog.displayName = "Dialog"

const DialogHeader = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) => (
  <View
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) => (
  <View
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-foreground",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"

export {
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
