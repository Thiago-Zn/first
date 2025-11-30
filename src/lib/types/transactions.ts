export type TransactionType = "income" | "expense" | "transfer";

export type TransactionStatus = "completed" | "pending" | "failed";

export interface Transaction {
    id: string;
    date: string; // ISO format YYYY-MM-DD
    description: string;
    category: string;
    amount: number; // positive for income, negative for expense (usually)
    type: TransactionType;
    status?: TransactionStatus;
    tags?: string[];
}

export type TransactionSortOption = "date_desc" | "date_asc" | "amount_desc" | "amount_asc";

export type ViewMode = "card" | "compact" | "table";

