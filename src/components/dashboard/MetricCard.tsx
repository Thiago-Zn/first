"use client"

import { motion } from "framer-motion"
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: number
  changeLabel?: string
  icon: LucideIcon
  color: "green" | "blue" | "purple" | "rose"
  delay?: number
}

const colorVariants = {
  green: {
    bg: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    textColor: "text-emerald-900",
    lightText: "text-emerald-700/60"
  },
  blue: {
    bg: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    textColor: "text-blue-900",
    lightText: "text-blue-700/60"
  },
  purple: {
    bg: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    textColor: "text-purple-900",
    lightText: "text-purple-700/60"
  },
  rose: {
    bg: "from-rose-50 to-orange-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
    textColor: "text-rose-900",
    lightText: "text-rose-700/60"
  }
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeLabel = "vs mês anterior", 
  icon: Icon, 
  color,
  delay = 0
}: MetricCardProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} p-6 shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className={`text-sm font-medium ${colors.lightText} mb-1`}>{title}</p>
          <h3 className={`text-3xl font-bold ${colors.textColor}`}>{value}</h3>
        </div>
        <div className={`p-3 ${colors.iconBg} rounded-xl`}>
          <Icon className={`w-5 h-5 ${colors.iconColor}`} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {change >= 0 ? (
          <TrendingUp className="w-4 h-4 text-emerald-600" />
        ) : (
          <TrendingDown className="w-4 h-4 text-rose-600" />
        )}
        <span className={`text-sm font-semibold ${change >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
        <span className={`text-xs ${colors.lightText}`}>{changeLabel}</span>
      </div>
    </motion.div>
  )
}

