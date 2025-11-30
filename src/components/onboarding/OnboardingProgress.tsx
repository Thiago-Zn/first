"use client"

import * as React from "react"
import { cn } from "@/lib/utils/cn"

interface OnboardingProgressProps {
    currentStep: number
    totalSteps: number
    className?: string
}

export function OnboardingProgress({
    currentStep,
    totalSteps,
    className,
}: OnboardingProgressProps) {
    return (
        <div className={cn("flex w-full gap-2", className)}>
            {Array.from({ length: totalSteps }).map((_, index) => {
                const step = index + 1
                const isActive = step === currentStep
                const isCompleted = step < currentStep

                return (
                    <div
                        key={step}
                        className={cn(
                            "h-2 flex-1 rounded-full transition-all duration-300",
                            isActive ? "bg-primary" : isCompleted ? "bg-primary/40" : "bg-muted"
                        )}
                        role="progressbar"
                        aria-valuenow={isActive ? 100 : isCompleted ? 100 : 0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                )
            })}
        </div>
    )
}

