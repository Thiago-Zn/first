"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils/cn"

interface AnimatedBackgroundProps {
    className?: string
    showParticles?: boolean
    gradient?: "default" | "subtle" | "vibrant"
}

export function AnimatedBackground({
    className,
    showParticles = false,
    gradient = "default"
}: AnimatedBackgroundProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className={cn("absolute inset-0 -z-20 overflow-hidden", className)}>
            {/* Gradient Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className={cn(
                    "absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full blur-[100px] opacity-20 mix-blend-multiply",
                    gradient === "default" && "bg-primary",
                    gradient === "subtle" && "bg-primary/50",
                    gradient === "vibrant" && "bg-purple-500"
                )}
            />
            
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -60, 0],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2
                }}
                className={cn(
                    "absolute top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full blur-[100px] opacity-20 mix-blend-multiply",
                    gradient === "default" && "bg-blue-400",
                    gradient === "subtle" && "bg-blue-300/50",
                    gradient === "vibrant" && "bg-blue-600"
                )}
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 45, 0],
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 5
                }}
                className={cn(
                    "absolute -bottom-[20%] left-[20%] h-[700px] w-[700px] rounded-full blur-[100px] opacity-20 mix-blend-multiply",
                    gradient === "default" && "bg-green-400",
                    gradient === "subtle" && "bg-green-300/50",
                    gradient === "vibrant" && "bg-pink-500"
                )}
            />

            {/* Grid Pattern Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* Particles (Optional) */}
            {showParticles && (
                <div className="absolute inset-0">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-foreground/10"
                            initial={{
                                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                                scale: Math.random() * 0.5 + 0.5,
                                opacity: Math.random() * 0.5 + 0.1
                            }}
                            animate={{
                                y: [null, Math.random() * -100],
                                x: [null, (Math.random() - 0.5) * 50],
                                opacity: [null, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                width: Math.random() * 4 + 1 + "px",
                                height: Math.random() * 4 + 1 + "px",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

