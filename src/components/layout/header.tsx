"use client"

import { Bell, Settings as SettingsIcon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { UserProfileMenu } from "./UserProfileMenu"
import { usePathname } from "next/navigation"

interface HeaderProps {
    isCollapsed: boolean
    onToggleCollapse: () => void
}

const routeTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/transactions": "Transações",
    "/analytics": "Análises",
    "/cards": "Meus Cartões",
    "/history": "Histórico",
    "/services": "Serviços",
    "/settings": "Configurações",
    "/profile": "Meu Perfil"
}

export function Header({ isCollapsed, onToggleCollapse }: HeaderProps) {
    const { user } = useAuth()
    const pathname = usePathname()

    // Determine current title based on path
    // Checks for exact match first, then partial match (e.g. /transactions/new)
    const currentTitle = routeTitles[pathname] || 
        Object.entries(routeTitles).find(([route]) => pathname.startsWith(route))?.[1] || 
        "Dashboard"

    const isDashboard = pathname === "/dashboard"

    return (
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 lg:px-8">
            {/* Left Section - Menu Toggle + Title */}
            <div className="flex items-center gap-4">
                {/* Menu Toggle Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggleCollapse}
                    className="hidden lg:flex"
                    aria-label={isCollapsed ? "Expandir menu" : "Recolher menu"}
                >
                    {isCollapsed ? (
                        <Menu className="h-5 w-5" />
                    ) : (
                        <X className="h-5 w-5" />
                    )}
                </Button>

                <div className="flex flex-col">
                    {isDashboard ? (
                        <>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Bem-vindo de volta</span>
                            <h1 className="text-xl font-bold tracking-tight text-foreground">
                                {user?.name || "Usuário"}
                            </h1>
                        </>
                    ) : (
                        <>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Página Atual</span>
                            <h1 className="text-xl font-bold tracking-tight text-foreground">
                                {currentTitle}
                            </h1>
                        </>
                    )}
                </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-3">
                {/* Notifications */}
                <div className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                    >
                        <Bell className="h-5 w-5 text-muted-foreground" />
                        {/* Notification badge */}
                        <span className="absolute top-2 right-2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                    </span>
                    </Button>
                </div>

                {/* Settings */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.location.href = "/settings"}
                    className={pathname === "/settings" ? "bg-muted text-foreground" : ""}
                >
                    <SettingsIcon className="h-5 w-5 text-muted-foreground" />
                </Button>

                {/* User Profile Menu */}
                <UserProfileMenu />
            </div>
        </header>
    )
}
