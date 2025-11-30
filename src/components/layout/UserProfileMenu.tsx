"use client"

import * as React from "react"
import { useAuth } from "@/contexts/AuthContext"
import { LogOut, User, Settings as SettingsIcon, CreditCard, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export function UserProfileMenu() {
    const { user, logout } = useAuth()
    const [isOpen, setIsOpen] = React.useState(false)
    const menuRef = React.useRef<HTMLDivElement>(null)
    const router = useRouter()

    // Get user initials
    const initials = user?.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) || user?.email?.[0]?.toUpperCase() || "U"

    // Close menu when clicking outside
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
            return () => document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    const menuItems = [
        { icon: User, label: "Meu Perfil", onClick: () => router.push("/profile") },
        { icon: CreditCard, label: "Cartões", onClick: () => router.push("/cards") },
        { icon: SettingsIcon, label: "Configurações", onClick: () => router.push("/settings") },
        { icon: HelpCircle, label: "Ajuda", onClick: () => {} },
        { icon: LogOut, label: "Sair", onClick: async () => { await logout(); router.push("/login") }, destructive: true },
    ]

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 rounded-xl p-1 pr-3 hover:bg-muted transition-colors"
            >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary text-primary-foreground text-sm font-bold shadow-sm">
                    {initials}
                </div>
                <div className="hidden lg:flex flex-col items-start">
                    <span className="text-sm font-semibold text-foreground leading-none mb-1">
                        {user?.name || "Usuário"}
                    </span>
                    <span className="text-xs text-muted-foreground leading-none">
                        {user?.email || "user@example.com"}
                    </span>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-card shadow-xl overflow-hidden z-50"
                    >
                        <div className="p-3 border-b border-border">
                            <p className="text-sm font-semibold text-foreground">{user?.name || "Usuário"}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{user?.email}</p>
                        </div>
                        <div className="py-2">
                            {menuItems.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            item.onClick()
                                            setIsOpen(false)
                                        }}
                                        className={cn(
                                            "flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                                            item.destructive
                                                ? "text-destructive hover:bg-destructive/10"
                                                : "text-foreground hover:bg-muted"
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.label}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

