"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { BottomBar } from "./bottom-bar"
import { cn } from "@/lib/utils/cn"

interface AppLayoutProps {
    children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    // Check localStorage on mount
    useEffect(() => {
        setIsMounted(true)
        const savedState = localStorage.getItem('sidebar-collapsed')
        if (savedState !== null) {
            setIsCollapsed(savedState === 'true')
        }
    }, [])

    // Save to localStorage when changed
    const handleToggleCollapse = () => {
        const newState = !isCollapsed
        setIsCollapsed(newState)
        localStorage.setItem('sidebar-collapsed', String(newState))
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar isCollapsed={isCollapsed} />
            </div>

            {/* Main content area */}
            <div
                className={cn(
                    "min-h-screen transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    isMounted && (isCollapsed ? "lg:ml-[80px]" : "lg:ml-[280px]")
                )}
            >
                <Header isCollapsed={isCollapsed} onToggleCollapse={handleToggleCollapse} />
                <main className="container mx-auto p-6 lg:p-8 pb-24 lg:pb-8 max-w-[1600px]">
                    {children}
                </main>
            </div>

            {/* Mobile BottomBar */}
            <div className="lg:hidden">
                <BottomBar />
            </div>
        </div>
    )
}
