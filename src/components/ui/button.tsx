import * as React from "react"
import { Text, Pressable, type PressableProps } from "react-native"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "group flex-row items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary active:opacity-90 web:hover:bg-primary/90",
        destructive: "bg-destructive active:opacity-90 web:hover:bg-destructive/90",
        outline:
          "border border-input bg-background active:bg-accent web:hover:bg-accent web:hover:text-accent-foreground",
        secondary: "bg-secondary active:opacity-80 web:hover:bg-secondary/80",
        ghost: "active:bg-accent web:hover:bg-accent web:hover:text-accent-foreground",
        link: "web:underline-offset-4 web:hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const buttonTextVariants = cva(
  "text-sm font-medium web:transition-colors",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        destructive: "text-destructive-foreground",
        outline: "text-foreground group-active:text-accent-foreground",
        secondary: "text-secondary-foreground",
        ghost: "text-foreground group-active:text-accent-foreground",
        link: "text-primary group-active:underline",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    label?: string
    labelClasses?: string
  }

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, label, labelClasses, children, ...props }, ref) => {
    return (
      <Pressable
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        role="button"
        {...props}
      >
        {label ? (
          <Text
            className={cn(
              buttonTextVariants({ variant, size }),
              labelClasses
            )}
          >
            {label}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, buttonTextVariants }
export type { ButtonProps }
