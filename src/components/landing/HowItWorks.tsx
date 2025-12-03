"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { UserPlus, Wallet, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils/cn"

const steps = [
    {
        icon: UserPlus,
        title: "Crie sua conta",
        description: "Cadastro rápido e gratuito em menos de 2 minutos. Sem cartão de crédito.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: Wallet,
        title: "Conecte ou registre",
        description: "Adicione suas contas bancárias automaticamente ou registre manualmente.",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        icon: TrendingUp,
        title: "Veja seu dinheiro crescer",
        description: "Receba insights automáticos e comece a tomar melhores decisões financeiras.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    }
]

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
        >
            <div className="h-full p-8 flex flex-col items-center text-center bg-card border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-background border shadow-sm flex items-center justify-center font-bold text-lg text-foreground">
                    {index + 1}
                </div>

                <div className={cn("w-16 h-16 rounded-2xl", step.bg, step.color, "flex items-center justify-center mb-6")}>
                    <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                </p>
            </div>
        </motion.div>
    )
}

export function HowItWorks() {
    return (
        <section className="container mx-auto max-w-6xl px-6 py-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                >
                    Como Funciona
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-muted-foreground text-lg"
                >
                    Três passos simples para o controle total
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <StepCard key={index} step={step} index={index} />
                ))}
            </div>
        </section>
    )
}
