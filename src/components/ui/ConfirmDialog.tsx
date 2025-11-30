"use client"

import * as React from "react"
import { BaseModal } from "./BaseModal"
import { Button } from "@/components/ui/button"

interface ConfirmDialogProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
    description: string
    confirmLabel?: string
    cancelLabel?: string
    variant?: "default" | "destructive"
    isLoading?: boolean
}

export function ConfirmDialog({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmLabel = "Confirmar",
    cancelLabel = "Cancelar",
    variant = "default",
    isLoading = false,
}: ConfirmDialogProps) {
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            description={description}
            size="sm"
            footer={
                <>
                    <Button variant="outline" onClick={onClose} disabled={isLoading}>
                        {cancelLabel}
                    </Button>
                    <Button 
                        variant={variant} 
                        onClick={onConfirm} 
                        disabled={isLoading}
                    >
                        {isLoading ? "Processando..." : confirmLabel}
                    </Button>
                </>
            }
        >
            {/* Empty body as content is in description */}
            <span className="sr-only">Confirmação</span>
        </BaseModal>
    )
}

