"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"

interface FeatureGridProps {
    children: ReactNode
    className?: string
    columns?: 2 | 3 | 4
}

export function FeatureGrid({
    children,
    className,
    columns = 3
}: FeatureGridProps) {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div
            className={cn(
                "grid gap-6 md:gap-8",
                columns === 2 && "md:grid-cols-2",
                columns === 3 && "md:grid-cols-3",
                columns === 4 && "md:grid-cols-2 lg:grid-cols-4",
                className
            )}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {children}
        </motion.div>
    )
}

export function FeatureGridItem({ children, className }: { children: ReactNode; className?: string }) {
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    return (
        <motion.div variants={item} className={cn("h-full", className)}>
            {children}
        </motion.div>
    )
}

