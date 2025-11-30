"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet } from "lucide-react"
import { DashboardMetrics } from "@/services/api"

interface HeroBalanceCardProps {
  metrics: DashboardMetrics
}

export function HeroBalanceCard({ metrics }: HeroBalanceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-sm font-medium text-amber-900/60 mb-1">Saldo Total</p>
            <h2 className="text-5xl font-bold text-amber-950 tracking-tight">
              {new Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
                minimumFractionDigits: 2 
              }).format(metrics.balance)}
            </h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm"
          >
            <Wallet className="w-6 h-6 text-amber-700" />
          </motion.div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full">
            {metrics.balanceChange >= 0 ? (
              <ArrowUpRight className="w-4 h-4 text-emerald-600" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-rose-600" />
            )}
            <span className={`text-sm font-semibold ${metrics.balanceChange >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
              {metrics.balanceChange >= 0 ? '+' : ''}{metrics.balanceChange}%
            </span>
            <span className="text-xs text-amber-900/50">vs mês anterior</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-amber-900 text-white rounded-full text-sm font-medium hover:bg-amber-800 transition-colors"
          >
            <TrendingUp className="w-4 h-4" />
            Ver Detalhes
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

