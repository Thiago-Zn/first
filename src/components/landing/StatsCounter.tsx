"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils/cn"

interface StatsCounterProps {
    value: number
    prefix?: string
    suffix?: string
    duration?: number
    delay?: number
    className?: string
    formatter?: (value: number) => string
    decimals?: number
}

export function StatsCounter({
    value,
    prefix = "",
    suffix = "",
    duration = 2,
    delay = 0,
    className,
    formatter,
    decimals = 0
}: StatsCounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    
    const springValue = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    })

    const displayValue = useTransform(springValue, (current) => {
        if (formatter) {
            return formatter(current)
        }
        return current.toFixed(decimals)
    })

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                springValue.set(value)
            }, delay * 1000)
            return () => clearTimeout(timeout)
        }
    }, [isInView, value, delay, springValue])

    return (
        <span 
            className={cn("inline-flex items-baseline tabular-nums", className)}
            ref={ref}
        >
            {prefix}
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    )
}

