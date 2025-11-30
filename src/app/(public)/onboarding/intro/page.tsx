"use client"

import { OnboardingStepShell } from "@/components/onboarding/OnboardingStepShell"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Wallet, TrendingUp, ShieldCheck } from "lucide-react"

export default function OnboardingIntroPage() {
    const router = useRouter()

    return (
        <OnboardingStepShell
            title="Bem-vindo ao Saldo Certo"
            description="Sua jornada para a liberdade financeira começa agora. Vamos configurar seu perfil em poucos passos."
            currentStep={1}
            totalSteps={3}
            onNext={() => router.push("/onboarding/goal")}
            nextLabel="Começar Jornada"
        >
            <div className="w-full max-w-lg mx-auto space-y-8 py-4">
                {/* Hero Icon */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-transparent ring-1 ring-primary/20 shadow-xl">
                        <span className="text-5xl">🚀</span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-primary/20 blur-xl rounded-full" />
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="flex items-center gap-4 rounded-2xl bg-card border border-border/50 p-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-0.5">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-snug">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </OnboardingStepShell>
    )
}

const features = [
    {
        icon: Wallet,
        title: "Controle Total",
        description: "Gerencie todas as suas contas e cartões em um único lugar."
    },
    {
        icon: TrendingUp,
        title: "Metas Reais",
        description: "Defina objetivos e acompanhe sua evolução mês a mês."
    },
    {
        icon: ShieldCheck,
        title: "Segurança Máxima",
        description: "Seus dados são criptografados e protegidos."
    }
]
