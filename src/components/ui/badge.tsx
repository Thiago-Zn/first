import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils/cn"

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "bg-foreground text-background",
                primary: "bg-primary text-primary-foreground",
                secondary: "bg-secondary text-secondary-foreground",
                success: "bg-success text-success-foreground",
                warning: "bg-warning text-warning-foreground",
                destructive: "bg-destructive text-destructive-foreground",
                info: "bg-info text-info-foreground",
                outline: "border border-border text-foreground bg-background",
                // Pastel variants (como na referência)
                yellow: "bg-pastel-yellow text-yellow-900",
                green: "bg-pastel-green text-green-900",
                blue: "bg-pastel-blue text-blue-900",
                purple: "bg-pastel-purple text-purple-900",
                pink: "bg-pastel-pink text-pink-900",
                orange: "bg-pastel-orange text-orange-900",
            },
            size: {
                default: "h-6 min-w-6 px-2.5 text-xs",
                sm: "h-5 min-w-5 px-2 text-[10px]",
                lg: "h-8 min-w-8 px-3 text-sm",
                icon: "h-8 w-8 text-sm", // Para badges circulares com letra (como na referência)
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, size, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
