"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
    pulse?: boolean
    magnetic?: boolean
    gradient?: boolean
}

export function AnimatedButton({
    children,
    className,
    pulse = false,
    magnetic = false,
    gradient = false,
    onClick,
    ...props
}: AnimatedButtonProps) {
    const ref = React.useRef<HTMLButtonElement>(null)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!magnetic || !ref.current) return
        
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current.getBoundingClientRect()
        
        const x = (clientX - (left + width / 2)) * 0.15
        const y = (clientY - (top + height / 2)) * 0.15
        
        setPosition({ x, y })
    }

    const handleMouseLeave = () => {
        if (magnetic) {
            setPosition({ x: 0, y: 0 })
        }
    }

    return (
        <motion.div
            style={{ display: "inline-block" }}
            animate={magnetic ? { x: position.x, y: position.y } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Button
                ref={ref}
                className={cn(
                    "relative overflow-hidden",
                    gradient && "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold shadow-md",
                    pulse && "relative",
                    className
                )}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
                {...props}
            >
                {pulse && (
                    <motion.span
                        className="absolute inset-0 rounded-lg bg-primary/30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                )}
                <span className="relative z-10">{children}</span>
            </Button>
        </motion.div>
    )
}
