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

interface MobileTransactionListProps {
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

export function MobileTransactionList({ transactions }: MobileTransactionListProps) {
    return (
        <div className="space-y-3">
            {transactions.map((transaction) => (
                <div
                    key={transaction.id}
                    className="p-5 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-foreground mb-1 truncate">
                                {transaction.description}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {formatDate(transaction.date)}
                            </p>
                        </div>
                        <div className="flex-shrink-0 ml-3 text-right">
                            <span className={cn(
                                "text-lg font-bold",
                                transaction.type === "income" ? "text-emerald-600" : "text-red-600"
                            )}>
                                {transaction.type === "income" ? "+" : "-"}R$ {transaction.amount.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className={cn(
                            "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium",
                            categoryColors[transaction.category] || categoryColors.default
                        )}>
                            {transaction.category}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

