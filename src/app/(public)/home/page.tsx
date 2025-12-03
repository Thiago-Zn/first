"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, PieChart, Target, Sparkles, Shield, Zap, CheckCircle2, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { LandingTextBlock } from "@/components/landing/TextBlock"
import { AnimatedButton } from "@/components/landing/AnimatedButton"
import { AnimatedCard } from "@/components/landing/AnimatedCard"
import { ScrollReveal } from "@/components/landing/ScrollReveal"
import { TextReveal } from "@/components/landing/TextReveal"
import { AnimatedBackground } from "@/components/landing/AnimatedBackground"
import { StatsCounter } from "@/components/landing/StatsCounter"
import { FeatureGrid, FeatureGridItem } from "@/components/landing/FeatureGrid"
import { SocialProof } from "@/components/landing/SocialProof"
import { Testimonials } from "@/components/landing/Testimonials"
import { FAQ } from "@/components/landing/FAQ"
import { HowItWorks } from "@/components/landing/HowItWorks"

export default function HomePage() {
    const ctaParagraphRef = useRef<HTMLParagraphElement>(null);
    const testimonialsSectionRef = useRef<HTMLElement>(null);
    
    useEffect(() => {
        // HYPOTHESIS A: Verificar se o container pai está limitando a largura
        const checkCTA = () => {
            if (!ctaParagraphRef.current) return;
            const p = ctaParagraphRef.current;
            const rect = p.getBoundingClientRect();
            const computed = window.getComputedStyle(p);
            const parent = p.parentElement;
            const parentComputed = parent ? window.getComputedStyle(parent) : null;
            fetch('http://127.0.0.1:7242/ingest/8ef3c334-644f-4dbc-939c-cfda137f9b4f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'home/page.tsx:CTA-useEffect',message:'CTA paragraph dimensions after mount',data:{paragraphWidth:rect.width,computedWidth:computed.width,maxWidth:computed.maxWidth,minWidth:computed.minWidth,whiteSpace:computed.whiteSpace,wordBreak:computed.wordBreak,parentWidth:parent?.getBoundingClientRect().width,parentComputedWidth:parentComputed?.width,parentDisplay:parentComputed?.display,parentFlexDirection:parentComputed?.flexDirection},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        };
        
        // HYPOTHESIS B: Verificar se há grid/flex limitando a largura
        const checkTestimonials = () => {
            if (!testimonialsSectionRef.current) return;
            const section = testimonialsSectionRef.current;
            const paragraphs = section.querySelectorAll('p');
            paragraphs.forEach((p, idx) => {
                const rect = p.getBoundingClientRect();
                const computed = window.getComputedStyle(p);
                fetch('http://127.0.0.1:7242/ingest/8ef3c334-644f-4dbc-939c-cfda137f9b4f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:`Testimonials.tsx:p-${idx}`,message:'Testimonials paragraph dimensions',data:{index:idx,width:rect.width,computedWidth:computed.width,maxWidth:computed.maxWidth,whiteSpace:computed.whiteSpace,textContentLength:p.textContent?.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
            });
        };
        
        setTimeout(() => {
            checkCTA();
            checkTestimonials();
        }, 500);
    }, []);
    
    return (
        <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/20">
            <AnimatedBackground showParticles={true} gradient="subtle" />
            
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
                <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold group">
                        <span className="text-primary transition-transform group-hover:scale-110 duration-300 inline-block">Saldo</span>
                        <span className="text-foreground">Certo</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/about" className="hidden sm:block">
                            <AnimatedButton variant="ghost" size="sm">
                                Como Funciona
                            </AnimatedButton>
                        </Link>
                        <Link href="/login">
                            <AnimatedButton variant="outline" size="sm">
                                Entrar
                            </AnimatedButton>
                        </Link>
                        <Link href="/signup">
                            <AnimatedButton size="sm" className="hidden sm:flex" pulse={true} gradient={true}>
                                Começar Grátis
                            </AnimatedButton>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container mx-auto max-w-6xl px-6 pt-32 pb-20 relative">
                {/* FIX: Grid com largura mínima adequada para as colunas */}
                <div 
                    className="grid gap-12 lg:grid-cols-[minmax(300px,1fr)_minmax(300px,1fr)] lg:gap-20 items-center"
                    ref={(el: HTMLDivElement | null) => {
                        if (!el) return;
                        const rect = el.getBoundingClientRect();
                        const computed = window.getComputedStyle(el);
                        fetch('http://127.0.0.1:7242/ingest/8ef3c334-644f-4dbc-939c-cfda137f9b4f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'home/page.tsx:Hero-grid',message:'Hero section grid layout',data:{width:rect.width,computedWidth:computed.width,gridTemplateColumns:computed.gridTemplateColumns,display:computed.display,childrenCount:el.children.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
                    }}
                >
                    {/* Left Column - Text */}
                    <ScrollReveal animation="slide-right" duration={0.8} className="w-full min-w-0">
                        <div className="flex flex-col gap-6 items-start text-left w-full">
                            <div className="inline-flex items-center gap-2 rounded-full border bg-background/50 backdrop-blur-sm px-4 py-2 text-sm text-foreground/70 shadow-sm animate-fade-in-up">
                                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                                <span>Controle financeiro inteligente</span>
                            </div>

                            {/* FIX: Garantir largura adequada para o título */}
                            <div className="w-full max-w-[720px] text-balance min-w-0">
                                <h1 className="text-5xl font-bold leading-tight text-foreground lg:text-6xl whitespace-normal break-words">
                                    Transforme suas <br />
                                    <TextReveal type="gradient" className="font-extrabold" delay={0.5}>
                                        finanças
                                    </TextReveal>{" "}
                                    em crescimento
                                </h1>
                            </div>

                            {/* FIX: Garantir largura adequada para o parágrafo */}
                            <p className="w-full max-w-[600px] text-lg leading-relaxed text-foreground/75 text-balance whitespace-normal break-words min-w-[280px]">
                                Visualize, organize e alcance seus objetivos financeiros com inteligência e simplicidade. Tudo em um só lugar, sem planilhas complicadas.
                            </p>

                            <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto pt-4">
                                <Link href="/signup" className="w-full sm:w-auto">
                                    <AnimatedButton size="lg" className="w-full sm:w-auto text-base h-14 px-8" gradient={true} magnetic={true}>
                                        Começar Grátis
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </AnimatedButton>
                                </Link>
                                <Link href="/about" className="w-full sm:w-auto">
                                    <AnimatedButton size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8" magnetic={true}>
                                        Ver Demonstração
                                    </AnimatedButton>
                                </Link>
                            </div>

                            <div className="flex items-center gap-8 pt-4 text-sm text-foreground/70">
                                <div className="flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-emerald-500" />
                                    <span>100% Seguro</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-yellow-500" />
                                    <span>Instalação Grátis</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column - Visual */}
                    <ScrollReveal animation="scale" delay={0.2} duration={0.8}>
                        <AnimatedCard 
                            tilt={true} 
                            glow={true} 
                            border={true}
                            className="relative rounded-3xl bg-card/80 backdrop-blur-xl p-2 shadow-2xl ring-1 ring-border/50"
                        >
                            <div className="rounded-2xl bg-background overflow-hidden border border-border/50 shadow-inner">
                                {/* Mock Dashboard Header */}
                                <div className="flex items-center justify-between border-b bg-muted/30 p-4">
                                    <div className="flex gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-400" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                        <div className="h-3 w-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="h-2 w-20 rounded-full bg-muted-foreground/20" />
                                </div>
                                
                                {/* Mock Content */}
                                <div className="p-6 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-muted-foreground">Saldo Total</div>
                                            <div className="text-3xl font-bold flex items-center gap-2">
                                                <StatsCounter value={12847.32} prefix="R$ " decimals={2} duration={2.5} />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                                            <TrendingUp className="h-4 w-4" />
                                            +12.5%
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-xl border bg-card p-4 space-y-2">
                                            <div className="text-xs text-muted-foreground">Receitas</div>
                                            <div className="text-xl font-bold text-emerald-600">R$ 8.500</div>
                                            <div className="h-1.5 w-full rounded-full bg-emerald-100 overflow-hidden">
                                                <div className="h-full w-[80%] bg-emerald-500 rounded-full" />
                                            </div>
                                        </div>
                                        <div className="rounded-xl border bg-card p-4 space-y-2">
                                            <div className="text-xs text-muted-foreground">Despesas</div>
                                            <div className="text-xl font-bold text-red-600">R$ 3.420</div>
                                            <div className="h-1.5 w-full rounded-full bg-red-100 overflow-hidden">
                                                <div className="h-full w-[40%] bg-red-500 rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chart Mock */}
                                    <div className="h-32 flex items-end justify-between gap-2 px-2">
                                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                            <div 
                                                key={i} 
                                                className="w-full bg-primary/20 rounded-t-sm relative group"
                                                style={{ height: `${h}%` }}
                                            >
                                                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-sm" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div 
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-8 top-10 rounded-xl bg-card p-4 shadow-xl border border-border/50 hidden lg:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium text-muted-foreground">Investimentos</div>
                                        <div className="text-sm font-bold">+R$ 1.250,00</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedCard>
                    </ScrollReveal>
                </div>
            </section>

            {/* Social Proof */}
            <SocialProof />

            {/* Benefits Section */}
            <section className="container mx-auto max-w-6xl px-6 py-20">
                <ScrollReveal animation="fade" className="mb-16">
                    <LandingTextBlock
                        align="center"
                        title={
                            <>
                                Tudo que você precisa para <br />
                                <span className="text-primary">prosperar financeiramente</span>
                            </>
                        }
                        description="Ferramentas poderosas e intuitivas projetadas para simplificar sua vida financeira e acelerar seus resultados."
                        titleClassName="text-4xl lg:text-5xl"
                    />
                </ScrollReveal>

                <FeatureGrid>
                    {features.map((feature, index) => (
                        <FeatureGridItem key={index}>
                            <AnimatedCard className="h-full p-8 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm">
                                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                                    <feature.icon className="h-7 w-7 text-white drop-shadow-sm" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
                                <p className="text-foreground/70 leading-relaxed text-sm mb-4">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedCard>
                        </FeatureGridItem>
                    ))}
                </FeatureGrid>
            </section>

            {/* How It Works */}
            <HowItWorks />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* CTA Section */}
            <section className="container mx-auto max-w-4xl px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-12 md:p-20 text-center shadow-2xl">
                        {/* Background Effects */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                            <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[150%] bg-primary/20 rounded-full blur-[100px]" />
                            <div className="absolute top-[20%] -right-[20%] w-[60%] h-[120%] bg-blue-500/20 rounded-full blur-[100px]" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center w-full">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground w-full">
                                Pronto para dominar <br /> suas finanças?
                            </h2>
                            {/* FIX: Garantir largura adequada para o parágrafo - remover w-full que pode estar causando conflito */}
                            <p 
                                ref={ctaParagraphRef}
                                className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed whitespace-normal"
                                style={{ minWidth: '280px', width: '100%', maxWidth: '42rem' }}
                            >
                                Junte-se a mais de 50.000 pessoas que já transformaram sua relação com o dinheiro. Comece gratuitamente hoje mesmo.
                            </p>
                            
                            <Link href="/signup">
                                <AnimatedButton 
                                    size="lg" 
                                    className="h-16 px-12 text-lg" 
                                    pulse={true}
                                    magnetic={true}
                                    gradient={true}
                                >
                                    Criar Conta Grátis
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </AnimatedButton>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-muted/30 pt-20 pb-10">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-6">
                                <span className="text-primary">Saldo</span>
                                <span className="text-foreground">Certo</span>
                            </Link>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Sua plataforma completa para gestão financeira pessoal. Simples, inteligente e seguro.
                            </p>
                            <div className="flex gap-4">
                                <SocialIcon icon={Twitter} href="#" />
                                <SocialIcon icon={Instagram} href="#" />
                                <SocialIcon icon={Linkedin} href="#" />
                                <SocialIcon icon={Github} href="#" />
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Produto</h4>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-primary transition-colors">Funcionalidades</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Planos e Preços</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Integrações</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Atualizações</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Recursos</h4>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Comunidade</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Calculadoras</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Legal</h4>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                <li><Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Privacidade</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Cookies</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Licenças</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p>© 2024 Saldo Certo. Todos os direitos reservados.</p>
                        <div className="flex gap-8">
                            <span>Feito com ❤️ no Brasil</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function SocialIcon({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <a 
            href={href} 
            className="w-10 h-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
        >
            <Icon className="w-5 h-5" />
        </a>
    )
}

const features = [
    {
        icon: PieChart,
        title: "Visão 360°",
        description: "Painel completo com todas suas contas, cartões e investimentos centralizados.",
        gradient: "from-blue-500 to-cyan-400",
        benefits: ["Sincronização automática", "Múltiplas contas", "Relatórios mensais"]
    },
    {
        icon: Target,
        title: "Metas Inteligentes",
        description: "Defina objetivos e acompanhe seu progresso com nosso assistente virtual.",
        gradient: "from-purple-500 to-pink-400",
        benefits: ["Alertas de progresso", "Dicas personalizadas", "Previsão de conclusão"]
    },
    {
        icon: TrendingUp,
        title: "Análises Profundas",
        description: "Entenda seus hábitos de consumo com gráficos interativos e detalhados.",
        gradient: "from-emerald-500 to-teal-400",
        benefits: ["Categorização automática", "Comparativos mensais", "Exportação de dados"]
    }
]
