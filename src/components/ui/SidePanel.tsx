"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

interface SidePanelProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    description?: string
    children: React.ReactNode
    footer?: React.ReactNode
    side?: "right" | "left"
    className?: string
}

export function SidePanel({
    isOpen,
    onClose,
    title,
    description,
    children,
    footer,
    side = "right",
    className,
}: SidePanelProps) {
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

    const variants = {
        right: {
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
        },
        left: {
            initial: { x: "-100%" },
            animate: { x: 0 },
            exit: { x: "-100%" },
        },
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
                    
                    {/* Panel */}
                    <div className={cn(
                        "fixed inset-y-0 z-50 flex max-w-full",
                        side === "right" ? "right-0" : "left-0"
                    )}>
                        <motion.div
                            variants={variants[side]}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            role="dialog"
                            aria-modal="true"
                            className={cn(
                                "flex h-full w-screen flex-col overflow-y-auto border-l bg-background shadow-xl sm:w-[400px]",
                                className
                            )}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between border-b p-6">
                                <div className="space-y-1">
                                    {title && (
                                        <h2 className="text-lg font-semibold leading-none tracking-tight">
                                            {title}
                                        </h2>
                                    )}
                                    {description && (
                                        <p className="text-sm text-muted-foreground">
                                            {description}
                                        </p>
                                    )}
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                    onClick={onClose}
                                >
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Fechar</span>
                                </Button>
                            </div>

                            {/* Body */}
                            <div className="flex-1 p-6">
                                {children}
                            </div>

                            {/* Footer */}
                            {footer && (
                                <div className="border-t bg-muted/20 p-6">
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

