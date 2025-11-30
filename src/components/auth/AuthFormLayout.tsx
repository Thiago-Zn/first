"use client"

import * as React from "react"
import { cn } from "@/lib/utils/cn"

interface AuthFormLayoutProps {
    children: React.ReactNode
    title: string
    description?: string
    footer?: React.ReactNode
    className?: string
    variant?: "signup" | "login"
}

export function AuthFormLayout({
    children,
    title,
    description,
    footer,
    className,
    variant = "login",
}: AuthFormLayoutProps) {
    const isSignup = variant === "signup"

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-muted/30 via-background to-muted/20 p-4 lg:p-6">
            <div className={cn(
                "w-full mx-auto",
                isSignup ? "max-w-[480px]" : "max-w-[420px]",
                className
            )}>
                {/* Logo e Branding */}
                <div className={cn("text-center", isSignup ? "mb-10" : "mb-8")}>
                    <div className="inline-flex items-center justify-center gap-2 text-2xl font-bold tracking-tight mb-2">
                        <span className="text-primary">Saldo</span>
                        <span className="text-foreground">Certo</span>
                    </div>
                </div>

                {/* Card Principal */}
                <div className={cn(
                    "rounded-2xl border bg-card shadow-xl",
                    isSignup ? "p-10 space-y-8" : "p-8 space-y-6"
                )}>
                    {/* Cabeçalho */}
                    <div className="space-y-3 text-center">
                        <h1 className={cn(
                            "font-bold tracking-tight text-foreground",
                            isSignup ? "text-4xl" : "text-3xl"
                        )}>
                            {title}
                        </h1>
                        {description && (
                            <p className={cn(
                                "text-muted-foreground leading-relaxed",
                                isSignup ? "text-lg" : "text-base"
                            )}>
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Formulário */}
                    <div>
                        {children}
                    </div>
                </div>

                {/* Footer */}
                {footer && (
                    <div className={cn(
                        "text-center text-sm text-muted-foreground leading-relaxed",
                        isSignup ? "mt-8" : "mt-6"
                    )}>
                        {footer}
                    </div>
                )}
            </div>
        </div>
    )
}
