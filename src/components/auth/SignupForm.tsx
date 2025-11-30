"use client"

import * as React from "react"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, Shield, Zap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function SignupForm() {
    const { signup, isLoading } = useAuth()
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!email || !password) {
            setError("Email e senha são obrigatórios")
            return
        }

        try {
            await signup({ name, email, password })
        } catch (err) {
            setError("Erro ao criar conta. Tente novamente.")
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nome */}
            <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Nome completo
                </Label>
                <Input
                    id="name"
                    placeholder="Como você gostaria de ser chamado?"
                    type="text"
                    disabled={isLoading}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-base border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                />
            </div>

            {/* Campo Email */}
            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email
                </Label>
                <Input
                    id="email"
                    placeholder="seu@email.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-base border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                />
            </div>

            {/* Campo Senha */}
            <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-foreground">
                    Senha
                </Label>
                <Input
                    id="password"
                    placeholder="Mínimo 8 caracteres"
                    type="password"
                    autoComplete="new-password"
                    disabled={isLoading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 text-base border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                />
                <p className="text-xs text-muted-foreground">
                    Use uma combinação de letras, números e símbolos
                </p>
            </div>

            {/* Mensagem de Erro */}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive"
                >
                    {error}
                </motion.div>
            )}

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex flex-col items-center gap-1 text-center">
                    <Shield className="h-5 w-5 text-success" />
                    <span className="text-xs text-muted-foreground">Seguro</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-xs text-muted-foreground">Rápido</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                    <TrendingUp className="h-5 w-5 text-success" />
                    <span className="text-xs text-muted-foreground">Grátis</span>
                </div>
            </div>

            {/* Botão de Submit */}
            <Button 
                disabled={isLoading} 
                type="submit" 
                className="w-full h-14 text-base font-bold shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02]"
                size="lg"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Criando sua conta...
                    </>
                ) : (
                    <>
                        Criar conta gratuita
                        <CheckCircle2 className="ml-2 h-5 w-5" />
                    </>
                )}
            </Button>

            {/* Termos */}
            <p className="text-xs text-center text-muted-foreground leading-relaxed px-4">
                Ao criar uma conta, você concorda com nossos{" "}
                <a href="#" className="underline hover:text-foreground">Termos de Serviço</a>{" "}
                e{" "}
                <a href="#" className="underline hover:text-foreground">Política de Privacidade</a>
            </p>
        </form>
    )
}
