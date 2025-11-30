"use client"

import { AuthFormLayout } from "@/components/auth/AuthFormLayout"
import { SignupForm } from "@/components/auth/SignupForm"
import Link from "next/link"
import { CheckCircle2, Shield, TrendingUp, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function SignupPage() {
    return (
        <>
            <AuthFormLayout
                variant="signup"
                title="Comece sua jornada financeira"
                description="Crie sua conta gratuita e tenha controle total das suas finanças em minutos"
                footer={
                    <div className="space-y-4">
                        <p>
                            Já tem uma conta?{" "}
                            <Link href="/login" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                                Fazer login
                            </Link>
                        </p>
                        <div className="flex items-center gap-4 justify-center text-xs">
                            <Link href="/home" className="hover:text-foreground transition-colors">
                                Início
                            </Link>
                            <span>•</span>
                            <Link href="/about" className="hover:text-foreground transition-colors">
                                Como funciona
                            </Link>
                        </div>
                    </div>
                }
            >
                {/* Benefícios destacados */}
                <div className="grid grid-cols-1 gap-3 pb-2">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.text}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 rounded-xl bg-white border border-border/40 p-4 shadow-sm hover:shadow-md transition-all hover:border-primary/20"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 ring-1 ring-primary/20">
                                <benefit.icon className="h-5 w-5 text-primary font-bold" />
                            </div>
                            <span className="text-sm font-medium text-foreground/90">{benefit.text}</span>
                        </motion.div>
                    ))}
                </div>

                <SignupForm />
            </AuthFormLayout>
        </>
    )
}

const benefits = [
    { icon: Shield, text: "Criptografia de nível bancário" },
    { icon: TrendingUp, text: "Análises e insights personalizados" },
    { icon: Sparkles, text: "Sem taxas, sem compromissos" }
]
