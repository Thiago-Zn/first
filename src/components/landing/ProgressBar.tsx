"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"

interface ProgressBarProps {
    value: number
    max?: number
    height?: number
    className?: string
    color?: string
    label?: string
    showValue?: boolean
    animate?: boolean
    delay?: number
}

export function ProgressBar({
    value,
    max = 100,
    height = 8,
    className,
    color = "bg-primary",
    label,
    showValue = false,
    animate = true,
    delay = 0
}: ProgressBarProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
        <div className={cn("w-full", className)}>
            {(label || showValue) && (
                <div className="flex justify-between items-center mb-2 text-sm">
                    {label && <span className="font-medium text-foreground">{label}</span>}
                    {showValue && <span className="text-muted-foreground">{percentage.toFixed(0)}%</span>}
                </div>
            )}
            
            <div 
                className="w-full bg-muted overflow-hidden rounded-full"
                style={{ height }}
            >
                <motion.div
                    className={cn("h-full rounded-full relative overflow-hidden", color)}
                    initial={animate ? { width: 0 } : { width: `${percentage}%` }}
                    whileInView={animate ? { width: `${percentage}%` } : undefined}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                >
                    {/* Shimmer Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                            x: ["-100%", "100%"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>
            </div>
        </div>
    )
}

