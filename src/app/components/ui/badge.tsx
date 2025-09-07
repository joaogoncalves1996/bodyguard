import * as React from "react";
import { cn } from "@/app/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-indigo-600 text-white",
    secondary:
      "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white",
    outline: "border border-neutral-400 text-neutral-800 dark:text-neutral-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
