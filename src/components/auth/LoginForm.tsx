"use client"

import * as React from "react"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, ArrowRight } from "lucide-react"

export function LoginForm() {
    const { login, isLoading } = useAuth()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        
        if (!email || !password) {
            setError("Preencha todos os campos")
            return
        }

        try {
            await login({ email, password })
        } catch (err) {
            setError("Email ou senha incorretos")
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Campo Email */}
            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
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
                    className="h-12 text-base"
                    autoFocus
                />
            </div>

            {/* Campo Senha */}
            <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="password" className="text-sm font-medium text-foreground">
                        Senha
                    </Label>
                    <a 
                        href="#" 
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Esqueceu?
                    </a>
                </div>
                <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    autoComplete="current-password"
                    disabled={isLoading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 text-base"
                />
            </div>

            {/* Mensagem de Erro */}
            {error && (
                <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
                    {error}
                </div>
            )}

            {/* Botão de Submit */}
            <Button 
                disabled={isLoading} 
                type="submit" 
                className="w-full h-12 text-base font-semibold"
                size="lg"
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Entrando..." : "Entrar"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
        </form>
    )
}
