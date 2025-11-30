import { AuthFormLayout } from "@/components/auth/AuthFormLayout"
import { LoginForm } from "@/components/auth/LoginForm"
import Link from "next/link"

export default function LoginPage() {
    return (
        <AuthFormLayout
            variant="login"
            title="Bem-vindo de volta"
            description="Entre na sua conta para continuar"
            footer={
                <div className="space-y-4">
                    <p>
                        Não tem uma conta?{" "}
                        <Link href="/signup" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors">
                            Criar conta grátis
                        </Link>
                    </p>
                    <div className="flex items-center gap-4 justify-center text-xs">
                        <Link href="/home" className="hover:text-foreground transition-colors">
                            Início
                        </Link>
                        <span>•</span>
                        <Link href="/about" className="hover:text-foreground transition-colors">
                            Como funciona
                        </Link>
                    </div>
                </div>
            }
        >
            <LoginForm />
        </AuthFormLayout>
    )
}
