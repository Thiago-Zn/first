"use client"

import { AppLayout } from "./app-layout"
import { Suspense } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { Loader2 } from "lucide-react"

interface AppLayoutClientProps {
    children: React.ReactNode
}

export function AppLayoutClient({ children }: AppLayoutClientProps) {
    const { isAuthenticated, isLoading } = useAuth()

    if (isLoading) {
        return (
             <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    // While redirect is happening in AuthContext, we don't want to show the dashboard
    if (!isAuthenticated) {
        return null
    }

    return (
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
            <AppLayout>{children}</AppLayout>
        </Suspense>
    )
}
