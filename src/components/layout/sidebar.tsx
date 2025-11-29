"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, List, BarChart3, CreditCard, Settings } from "lucide-react"
import { cn } from "@/lib/utils/cn"

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Transactions", href: "/transactions", icon: List },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Cards", href: "/cards", icon: CreditCard },
    { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-[280px] border-r border-border bg-background">
            <div className="flex h-full flex-col p-6">
                {/* Logo/Branding Area */}
                <div className="mb-8 flex h-[60px] items-center">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                            <span className="text-lg font-bold">💰</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">Saldo Certo</span>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex h-11 items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground hover:bg-muted"
                                )}
                                aria-current={isActive ? "page" : undefined}
                            >
                                <Icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* User Section (Optional) */}
                <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-3 rounded-xl p-3 hover:bg-muted transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-blue text-blue-900 text-sm font-medium">
                            JD
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">John Doe</p>
                            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
