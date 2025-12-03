"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils/cn"

interface TextRevealProps {
    children: string
    className?: string
    type?: "fade" | "typewriter" | "gradient"
    delay?: number
    duration?: number
    gradientColors?: string[]
}

export function TextReveal({
    children,
    className,
    type = "fade",
    delay = 0,
    duration = 0.5,
    gradientColors = ["from-primary", "via-purple-500", "to-blue-500"]
}: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const words = children.split(" ")

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    }

    const childVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    if (type === "gradient") {
        return (
            <motion.span
                ref={ref}
                initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
                animate={isInView ? { opacity: 1, backgroundPosition: "100% 50%" } : {}}
                transition={{ duration: duration * 2, delay }}
                className={cn(
                    "inline-block bg-gradient-to-r bg-clip-text text-transparent bg-[length:200%_auto] font-bold",
                    gradientColors.join(" "),
                    className
                )}
            >
                {children}
            </motion.span>
        )
    }

    if (type === "typewriter") {
        const letters = Array.from(children)
        
        return (
            <motion.span
                ref={ref}
                className={cn("inline-block font-bold whitespace-normal", className)}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {letters.map((letter, index) => (
                    <motion.span variants={childVariants} key={index} className="inline">
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.span>
        )
    }

    // Default: fade - texto completo sem quebrar palavras
    return (
        <motion.span
            ref={ref}
            className={cn("inline-block font-bold whitespace-normal", className)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: duration, delay }}
        >
            {children}
        </motion.span>
    )
}
