import { Transaction, TransactionSortOption } from "@/lib/types/transactions";

export function sortTransactions(transactions: Transaction[], sortBy: TransactionSortOption = "date_desc"): Transaction[] {
    const sorted = [...transactions];

    return sorted.sort((a, b) => {
        switch (sortBy) {
            case "date_desc":
                // Newest first
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            case "date_asc":
                // Oldest first
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            case "amount_desc":
                // Highest amount first (considering absolute value or actual value? Usually actual value for "amount")
                // But for "amount_desc" usually implies magnitude or strictly value. 
                // Let's assume strict value (Income > Expense).
                // Or maybe the user wants "Largest transaction" (magnitude).
                // Plan says: "Valor (maior)", "Valor (menor)".
                // Usually for finance apps, sort by amount means numeric value.
                return b.amount - a.amount;
            case "amount_asc":
                return a.amount - b.amount;
            default:
                return 0;
        }
    });
}

