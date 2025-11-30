"use client"

import React from "react"
import { AlertCircle, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

interface ErrorStateInlineProps {
    title?: string
    message?: string
    onRetry?: () => void
    className?: string
}

export function ErrorStateInline({
    title = "Erro ao carregar dados",
    message,
    onRetry,
    className,
}: ErrorStateInlineProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center rounded-lg border border-destructive/20 bg-destructive/5 p-6 text-center", className)}>
            <div className="flex items-center gap-2 text-destructive">
                <AlertCircle className="h-5 w-5" />
                <h3 className="font-semibold">{title}</h3>
            </div>
            {message && (
                <p className="mt-2 text-sm text-muted-foreground">
                    {message}
                </p>
            )}
            {onRetry && (
                <Button onClick={onRetry} variant="ghost" size="sm" className="mt-4 text-destructive hover:bg-destructive/10 hover:text-destructive">
                    <RefreshCcw className="mr-2 h-3 w-3" />
                    Tentar Novamente
                </Button>
            )}
        </div>
    )
}

