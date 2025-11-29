import { Transaction } from "@/lib/types/transaction";
import { Badge } from "@/components/ui/badge";

interface TransactionItemProps {
    transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
    const isIncome = transaction.type === "income";
    const formattedDate = new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    const formattedAmount = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(Math.abs(transaction.amount));

    return (
        <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-3 hover:bg-muted/50 transition-colors">
            <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{transaction.description}</p>
                <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                        {transaction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{formattedDate}</span>
                </div>
            </div>
            <div className="text-right">
                <p
                    className={`text-base font-semibold ${isIncome ? "text-success" : "text-foreground"
                        }`}
                >
                    {isIncome ? "+" : "-"} {formattedAmount}
                </p>
            </div>
        </div>
    );
}
