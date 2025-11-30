"use client"

import * as React from "react"
import { Code2 } from "lucide-react"

export function DevModeIndicator() {
    const [isDevMode, setIsDevMode] = React.useState(false)

    React.useEffect(() => {
        setIsDevMode(process.env.NEXT_PUBLIC_AUTH_MODE === "dev")
    }, [])

    if (!isDevMode) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 backdrop-blur-sm shadow-sm">
            <Code2 className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Dev Mode</span>
        </div>
    )
}

