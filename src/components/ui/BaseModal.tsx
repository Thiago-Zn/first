"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

interface BaseModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    description?: string
    children: React.ReactNode
    footer?: React.ReactNode
    size?: "sm" | "md" | "lg"
    className?: string
}

export function BaseModal({
    isOpen,
    onClose,
    title,
    description,
    children,
    footer,
    size = "md",
    className,
}: BaseModalProps) {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, onClose])

    if (!mounted) return null

    const maxWidths = {
        sm: "max-w-md",
        md: "max-w-lg",
        lg: "max-w-2xl",
    }

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        aria-hidden="true"
                    />
                    
                    {/* Modal Content */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2 }}
                            role="dialog"
                            aria-modal="true"
                            className={cn(
                                "relative w-full overflow-hidden rounded-2xl border bg-background shadow-lg",
                                maxWidths[size],
                                className
                            )}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            {(title || description) && (
                                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                    <div className="flex items-start justify-between">
                                        {title && (
                                            <h3 className="text-lg font-semibold leading-none tracking-tight">
                                                {title}
                                            </h3>
                                        )}
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-6 -mt-1 -mr-2 text-muted-foreground hover:text-foreground"
                                            onClick={onClose}
                                        >
                                            <X className="h-4 w-4" />
                                            <span className="sr-only">Fechar</span>
                                        </Button>
                                    </div>
                                    {description && (
                                        <p className="text-sm text-muted-foreground">
                                            {description}
                                        </p>
                                    )}
                                </div>
                            )}

                             {/* Close button if no title */}
                             {!title && !description && (
                                <div className="absolute right-4 top-4 z-10">
                                     <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6 text-muted-foreground hover:text-foreground"
                                        onClick={onClose}
                                    >
                                        <X className="h-4 w-4" />
                                        <span className="sr-only">Fechar</span>
                                    </Button>
                                </div>
                             )}

                            {/* Body */}
                            <div className={cn("p-6", (title || description) ? "pt-0" : "")}>
                                {children}
                            </div>

                            {/* Footer */}
                            {footer && (
                                <div className="flex items-center justify-end gap-2 border-t bg-muted/20 p-6">
                                    {footer}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}

