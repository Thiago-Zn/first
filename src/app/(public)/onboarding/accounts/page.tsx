"use client"

import { OnboardingStepShell } from "@/components/onboarding/OnboardingStepShell"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function OnboardingAccountsPage() {
    const router = useRouter()

    return (
        <OnboardingStepShell
            title="Conecte suas contas"
            description="Adicione suas contas bancárias ou cartões para centralizar suas finanças."
            currentStep={2}
            totalSteps={4}
            onNext={() => router.push("/onboarding/goals")}
            onBack={() => router.push("/onboarding/intro")}
            onSkip={() => router.push("/dashboard")}
        >
            <div className="flex flex-col gap-4 py-6">
                <div className="rounded-xl border border-dashed p-8 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                        <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-sm font-medium">Nenhuma conta conectada</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Comece adicionando sua conta principal
                    </p>
                    <Button variant="outline" className="mt-4" size="sm">
                        Adicionar conta manual
                    </Button>
                </div>
            </div>
        </OnboardingStepShell>
    )
}

