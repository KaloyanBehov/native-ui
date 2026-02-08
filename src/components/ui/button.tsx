import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "flex-row items-center justify-center rounded-md gap-2",
  {
    variants: {
      variant: {
        default: "bg-primary shadow-sm active:opacity-90",
        destructive: "bg-destructive shadow-sm active:opacity-90",
        outline: "border border-input bg-background shadow-sm active:bg-accent active:text-accent-foreground",
        secondary: "bg-secondary shadow-sm active:opacity-80",
        ghost: "active:bg-accent active:text-accent-foreground",
        link: "text-primary underline-offset-4 active:underline",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const buttonTextVariants = cva(
  "text-sm font-medium text-primary-foreground",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        destructive: "text-destructive-foreground",
        outline: "text-foreground",
        secondary: "text-secondary-foreground",
        ghost: "text-foreground",
        link: "text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label?: string
  labelClasses?: string
}

const Button = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
  ({ className, variant, size, label, labelClasses, children, ...props }, ref) => {
    return (
      <TouchableOpacity
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {label ? (
          <Text className={cn(buttonTextVariants({ variant }), labelClasses)}>
            {label}
          </Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
