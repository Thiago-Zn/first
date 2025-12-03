"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedCard } from "./AnimatedCard"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
    {
        id: 1,
        name: "Ana Silva",
        role: "Designer Freelancer",
        content: "O Saldo Certo transformou completamente como organizo minhas finanças. Antes era um caos de planilhas, agora tenho tudo na palma da mão.",
        rating: 5,
        avatar: "AS"
    },
    {
        id: 2,
        name: "Carlos Mendes",
        role: "Empresário",
        content: "A clareza dos gráficos e a facilidade de uso são impressionantes. Consigo ver exatamente para onde meu dinheiro está indo e planejar o futuro.",
        rating: 5,
        avatar: "CM"
    },
    {
        id: 3,
        name: "Juliana Costa",
        role: "Estudante",
        content: "Perfeito para quem está começando a controlar gastos. A interface é linda e super intuitiva. Recomendo para todos os meus amigos!",
        rating: 5,
        avatar: "JC"
    }
]

export function Testimonials() {
    const [current, setCurrent] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!autoplay) return
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [autoplay])
    
    useEffect(() => {
        // HYPOTHESIS C: Verificar dimensões dos parágrafos após render
        const checkDimensions = () => {
            if (!sectionRef.current) return;
            const section = sectionRef.current;
            const paragraphs = section.querySelectorAll('p');
            paragraphs.forEach((p, idx) => {
                const rect = p.getBoundingClientRect();
                const computed = window.getComputedStyle(p);
                const parent = p.parentElement;
                const parentComputed = parent ? window.getComputedStyle(parent) : null;
                fetch('http://127.0.0.1:7242/ingest/8ef3c334-644f-4dbc-939c-cfda137f9b4f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:`Testimonials.tsx:useEffect-p-${idx}`,message:'Testimonials paragraph after render',data:{index:idx,width:rect.width,computedWidth:computed.width,maxWidth:computed.maxWidth,whiteSpace:computed.whiteSpace,wordBreak:computed.wordBreak,parentWidth:parent?.getBoundingClientRect().width,parentDisplay:parentComputed?.display,parentFlexDirection:parentComputed?.flexDirection},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
            });
        };
        setTimeout(checkDimensions, 500);
    }, [current])

    const next = () => {
        setAutoplay(false)
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setAutoplay(false)
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section ref={sectionRef} className="container mx-auto max-w-6xl px-6 py-20 overflow-hidden">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                >
                    O que dizem nossos usuários
                </motion.h2>
                {/* FIX: Garantir largura adequada para o parágrafo - usar style inline para garantir largura mínima */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-foreground/70 text-lg max-w-2xl mx-auto whitespace-normal"
                    style={{ minWidth: '280px', width: '100%', maxWidth: '42rem' }}
                    ref={(el: HTMLParagraphElement | null) => {
                        if (!el) return;
                        const rect = el.getBoundingClientRect();
                        const computed = window.getComputedStyle(el);
                        fetch('http://127.0.0.1:7242/ingest/8ef3c334-644f-4dbc-939c-cfda137f9b4f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Testimonials.tsx:intro-paragraph',message:'Testimonials intro paragraph dimensions',data:{width:rect.width,computedWidth:computed.width,maxWidth:computed.maxWidth,whiteSpace:computed.whiteSpace,display:computed.display,parentWidth:el.parentElement?.getBoundingClientRect().width},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
                    }}
                >
                    Junte-se a milhares de pessoas que já transformaram sua vida financeira
                </motion.p>
            </div>

            <div 
                className="relative max-w-4xl mx-auto"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
            >
                <div className="flex justify-center mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <AnimatedCard className="p-8 md:p-12 relative bg-card/50 backdrop-blur-sm">
                                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10 rotate-180" />
                                
                                <div className="flex flex-col items-center text-center relative z-10">
                                    <div className="flex gap-1 mb-6">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star 
                                                key={i} 
                                                className={`w-5 h-5 ${i < testimonials[current].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                                            />
                                        ))}
                                    </div>

                                    {/* FIX: Garantir largura adequada para o texto do depoimento */}
                                    <p 
                                        className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground/90 w-full max-w-3xl px-4 whitespace-normal break-words"
                                        ref={(el: HTMLParagraphElement | null) => {
                                            if (!el) return;
                                            const rect = el.getBoundingClientRect();
                                            const computed = window.getComputedStyle(el);
                                            fetch('http://127.0.0.1:7242/ingest/8ef3c334-644f-4dbc-939c-cfda137f9b4f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Testimonials.tsx:testimonial-content',message:'Testimonial content paragraph dimensions',data:{width:rect.width,computedWidth:computed.width,maxWidth:computed.maxWidth,whiteSpace:computed.whiteSpace,wordBreak:computed.wordBreak,parentWidth:el.parentElement?.getBoundingClientRect().width,grandParentWidth:el.parentElement?.parentElement?.getBoundingClientRect().width},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
                                        }}
                                    >
                                        "{testimonials[current].content}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                                            {testimonials[current].avatar}
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-foreground">
                                                {testimonials[current].name}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {testimonials[current].role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedCard>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-4">
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={prev}
                        className="rounded-full hover:bg-primary/10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>

                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setAutoplay(false)
                                    setCurrent(i)
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    i === current ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                                }`}
                            />
                        ))}
                    </div>

                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={next}
                        className="rounded-full hover:bg-primary/10"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

