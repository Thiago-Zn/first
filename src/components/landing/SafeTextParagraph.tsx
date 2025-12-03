"use client"

import * as React from "react"
import { cn } from "@/lib/utils/cn"

interface SafeTextParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
    className?: string
}

/**
 * SafeTextParagraph - Componente que garante largura adequada para parágrafos
 * 
 * Previne problemas de largura mínima que causam quebra de palavra em cada linha.
 * 
 * @example
 * <SafeTextParagraph maxWidth="2xl">
 *   Texto que terá largura adequada sempre
 * </SafeTextParagraph>
 */
export function SafeTextParagraph({
    children,
    maxWidth = "2xl",
    className,
    ...props
}: SafeTextParagraphProps) {
    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
    }

    const maxWidthPx = {
        sm: "24rem", // 384px
        md: "28rem", // 448px
        lg: "32rem", // 512px
        xl: "36rem", // 576px
        "2xl": "42rem", // 672px
        "3xl": "48rem", // 768px
    }

    return (
        <p
            className={cn(
                "whitespace-normal",
                maxWidthClasses[maxWidth],
                "mx-auto",
                className
            )}
            style={{
                minWidth: "280px",
                width: "100%",
                maxWidth: maxWidthPx[maxWidth],
            }}
            {...props}
        >
            {children}
        </p>
    )
}

