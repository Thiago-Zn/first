"use client"

import { OnboardingStepShell } from "@/components/onboarding/OnboardingStepShell"
import { useRouter } from "next/navigation"
import { Target } from "lucide-react"

export default function OnboardingGoalsPage() {
    const router = useRouter()

    return (
        <OnboardingStepShell
            title="Defina suas metas"
            description="O que você deseja alcançar financeiramente?"
            currentStep={3}
            totalSteps={4}
            onNext={() => router.push("/onboarding/summary")}
            onBack={() => router.push("/onboarding/accounts")}
            onSkip={() => router.push("/dashboard")}
        >
            <div className="grid gap-4 py-6">
                {["Reserva de Emergência", "Comprar um Carro", "Viagem de Férias", "Investimentos"].map((goal) => (
                    <div
                        key={goal}
                        className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/50"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Target className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{goal}</span>
                    </div>
                ))}
            </div>
        </OnboardingStepShell>
    )
}

