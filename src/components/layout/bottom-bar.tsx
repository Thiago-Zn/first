"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, List, BarChart3, Settings } from "lucide-react"
import { cn } from "@/lib/utils/cn"

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Transactions", href: "/transactions", icon: List },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Settings", href: "/settings", icon: Settings },
]

export function BottomBar() {
    const pathname = usePathname()

    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-border bg-background shadow-lg"
            aria-label="Mobile navigation"
        >
            {navigation.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "flex min-w-[44px] flex-col items-center justify-center gap-1 px-3 py-2 transition-colors",
                            isActive
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                        aria-current={isActive ? "page" : undefined}
                    >
                        <Icon className="h-6 w-6" />
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </Link>
                )
            })}
        </nav>
    )
}
