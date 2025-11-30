"use client"

import React from "react"
import { AlertCircle, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorStatePageProps {
    title?: string
    message?: string
    onRetry?: () => void
}

export function ErrorStatePage({
    title = "Ops, algo deu errado",
    message = "Não foi possível carregar esta página. Verifique sua conexão e tente novamente.",
    onRetry,
}: ErrorStatePageProps) {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
                <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">{title}</h2>
            <p className="mt-2 max-w-sm text-muted-foreground">{message}</p>
            {onRetry && (
                <Button onClick={onRetry} className="mt-6" variant="outline">
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Tentar Novamente
                </Button>
            )}
        </div>
    )
}

