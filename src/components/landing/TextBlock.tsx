import { ReactNode } from "react"
import { cn } from "@/lib/utils/cn"

type TextBlockAlign = "left" | "center"

interface LandingTextBlockProps {
    eyebrow?: ReactNode
    title: ReactNode
    description?: ReactNode
    align?: TextBlockAlign
    className?: string
    children?: ReactNode
    spacing?: "default" | "compact"
    titleClassName?: string
    descriptionClassName?: string
}

const alignClasses: Record<TextBlockAlign, string> = {
    left: "items-start text-left",
    center: "items-center text-center",
}

export function LandingTextBlock({
    eyebrow,
    title,
    description,
    align = "left",
    className,
    children,
    spacing = "default",
    titleClassName,
    descriptionClassName,
}: LandingTextBlockProps) {
    return (
        <div
            className={cn(
                "flex w-full flex-col",
                alignClasses[align],
                spacing === "compact" ? "gap-4" : "gap-6",
                className
            )}
        >
            {eyebrow && (
                <div className="w-full max-w-[720px]">{eyebrow}</div>
            )}

            <div className="w-full max-w-[720px] text-balance">
                <h2
                    className={cn(
                        "text-4xl font-bold leading-tight text-foreground lg:text-5xl",
                        titleClassName
                    )}
                >
                    {title}
                </h2>
            </div>

            {description && (
                <p
                    className={cn(
                        "w-full max-w-[700px] text-lg leading-relaxed text-foreground/75 text-balance",
                        descriptionClassName
                    )}
                >
                    {description}
                </p>
            )}

            {children && (
                <div className="w-full max-w-[720px]">{children}</div>
            )}
        </div>
    )
}

