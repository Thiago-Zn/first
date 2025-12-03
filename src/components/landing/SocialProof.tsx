"use client"

import { ScrollReveal } from "./ScrollReveal"
import { StatsCounter } from "./StatsCounter"
import { AnimatedCard } from "./AnimatedCard"
import { Shield, Users, Trophy, Globe } from "lucide-react"

export function SocialProof() {
    return (
        <section className="container mx-auto max-w-6xl px-6 py-20">
            {/* Stats Grid */}
            <ScrollReveal animation="slide-up">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 mb-16">
                    <StatItem 
                        icon={<Users className="w-6 h-6 text-primary" />}
                        value={50000} 
                        label="Usuários Ativos" 
                        suffix="+" 
                    />
                    <StatItem 
                        icon={<Trophy className="w-6 h-6 text-yellow-500" />}
                        value={98} 
                        label="Satisfação" 
                        suffix="%" 
                    />
                    <StatItem 
                        icon={<Shield className="w-6 h-6 text-emerald-500" />}
                        value={200} 
                        label="Transações" 
                        suffix="M+" 
                        prefix="R$ "
                    />
                    <StatItem 
                        icon={<Globe className="w-6 h-6 text-blue-500" />}
                        value={100} 
                        label="Segurança" 
                        suffix="%" 
                    />
                </div>
            </ScrollReveal>

            {/* Trusted By */}
            <ScrollReveal animation="fade" delay={0.2}>
                <div className="text-center">
                    <p className="text-sm font-semibold text-foreground/60 mb-8 uppercase tracking-wider">
                        CONFIADO POR EMPRESAS INOVADORAS
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                        {/* Placeholders for logos */}
                        {["TechCorp", "FinanceFlow", "InvestSmart", "FutureBank", "EcoSystem"].map((company, i) => (
                            <div key={i} className="text-xl font-bold font-mono text-foreground/70">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}

function StatItem({ icon, value, label, suffix, prefix }: any) {
    return (
        <AnimatedCard 
            className="flex flex-col items-center justify-center p-6 text-center bg-card/50 backdrop-blur-sm"
            tilt={false}
        >
            <div className="mb-3 p-3 rounded-full bg-background border shadow-sm">
                {icon}
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">
                <StatsCounter value={value} suffix={suffix} prefix={prefix} />
            </div>
            <div className="text-sm text-muted-foreground font-medium">
                {label}
            </div>
        </AnimatedCard>
    )
}

