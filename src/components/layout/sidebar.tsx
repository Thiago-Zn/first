"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, CreditCard, BarChart3, History, Wrench, Settings as SettingsIcon } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { motion } from "framer-motion"

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Payment", href: "/transactions", icon: CreditCard },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Cards", href: "/cards", icon: CreditCard },
    { name: "History", href: "/history", icon: History },
    { name: "Services", href: "/services", icon: Wrench },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
]

interface SidebarProps {
    isCollapsed: boolean
}

export function Sidebar({ isCollapsed }: SidebarProps) {
    const pathname = usePathname()

    return (
        <motion.aside
            initial={false}
            animate={{
                width: isCollapsed ? 80 : 280,
            }}
            transition={{
                duration: 0.25,
                ease: [0.23, 1, 0.32, 1],
            }}
            className="fixed left-0 top-0 z-50 h-screen border-r border-border bg-card"
        >
            <div className="flex h-full flex-col">
                {/* Logo/Branding Area */}
                <div className={cn(
                    "flex h-20 items-center border-b border-border transition-all duration-300",
                    isCollapsed ? "justify-center px-4" : "px-6"
                )}>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary flex-shrink-0">
                            <span className="text-xl">💰</span>
                        </div>
                        {!isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                                className="text-xl font-bold tracking-tight"
                            >
                                Finance
                            </motion.span>
                        )}
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className={cn(
                    "flex-1 space-y-1 py-6 overflow-y-auto",
                    isCollapsed ? "px-3" : "px-4"
                )}>
                    {navigation.map((item, index) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "group flex h-12 items-center gap-4 rounded-xl transition-all duration-200 relative",
                                    isCollapsed ? "justify-center px-0" : "px-4",
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                                aria-current={isActive ? "page" : undefined}
                                title={isCollapsed ? item.name : undefined}
                            >
                                <Icon className="h-5 w-5 flex-shrink-0" />
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2, delay: 0.05 * index }}
                                        className="text-[15px] font-medium"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* Bottom spacer for mobile */}
                <div className="h-20" />
            </div>
        </motion.aside>
    )
}
