"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, PieChart, Target, Sparkles, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { LandingTextBlock } from "@/components/landing/TextBlock"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
                <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                        <span className="text-primary">Saldo</span>
                        <span className="text-foreground">Certo</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/about">
                            <Button variant="ghost" size="sm">
                                Como Funciona
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="sm">
                                Entrar
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button size="sm" className="hidden sm:flex">
                                Começar Grátis
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto max-w-6xl px-6 pt-32 pb-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <LandingTextBlock
                            align="left"
                            title={
                                <>
                                    Transforme suas{" "}
                                    <span className="bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground bg-clip-text text-transparent">
                                        finanças
                                    </span>{" "}
                                    em crescimento
                                </>
                            }
                            description="Visualize, organize e alcance seus objetivos financeiros com inteligência e simplicidade. Tudo em um só lugar."
                            titleClassName="text-5xl lg:text-6xl"
                            eyebrow={
                                <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm text-foreground/70">
                                    <Sparkles className="h-4 w-4 text-primary" />
                                    <span>Controle financeiro inteligente</span>
                                </div>
                            }
                        >
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/signup">
                                    <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                                        Começar Grátis
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/about">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8">
                                        Ver Demonstração
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex items-center gap-8 pt-4 text-sm text-foreground/70">
                                <div className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-success" />
                                    <span>100% Seguro</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-warning" />
                                    <span>Grátis para sempre</span>
                                </div>
                            </div>
                        </LandingTextBlock>
                    </motion.div>

                    {/* Right Column - Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl border bg-card p-8 shadow-2xl">
                            {/* Mock Dashboard Preview */}
                            <div className="space-y-6">
                                <div className="rounded-2xl bg-background border-2 border-border/50 p-6 shadow-lg">
                                    <div className="mb-4 text-sm text-foreground font-semibold">Saldo Total</div>
                                    <div className="text-4xl font-bold text-foreground">R$ 12.847,32</div>
                                    <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                                        <TrendingUp className="h-4 w-4" />
                                        <span>+12,5% este mês</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-xl bg-background border-2 border-border/50 p-4 shadow-sm">
                                        <div className="mb-2 text-xs text-foreground font-semibold">Receitas</div>
                                        <div className="text-2xl font-bold text-emerald-600">R$ 8.500</div>
                                    </div>
                                    <div className="rounded-xl bg-background border-2 border-border/50 p-4 shadow-sm">
                                        <div className="mb-2 text-xs text-foreground font-semibold">Despesas</div>
                                        <div className="text-2xl font-bold text-red-600">R$ 3.420</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
                            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto max-w-6xl px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <LandingTextBlock
                        align="center"
                        title={
                            <>
                                Tudo que você precisa para{" "}
                                <span className="text-primary-foreground">prosperar</span>
                            </>
                        }
                        description="Ferramentas poderosas e intuitivas para você ter controle total das suas finanças"
                        titleClassName="text-4xl"
                    />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </div>
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
                        title="Pronto para começar?"
                        description="Junte-se a milhares de pessoas que já transformaram suas finanças"
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

                    {/* Decorative blobs */}
                    <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
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

const features = [
    {
        icon: PieChart,
        title: "Visão Completa",
        description: "Acompanhe todas as suas contas, cartões e investimentos em um único painel inteligente.",
        color: "text-blue-500"
    },
    {
        icon: Target,
        title: "Metas Inteligentes",
        description: "Defina objetivos financeiros e acompanhe seu progresso com insights personalizados.",
        color: "text-purple-500"
    },
    {
        icon: TrendingUp,
        title: "Análises Detalhadas",
        description: "Gráficos e relatórios que ajudam você a entender para onde seu dinheiro está indo.",
        color: "text-green-500"
    }
]

function FeatureCard({ icon: Icon, title, description, color }: typeof features[0]) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg">
            <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-muted ${color}`}>
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
            <p className="text-foreground/70 leading-relaxed">{description}</p>
            
            {/* Hover effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    )
}

