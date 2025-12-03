"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils/cn"

interface AnimatedCardProps {
    children: React.ReactNode
    className?: string
    tilt?: boolean
    glow?: boolean
    border?: boolean
    glass?: boolean
    onClick?: () => void
}

export function AnimatedCard({
    children,
    className,
    tilt = true,
    glow = true,
    border = true,
    glass = false,
    onClick
}: AnimatedCardProps) {
    const ref = React.useRef<HTMLDivElement>(null)

    // Mouse position
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth spring animation for tilt
    const mouseX = useSpring(x, { stiffness: 500, damping: 50 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 })

    // Calculate rotation based on mouse position
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || !tilt) return

        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        if (!tilt) return
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateX: tilt ? rotateX : 0,
                rotateY: tilt ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "relative rounded-2xl transition-colors duration-300",
                glass ? "bg-background/60 backdrop-blur-md border border-white/10" : "bg-card border",
                className
            )}
        >
            {/* Glow Effect */}
            {glow && (
                <div
                    className="absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary-rgb), 0.1), transparent 40%)"
                    }}
                />
            )}

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>

            {/* Animated Border */}
            {border && (
                <div className="absolute inset-0 -z-10 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            )}
        </motion.div>
    )
}

