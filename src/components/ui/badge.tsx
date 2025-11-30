import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils/cn"

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-xl font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
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
                // Pastel variants - mais suaves e com tipografia leve
                yellow: "bg-pastel-yellow/80 text-yellow-900/80",
                green: "bg-pastel-green/80 text-green-900/80",
                blue: "bg-pastel-blue/80 text-blue-900/80",
                purple: "bg-pastel-purple/80 text-purple-900/80",
                pink: "bg-pastel-pink/80 text-pink-900/80",
                orange: "bg-pastel-orange/80 text-orange-900/80",
            },
            size: {
                default: "h-6 min-w-6 px-3.5 text-xs",
                sm: "h-5 min-w-5 px-3 text-[11px]",
                lg: "h-8 min-w-8 px-4 text-sm",
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
