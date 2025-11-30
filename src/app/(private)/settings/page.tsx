"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
    User, 
    Mail, 
    Shield, 
    LogOut, 
    Moon, 
    Bell, 
    Globe, 
    ChevronRight, 
    Smartphone, 
    Key
} from "lucide-react"
import { SectionFadeIn } from "@/components/feedback/SectionFadeIn"

export default function SettingsPage() {
    const { user, logout } = useAuth()
    
    // Mock states for UI interactivity
    const [notifications, setNotifications] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const [emailMarketing, setEmailMarketing] = useState(false)

    // Get user initials
    const initials = user?.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) || "U"

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            
            {/* 1. Perfil Section */}
            <SectionFadeIn delay={0.1}>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Perfil
                    </h2>
                    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
                        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                            {/* Avatar Area */}
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-md border-4 border-background ring-2 ring-border/20">
                                    {initials}
                                </div>
                                <Button variant="outline" size="sm" className="text-xs">
                                    Alterar foto
                                </Button>
                            </div>

                            {/* Info Form */}
                            <div className="flex-1 w-full grid gap-5">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Nome Completo</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="name" 
                                            defaultValue={user?.name || ""} 
                                            className="pl-9 h-11" 
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="email" 
                                            defaultValue={user?.email || ""} 
                                            disabled 
                                            className="pl-9 h-11 bg-muted/50" 
                                        />
                                    </div>
                                    <p className="text-[11px] text-muted-foreground">O email não pode ser alterado no modo demonstração.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionFadeIn>

            {/* 2. Preferências Section */}
            <SectionFadeIn delay={0.2}>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <SettingsIcon className="h-5 w-5 text-primary" />
                        Preferências
                    </h2>
                    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm divide-y divide-border/50">
                        {/* Dark Mode */}
                        <div className="p-5 flex items-center justify-between hover:bg-muted/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center">
                                    <Moon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Modo Escuro</p>
                                    <p className="text-sm text-muted-foreground">Alternar entre tema claro e escuro</p>
                                </div>
                            </div>
                            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                        </div>

                        {/* Notifications */}
                        <div className="p-5 flex items-center justify-between hover:bg-muted/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                                    <Bell className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Notificações Push</p>
                                    <p className="text-sm text-muted-foreground">Receba alertas sobre suas transações</p>
                                </div>
                            </div>
                            <Switch checked={notifications} onCheckedChange={setNotifications} />
                        </div>

                        {/* Email Marketing */}
                        <div className="p-5 flex items-center justify-between hover:bg-muted/30 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Resumo Semanal</p>
                                    <p className="text-sm text-muted-foreground">Receba um resumo financeiro por email</p>
                                </div>
                            </div>
                            <Switch checked={emailMarketing} onCheckedChange={setEmailMarketing} />
                        </div>

                        {/* Language - Placeholder */}
                        <div className="p-5 flex items-center justify-between hover:bg-muted/30 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <Globe className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Idioma</p>
                                    <p className="text-sm text-muted-foreground">Português (Brasil)</p>
                                </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                    </div>
                </div>
            </SectionFadeIn>

            {/* 3. Segurança Section */}
            <SectionFadeIn delay={0.3}>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Segurança
                    </h2>
                    <div className="bg-card border border-border rounded-2xl p-1 overflow-hidden shadow-sm">
                        <div className="grid sm:grid-cols-2 gap-1">
                             <button className="flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-all group text-left">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Key className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Alterar senha</p>
                                        <p className="text-xs text-muted-foreground">Última alteração há 30 dias</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-all group text-left">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Smartphone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Autenticação em 2 fatores</p>
                                        <p className="text-xs text-muted-foreground">Adicionar camada extra de segurança</p>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Novo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </SectionFadeIn>

            {/* 4. Sessão Section */}
            <SectionFadeIn delay={0.4}>
                <div className="border-t border-border pt-8 mt-8">
                    <div className="flex items-center justify-between p-6 bg-destructive/5 border border-destructive/10 rounded-2xl">
                        <div>
                            <h3 className="text-base font-semibold text-destructive">Zona de Perigo</h3>
                            <p className="text-sm text-muted-foreground mt-1">Sair da sua conta ou excluir seus dados permanentemente.</p>
                        </div>
                        <Button 
                            variant="destructive" 
                            onClick={logout}
                            className="gap-2"
                        >
                            <LogOut className="h-4 w-4" />
                            Sair da Conta
                        </Button>
                    </div>
                </div>
                
                <div className="text-center pb-8">
                     <p className="text-xs text-muted-foreground">
                        Saldo Certo v0.1.0 • Build {process.env.NODE_ENV}
                     </p>
                </div>
            </SectionFadeIn>
        </div>
    )
}

// Helper Icon component since I can't import Settings as SettingsIcon inside the component with same name easily
function SettingsIcon({ className }: { className?: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    )
}
