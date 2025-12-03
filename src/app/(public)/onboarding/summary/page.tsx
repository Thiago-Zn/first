"use client"

import { OnboardingStepShell } from "@/components/onboarding/OnboardingStepShell"
import { useRouter } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

export default function OnboardingSummaryPage() {
    const router = useRouter()

    return (
        <OnboardingStepShell
            title="Tudo pronto!"
            description="Agora você já pode começar a usar o Saldo Certo."
            currentStep={4}
            totalSteps={4}
            onNext={() => router.push("/dashboard")}
            onBack={() => router.push("/onboarding/goals")}
            nextLabel="Ir para o Dashboard"
        >
            <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Configuração concluída</h3>
                    <p className="text-sm text-foreground/70">
                        Você já configurou o básico. Explore o dashboard para ver mais detalhes.
                    </p>
                </div>
            </div>
        </OnboardingStepShell>
    )
}

