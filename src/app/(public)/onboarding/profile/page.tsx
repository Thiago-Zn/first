"use client"

import { OnboardingStepShell } from "@/components/onboarding/OnboardingStepShell"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"

export default function OnboardingProfilePage() {
    const router = useRouter()
    const { updateUser } = useAuth()
    const [income, setIncome] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Simple currency mask
        let value = e.target.value.replace(/\D/g, "")
        value = (Number(value) / 100).toFixed(2) + ""
        value = value.replace(".", ",")
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        setIncome(value === "0,00" ? "" : `R$ ${value}`)
    }

    const handleComplete = async () => {
        setIsLoading(true)
        try {
            // Recuperar meta salva no localStorage (se houver)
            const goal = localStorage.getItem("onboarding_goal")
            
            // Salvar dados no perfil do usuário
            await updateUser({
                // Salvar renda e meta (mock fields for now)
                // Em um app real, teríamos campos específicos no User type
            })
            
            // Limpar storage temporário
            localStorage.removeItem("onboarding_goal")
            
            router.push("/dashboard")
        } catch (error) {
            console.error("Erro ao finalizar onboarding:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <OnboardingStepShell
            title="Para finalizar..."
            description="Qual é a sua renda mensal aproximada? Isso ajuda a definir metas realistas."
            currentStep={3}
            totalSteps={3}
            onNext={handleComplete}
            onBack={() => router.push("/onboarding/goal")}
            nextLabel="Finalizar Configuração"
            isNextDisabled={!income || income === "R$ 0,00"}
            isLoading={isLoading}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 py-6"
            >
                {/* Icon Section */}
                <div className="flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 border-4 border-white shadow-xl">
                        <span className="text-4xl">💸</span>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-6 max-w-xs mx-auto">
                    <div className="space-y-3">
                        <Label htmlFor="income" className="text-base font-medium text-center block">
                            Renda Mensal
                        </Label>
                        <div className="relative">
                            <Input
                                id="income"
                                placeholder="R$ 0,00"
                                value={income}
                                onChange={handleIncomeChange}
                                className="h-14 text-xl text-center font-bold tracking-tight shadow-sm border-emerald-100 focus:border-emerald-500 focus:ring-emerald-500"
                                autoFocus
                            />
                        </div>
                        <p className="text-xs text-center text-muted-foreground">
                            Valor líquido aproximado
                        </p>
                    </div>
                </div>

                {/* Info Box */}
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-center">
                    <p className="text-sm text-emerald-800 font-medium">
                        Essa informação é privada e usada apenas para seus cálculos.
                    </p>
                </div>
            </motion.div>
        </OnboardingStepShell>
    )
}
