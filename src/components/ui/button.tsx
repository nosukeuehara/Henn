<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
=======
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
>>>>>>> 03a7609 (test)
=======
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
>>>>>>> 8d290f4 (こみこみっと)
=======
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
>>>>>>> 8dcfe5d855f1e13cc185b9ede1c978c8a7a93e0e

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
);
=======
)
>>>>>>> 03a7609 (test)
=======
);
>>>>>>> 8d290f4 (こみこみっと)
=======
);
>>>>>>> 8dcfe5d855f1e13cc185b9ede1c978c8a7a93e0e

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  asChild?: boolean;
=======
  asChild?: boolean
>>>>>>> 03a7609 (test)
=======
  asChild?: boolean;
>>>>>>> 8d290f4 (こみこみっと)
=======
  asChild?: boolean;
>>>>>>> 8dcfe5d855f1e13cc185b9ede1c978c8a7a93e0e
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const Comp = asChild ? Slot : "button";
=======
    const Comp = asChild ? Slot : "button"
>>>>>>> 03a7609 (test)
=======
    const Comp = asChild ? Slot : "button";
>>>>>>> 8d290f4 (こみこみっと)
=======
    const Comp = asChild ? Slot : "button";
>>>>>>> 8dcfe5d855f1e13cc185b9ede1c978c8a7a93e0e
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8dcfe5d855f1e13cc185b9ede1c978c8a7a93e0e
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
<<<<<<< HEAD
=======
    )
=======
    );
>>>>>>> 8d290f4 (こみこみっと)
  }
);
Button.displayName = "Button";

<<<<<<< HEAD
export { Button, buttonVariants }
>>>>>>> 03a7609 (test)
=======
export { Button, buttonVariants };
>>>>>>> 8d290f4 (こみこみっと)
=======
>>>>>>> 8dcfe5d855f1e13cc185b9ede1c978c8a7a93e0e
