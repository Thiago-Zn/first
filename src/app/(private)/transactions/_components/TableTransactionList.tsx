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

interface TableTransactionListProps {
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

export function TableTransactionList({ transactions }: TableTransactionListProps) {
    return (
        <div className="bg-card rounded-xl border overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b bg-muted/30">
                            <th className="text-left py-4 px-6 text-sm font-semibold text-muted-foreground">
                                Data
                            </th>
                            <th className="text-left py-4 px-6 text-sm font-semibold text-muted-foreground">
                                Descrição
                            </th>
                            <th className="text-left py-4 px-6 text-sm font-semibold text-muted-foreground">
                                Categoria
                            </th>
                            <th className="text-right py-4 px-6 text-sm font-semibold text-muted-foreground">
                                Valor
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr
                                key={transaction.id}
                                className={cn(
                                    "border-b last:border-b-0 hover:bg-muted/30 transition-colors",
                                    index % 2 === 0 && "bg-muted/5"
                                )}
                            >
                                <td className="py-4 px-6 text-sm text-foreground">
                                    {formatDate(transaction.date)}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-foreground">
                                    {transaction.description}
                                </td>
                                <td className="py-4 px-6">
                                    <span className={cn(
                                        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
                                        categoryColors[transaction.category] || categoryColors.default
                                    )}>
                                        {transaction.category}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right text-sm font-semibold">
                                    <span className={cn(
                                        transaction.type === "income" ? "text-emerald-600" : "text-red-600"
                                    )}>
                                        {transaction.type === "income" ? "+" : "-"}R$ {transaction.amount.toLocaleString("pt-BR", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

