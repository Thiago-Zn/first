"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "./ScrollReveal"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils/cn"

const faqs = [
    {
        question: "O Saldo Certo é realmente gratuito?",
        answer: "Sim! Temos um plano gratuito para sempre que inclui todas as funcionalidades essenciais para você organizar suas finanças. Também oferecemos planos Premium com recursos avançados para quem precisa de mais poder."
    },
    {
        question: "Meus dados estão seguros?",
        answer: "Absolutamente. Utilizamos criptografia de ponta a ponta (mesma tecnologia dos bancos) para garantir que seus dados permaneçam privados e seguros. Nunca compartilhamos suas informações com terceiros."
    },
    {
        question: "Posso conectar minhas contas bancárias?",
        answer: "Sim, suportamos integração automática com os principais bancos e instituições financeiras do país através do Open Finance, de forma segura e regulamentada."
    },
    {
        question: "Consigo acessar pelo celular?",
        answer: "Com certeza! Nossa plataforma é totalmente responsiva e funciona perfeitamente em qualquer dispositivo, seja computador, tablet ou smartphone, sem precisar baixar nada."
    },
    {
        question: "Como funciona o suporte?",
        answer: "Oferecemos suporte por e-mail para todos os usuários e chat prioritário para assinantes Premium. Nossa equipe está sempre pronta para ajudar com qualquer dúvida."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="container mx-auto max-w-4xl px-6 py-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                >
                    Perguntas Frequentes
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-foreground/70 text-lg"
                >
                    Tire suas dúvidas sobre o Saldo Certo
                </motion.p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <ScrollReveal 
                        key={index} 
                        animation="slide-up" 
                        delay={index * 0.1}
                    >
                        <div 
                            className={cn(
                                "border rounded-2xl overflow-hidden transition-all duration-300",
                                openIndex === index 
                                    ? "bg-card border-primary/20 shadow-lg" 
                                    : "bg-card/50 hover:bg-card border-transparent hover:border-border"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                {/* FIX: Garantir largura adequada para a pergunta */}
                                <span className={cn(
                                    "font-medium text-lg transition-colors flex-1 pr-4 text-left whitespace-normal break-words",
                                    openIndex === index ? "text-primary" : "text-foreground"
                                )}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className={cn(
                                        "w-5 h-5 transition-colors",
                                        openIndex === index ? "text-primary" : "text-muted-foreground"
                                    )} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        {/* FIX: Garantir largura adequada para o texto da resposta */}
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed w-full whitespace-normal break-words">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}

