"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"
import { motion } from "framer-motion"
import { LandingTextBlock } from "@/components/landing/TextBlock"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
                <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <Link href="/home" className="flex items-center gap-2 text-xl font-bold">
                        <span className="text-primary">Saldo</span>
                        <span className="text-foreground">Certo</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/home">
                            <Button variant="ghost" size="sm">
                                Início
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="sm">
                                Entrar
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button size="sm">
                                Começar Grátis
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto max-w-4xl px-6 pt-32 pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <LandingTextBlock
                        align="center"
                        title={
                            <>
                                Como o <span className="text-primary">Saldo Certo</span> funciona
                            </>
                        }
                        description="Em 3 passos simples, você terá controle total das suas finanças"
                        titleClassName="text-5xl"
                    />
                </motion.div>
            </section>

            {/* Steps Section */}
            <section className="container mx-auto max-w-5xl px-6 py-16">
                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <StepCard {...step} index={index} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto max-w-5xl px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <LandingTextBlock
                        align="center"
                        title="Por que escolher o Saldo Certo?"
                        titleClassName="text-4xl"
                        spacing="compact"
                    />
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-start gap-4 rounded-xl border bg-card p-6"
                        >
                            <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                            <p className="text-lg leading-relaxed text-foreground/75">{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Video/Demo Section */}
            <section className="container mx-auto max-w-4xl px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 to-accent/10 aspect-video flex items-center justify-center group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-muted/50 backdrop-blur-sm transition-all group-hover:bg-muted/40" />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 backdrop-blur transition-transform group-hover:scale-110">
                            <Play className="h-10 w-10 text-primary fill-primary ml-1" />
                        </div>
                        <p className="text-lg font-semibold text-foreground">Assista a demonstração (2 min)</p>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto max-w-4xl px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border bg-card p-12 text-center shadow-xl"
                >
                    <LandingTextBlock
                        align="center"
                        title="Comece sua jornada financeira hoje"
                        description="Crie sua conta gratuita e descubra como é fácil ter controle total"
                        titleClassName="text-4xl"
                    >
                        <div className="flex justify-center">
                            <Link href="/signup">
                                <Button size="lg" className="h-14 px-10 text-lg">
                                    Criar Conta Grátis
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </LandingTextBlock>

                    <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-muted/30 py-12">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <div className="flex items-center gap-2 text-lg font-bold">
                            <span className="text-primary">Saldo</span>
                            <span className="text-foreground">Certo</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            © 2024 Saldo Certo. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const steps = [
    {
        step: "01",
        title: "Crie sua conta",
        description: "Em menos de 2 minutos, você terá acesso completo à plataforma. Sem cartão de crédito, sem complicação.",
        visual: "bg-gradient-to-br from-blue-500/10 to-blue-600/10"
    },
    {
        step: "02",
        title: "Conecte suas finanças",
        description: "Adicione suas contas bancárias, cartões e investimentos. Tudo sincronizado automaticamente em um só lugar.",
        visual: "bg-gradient-to-br from-purple-500/10 to-purple-600/10"
    },
    {
        step: "03",
        title: "Tome decisões inteligentes",
        description: "Visualize gráficos, defina metas e receba insights personalizados para alcançar seus objetivos financeiros.",
        visual: "bg-gradient-to-br from-green-500/10 to-green-600/10"
    }
]

const benefits = [
    "Interface intuitiva e moderna, fácil de usar desde o primeiro dia",
    "Segurança de nível bancário para proteger seus dados",
    "Sincronização automática com suas contas bancárias",
    "Relatórios detalhados e insights personalizados",
    "Acesso completo em qualquer dispositivo, web ou mobile",
    "Suporte dedicado sempre que você precisar"
]

function StepCard({ step, title, description, visual, index }: typeof steps[0] & { index: number }) {
    const isEven = index % 2 === 0

    return (
        <div className={`grid gap-12 md:grid-cols-2 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
            {/* Visual */}
            <div className={`${!isEven ? 'md:order-2' : ''}`}>
                <div className={`relative aspect-square rounded-3xl ${visual} border shadow-lg overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-[120px] font-bold text-foreground/5">
                            {step}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className={`space-y-4 ${!isEven ? 'md:order-1' : ''}`}>
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                    Passo {step}
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-foreground">{title}</h3>
                <p className="text-lg text-foreground/75 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

