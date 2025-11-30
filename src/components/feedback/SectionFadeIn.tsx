"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionFadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function SectionFadeIn({ children, delay = 0, className }: SectionFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

