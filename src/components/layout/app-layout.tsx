import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { BottomBar } from "./bottom-bar"

interface AppLayoutProps {
    children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* Main content area */}
            <div className="lg:ml-[280px]">
                <Header />
                <main className="p-6 lg:p-8 pb-20 lg:pb-8">
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
