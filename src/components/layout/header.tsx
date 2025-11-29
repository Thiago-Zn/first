"use client"

import { Bell, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background px-6">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <h1 className="text-lg font-semibold hidden lg:block">Dashboard</h1>
                {/* Mobile menu button placeholder for future */}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
                {/* Search Button */}
                <Button variant="ghost" size="icon" className="hidden md:flex">
                    <Search className="h-5 w-5" />
                </Button>

                {/* Notifications */}
                <div className="relative">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <span className="absolute top-1 right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                    </span>
                </div>

                {/* User Profile */}
                <Button variant="ghost" className="gap-2 px-2">
                    <Badge variant="blue" size="icon" className="h-10 w-10">
                        JD
                    </Badge>
                    <span className="hidden md:block text-sm font-medium">John Doe</span>
                </Button>
            </div>
        </header>
    )
}
