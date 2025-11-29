export interface Transaction {
    id: string;
    date: string; // ISO format YYYY-MM-DD
    description: string;
    category: string;
    amount: number; // positive for income, negative for expense
    type: "income" | "expense";
}

export type SortOption = "date-desc" | "date-asc" | "amount-desc" | "amount-asc";
