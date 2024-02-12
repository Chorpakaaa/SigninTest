"use client";
import * as React from "react";
import { EyeOff, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type InputIconProps = InputProps & {
  icon: React.ElementType;
};

const Input = React.forwardRef<HTMLInputElement, InputIconProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    return (
      <div
        className={cn(
          " relative flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        <Icon className="h-[16px] w-[16px]" />
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400">
          {showPassword ? (
            <EyeOff className="h-4 w-4" onClick={togglePasswordVisibility} />
          ) : (
            <Eye className="h-4 w-4" onClick={togglePasswordVisibility} />
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input as PasswordInput };
