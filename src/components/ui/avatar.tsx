<<<<<<< HEAD
<<<<<<< HEAD
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";
=======
"use client"
=======
"use client";
>>>>>>> 8d290f4 (こみこみっと)

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

<<<<<<< HEAD
import { cn } from "@/lib/utils"
>>>>>>> 03a7609 (test)
=======
import { cn } from "@/lib/utils";
>>>>>>> 8d290f4 (こみこみっと)

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
=======
))
Avatar.displayName = AvatarPrimitive.Root.displayName
>>>>>>> 03a7609 (test)
=======
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
>>>>>>> 8d290f4 (こみこみっと)

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
=======
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName
>>>>>>> 03a7609 (test)
=======
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
>>>>>>> 8d290f4 (こみこみっと)

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
<<<<<<< HEAD
<<<<<<< HEAD
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
=======
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
>>>>>>> 03a7609 (test)
=======
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
>>>>>>> 8d290f4 (こみこみっと)
