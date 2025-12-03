"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { cn } from "@/lib/utils/cn"

type AnimationType = 
    | "fade" 
    | "slide-up" 
    | "slide-down" 
    | "slide-left" 
    | "slide-right" 
    | "scale"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    animation?: AnimationType
    duration?: number
    delay?: number
    offset?: number
    threshold?: number
    once?: boolean
}

const variants = {
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    "slide-up": {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    },
    "slide-down": {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 }
    },
    "slide-left": {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 }
    },
    "slide-right": {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    },
    scale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    }
}

export function ScrollReveal({
    children,
    className,
    animation = "slide-up",
    duration = 0.6,
    delay = 0,
    offset = 0,
    threshold = 0.1,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once,
        amount: threshold,
        margin: `${offset}px`
    })

    return (
        <motion.div
            ref={(el) => {
                if (el) {
                    ref.current = el;
                    const rect = el.getBoundingClientRect();
                    const computed = window.getComputedStyle(el);
                    const parent = el.parentElement;
                    fetch('http://127.0.0.1:7242/ingest/8ef3c334-644f-4dbc-939c-cfda137f9b4f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ScrollReveal.tsx:motion-div',message:'ScrollReveal container dimensions',data:{width:rect.width,computedWidth:computed.width,maxWidth:computed.maxWidth,minWidth:computed.minWidth,display:computed.display,parentDisplay:parent?.style.display,parentWidth:parent?.getBoundingClientRect().width,parentComputedWidth:parent?window.getComputedStyle(parent).width:null},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
                }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[animation]}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={cn("w-full min-w-0", className)}
            style={{ 
                minWidth: 0,
                width: "100%",
                maxWidth: "100%"
            }}
        >
            {children}
        </motion.div>
    )
}
