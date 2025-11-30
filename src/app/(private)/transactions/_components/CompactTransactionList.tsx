"use client"

import * as React from "react"
import { Transaction } from "@/lib/types/transaction"
import { cn } from "@/lib/utils/cn"

function formatDate(date: string | Date): string {
    const d = new Date(date)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
}

interface CompactTransactionListProps {
    transactions: (Transaction & { type: 'income' | 'expense' })[]
}

const categoryColors: Record<string, string> = {
    "Salário": "bg-emerald-100 text-emerald-700",
    "Freelance": "bg-emerald-100 text-emerald-700",
    "Alimentação": "bg-orange-100 text-orange-700",
    "Entretenimento": "bg-yellow-100 text-yellow-700",
    "Transporte": "bg-blue-100 text-blue-700",
    "Contas": "bg-purple-100 text-purple-700",
    "Saúde": "bg-pink-100 text-pink-700",
    "default": "bg-gray-100 text-gray-700"
}

export function CompactTransactionList({ transactions }: CompactTransactionListProps) {
    return (
        <div className="space-y-2">
            {transactions.map((transaction) => (
                <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-sm transition-all"
                >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Date */}
                        <div className="flex-shrink-0 w-20 text-sm text-muted-foreground">
                            {formatDate(transaction.date)}
                        </div>

                        {/* Description */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                                {transaction.description}
                            </p>
                        </div>

                        {/* Category */}
                        <span className={cn(
                            "flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
                            categoryColors[transaction.category] || categoryColors.default
                        )}>
                            {transaction.category}
                        </span>
                    </div>

                    {/* Amount */}
                    <div className="flex-shrink-0 ml-4 text-right">
                        <span className={cn(
                            "text-sm font-bold",
                            transaction.type === "income" ? "text-emerald-600" : "text-red-600"
                        )}>
                            {transaction.type === "income" ? "+" : "-"}R$ {transaction.amount.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

