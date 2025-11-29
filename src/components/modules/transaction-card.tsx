import { Transaction } from "@/lib/types/transaction";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface TransactionCardProps {
    transaction: Transaction;
}

export function TransactionCard({ transaction }: TransactionCardProps) {
    const isIncome = transaction.type === "income";
    const formattedDate = new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
    });
    const formattedAmount = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(Math.abs(transaction.amount));

    return (
        <div className="rounded-xl border border-border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm truncate">{transaction.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                            {transaction.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{formattedDate}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-right">
                        <p
                            className={`text-lg font-bold ${isIncome ? "text-success" : "text-foreground"
                                }`}
                        >
                            {isIncome ? "+" : "-"} {formattedAmount}
                        </p>
                    </div>
                    <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${isIncome ? "bg-success/10" : "bg-muted"
                            }`}
                    >
                        {isIncome ? (
                            <ArrowUpRight className="h-4 w-4 text-success" />
                        ) : (
                            <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
