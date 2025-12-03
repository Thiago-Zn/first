"use client"

import { OnboardingStepShell } from "@/components/onboarding/OnboardingStepShell"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"

export default function OnboardingGoalPage() {
    const router = useRouter()
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null)

    const handleNext = () => {
        if (selectedGoal) {
            localStorage.setItem("onboarding_goal", selectedGoal)
            router.push("/onboarding/profile")
        }
    }

    return (
        <OnboardingStepShell
            title="Qual é seu principal objetivo?"
            description="Isso nos ajudará a personalizar sua experiência"
            currentStep={2}
            totalSteps={3}
            onNext={handleNext}
            onBack={() => router.push("/onboarding/intro")}
            isNextDisabled={!selectedGoal}
        >
            <div className="grid gap-4 py-6">
                {goals.map((goal, index) => (
                    <motion.button
                        key={goal.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        onClick={() => setSelectedGoal(goal.id)}
                        className={cn(
                            "group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all",
                            selectedGoal === goal.id
                                ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                                : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                        )}
                    >
                        <div className="flex items-start gap-4">
                            <div className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-xl transition-all flex-shrink-0",
                                selectedGoal === goal.id
                                    ? "bg-primary/20"
                                    : "bg-muted group-hover:bg-primary/10"
                            )}>
                                <span className="text-2xl">{goal.icon}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-1 text-foreground">{goal.title}</h3>
                                <p className="text-sm text-foreground/70 leading-relaxed">
                                    {goal.description}
                                </p>
                            </div>
                            {selectedGoal === goal.id && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                            )}
                        </div>
                    </motion.button>
                ))}
            </div>
        </OnboardingStepShell>
    )
}

const goals = [
    {
        id: "save",
        icon: "💰",
        title: "Economizar mais",
        description: "Criar uma reserva financeira e guardar dinheiro todos os meses"
    },
    {
        id: "organize",
        icon: "📊",
        title: "Organizar minhas finanças",
        description: "Ter controle sobre gastos e receitas de forma clara"
    },
    {
        id: "invest",
        icon: "📈",
        title: "Investir melhor",
        description: "Acompanhar investimentos e fazer meu dinheiro crescer"
    },
    {
        id: "debt",
        icon: "🎯",
        title: "Quitar dívidas",
        description: "Planejar e eliminar dívidas de forma estratégica"
    }
]
