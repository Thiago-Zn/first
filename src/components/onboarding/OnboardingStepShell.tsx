"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { OnboardingProgress } from "./OnboardingProgress"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils/cn"

interface OnboardingStepShellProps {
    children: React.ReactNode
    title: string
    description?: string
    currentStep: number
    totalSteps: number
    onNext?: () => void
    onBack?: () => void
    onSkip?: () => void
    nextLabel?: string
    backLabel?: string
    isNextDisabled?: boolean
    isLoading?: boolean
    className?: string
}

export function OnboardingStepShell({
    children,
    title,
    description,
    currentStep,
    totalSteps,
    onNext,
    onBack,
    onSkip,
    nextLabel = "Próximo",
    backLabel = "Voltar",
    isNextDisabled = false,
    isLoading = false,
    className,
}: OnboardingStepShellProps) {
    const isLastStep = currentStep === totalSteps

    return (
        <div className={cn("flex min-h-screen flex-col bg-gradient-to-br from-muted/30 via-background to-muted/20", className)}>
            {/* Header */}
            <header className="flex h-20 items-center justify-between px-6 lg:px-12 border-b bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
                    <span className="text-primary">Saldo</span>
                    <span className="text-foreground">Certo</span>
                </div>
                {onSkip && !isLastStep && (
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={onSkip} 
                        className="text-muted-foreground hover:text-foreground"
                    >
                        Pular
                    </Button>
                )}
            </header>

            {/* Main Content */}
            <main className="flex flex-1 w-full items-stretch justify-center p-6 lg:p-12">
                <div className="grid w-full max-w-5xl gap-10 lg:gap-14 lg:grid-cols-[360px,minmax(0,1fr)] items-start">
                    {/* Left Column - Progress + Title */}
                    <div className="space-y-8">
                        <OnboardingProgress currentStep={currentStep} totalSteps={totalSteps} />

                        <div className="space-y-4 text-left">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight text-balance">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance [word-break:normal]">
                                    {description}
                                </p>
                            )}
                        </div>

                        <div className="hidden lg:block text-sm text-muted-foreground">
                            Passo {currentStep} de {totalSteps}
                        </div>
                    </div>

                    {/* Right Column - Content Card */}
                    <div className="rounded-3xl border border-border/60 bg-card/80 shadow-lg shadow-black/5 backdrop-blur-sm p-6 lg:p-8">
                        {children}
                    </div>
                </div>
            </main>

            {/* Footer Actions */}
            <footer className="border-t bg-background/80 backdrop-blur-sm p-6 lg:p-8">
                <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6">
                    {/* Botão Voltar */}
                    <div className="flex-1">
                        {onBack && (
                            <Button
                                variant="ghost"
                                onClick={onBack}
                                disabled={isLoading}
                                className="group"
                                size="lg"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                {backLabel}
                            </Button>
                        )}
                    </div>

                    {/* Botão Próximo/Concluir */}
                    <Button
                        onClick={onNext}
                        disabled={isNextDisabled || isLoading}
                        className="min-w-[200px] rounded-full h-12 text-base font-semibold shadow-lg shadow-primary/20"
                        size="lg"
                    >
                        {isLoading ? (
                            "Carregando..."
                        ) : isLastStep ? (
                            <>
                                Concluir
                                <Check className="ml-2 h-4 w-4" />
                            </>
                        ) : (
                            <>
                                {nextLabel}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                    
                    {/* Spacer */}
                    <div className="flex-1 text-right text-sm text-muted-foreground">
                        {onSkip && !isLastStep && (
                            <Button variant="link" className="text-muted-foreground" onClick={onSkip}>
                                Pular etapa
                            </Button>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    )
}

