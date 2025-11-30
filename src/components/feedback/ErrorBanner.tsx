import React from "react"
import { AlertCircle, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBannerProps {
  message?: string
  onRetry?: () => void
}

export function ErrorBanner({ message = "Ocorreu um erro ao carregar os dados.", onRetry }: ErrorBannerProps) {
  return (
    <div className="rounded-md bg-destructive/15 p-4 text-destructive mb-6">
      <div className="flex items-center gap-3">
        <AlertCircle className="h-5 w-5" />
        <div className="flex-1 text-sm font-medium">{message}</div>
        {onRetry && (
          <Button variant="ghost" size="sm" onClick={onRetry} className="h-8 hover:bg-destructive/10 text-destructive">
            <RotateCw className="mr-2 h-4 w-4" />
            Tentar novamente
          </Button>
        )}
      </div>
    </div>
  )
}

