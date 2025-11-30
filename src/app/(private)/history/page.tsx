export default function HistoryPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Histórico</h1>
                <p className="text-muted-foreground mt-2">
                    Acompanhe todas as suas transações passadas
                </p>
            </div>

            <div className="grid gap-6">
                <div className="rounded-xl border bg-card p-6">
                    <h2 className="text-xl font-semibold mb-4">Transações Recentes</h2>
                    <p className="text-muted-foreground">Em desenvolvimento...</p>
                </div>
            </div>
        </div>
    )
}

