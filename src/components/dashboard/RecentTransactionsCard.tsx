"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Transaction } from "@/lib/types/transaction"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface RecentTransactionsCardProps {
  transactions: Transaction[]
}

export function RecentTransactionsCard({ transactions }: RecentTransactionsCardProps) {
  const getCategoryColor = (category: string): "yellow" | "green" | "blue" | "purple" | "pink" | "orange" => {
    const colorMap: Record<string, "yellow" | "green" | "blue" | "purple" | "pink" | "orange"> = {
      "Trabalho": "yellow",
      "Salário": "yellow",
      "Moradia": "purple",
      "Alimentação": "orange",
      "Serviços": "blue",
      "Freelance": "green",
      "Transporte": "blue",
      "Saúde": "pink",
      "Entretenimento": "purple"
    }
    return colorMap[category] || "blue"
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Transações Recentes</h3>
        <button className="text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors">
          Ver todas
        </button>
      </div>

      <div className="space-y-4">
        {transactions.slice(0, 5).map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="flex items-center justify-between group hover:bg-gray-50/50 p-3 rounded-xl transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className={`p-2 rounded-xl ${
                transaction.type === "income" 
                  ? "bg-emerald-100 text-emerald-700" 
                  : "bg-rose-100 text-rose-700"
              }`}>
                {transaction.type === "income" ? (
                  <ArrowDownRight className="w-4 h-4" />
                ) : (
                  <ArrowUpRight className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {transaction.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant={getCategoryColor(transaction.category)} className="text-xs">
                    {transaction.category}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {new Date(transaction.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short'
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-semibold ${
                transaction.type === "income" 
                  ? "text-emerald-700" 
                  : "text-gray-900"
              }`}>
                {transaction.type === "income" ? "+" : "-"}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(Math.abs(transaction.amount))}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

