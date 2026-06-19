"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-inter font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-sm tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#1B2333] hover:-translate-y-0.5 shadow-sm hover:shadow-lg",
        secondary:
          "bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground",
        rose:
          "bg-secondary text-primary hover:bg-accent hover:-translate-y-0.5 shadow-sm",
        ghost:
          "bg-transparent text-foreground hover:bg-muted",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-red-700",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        default: "h-10 px-6",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
