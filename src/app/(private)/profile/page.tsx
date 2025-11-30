export default function ProfilePage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
                <p className="text-muted-foreground mt-2">
                    Gerencie suas informações pessoais e preferências
                </p>
            </div>

            <div className="grid gap-6">
                <div className="rounded-xl border bg-card p-6">
                    <h2 className="text-xl font-semibold mb-4">Informações Pessoais</h2>
                    <p className="text-muted-foreground">Em desenvolvimento...</p>
                </div>
            </div>
        </div>
    )
}

