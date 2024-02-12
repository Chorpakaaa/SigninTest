import { InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { ElementType } from "react";

export type InputIconProps = InputProps & {
  icon: ElementType;
};

const InputIcon = React.forwardRef<HTMLInputElement, InputIconProps>(
  ({ className, icon: Icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        <Icon className="h-[16px] w-[16px]" />
        <input
          {...props}
          ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  }
);

InputIcon.displayName = "InputIcon";

export { InputIcon };
