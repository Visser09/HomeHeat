import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Default (primary CTA): solid blue #1B66F9, text white; hover: #1554CC; active: #0F3F99
        default: "bg-[#1B66F9] text-white hover:bg-[#1554CC] active:bg-[#0F3F99]",

        // Secondary (white): white background, blue text #1B66F9, 2px blue border; hover: solid #1B66F9 with white text
        secondary: "bg-white text-[#1B66F9] border-2 border-[#1B66F9] hover:bg-[#1B66F9] hover:text-white",

        // Ghost: transparent bg, blue text #1B66F9; hover: blue tint (10%); active: 16% tint
        ghost: "bg-transparent text-[#1B66F9] hover:bg-[#1B66F9]/10 active:bg-[#1B66F9]/16",

        // Link: blue text #1B66F9; hover: underline only
        link: "text-[#1B66F9] underline-offset-4 hover:underline",

        // Keep destructive for system use
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
