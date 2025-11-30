import React from "react"
import { Skeleton as UiSkeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils/cn"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rectangular" | "circular"
  width?: string | number
  height?: string | number
}

export function Skeleton({ 
  variant = "rectangular", 
  width, 
  height, 
  className, 
  style, 
  ...props 
}: SkeletonProps) {
  return (
    <UiSkeleton
      className={cn(
        variant === "circular" && "rounded-full",
        className
      )}
      style={{
        width: width,
        height: height,
        ...style
      }}
      {...props}
    />
  )
}

