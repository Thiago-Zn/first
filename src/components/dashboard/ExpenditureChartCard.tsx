"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils/cn"

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

// Mock data para o gráfico
const mockData = [
  { month: "Jan", value: 32500 },
  { month: "Fev", value: 28700 },
  { month: "Mar", value: 35200 },
  { month: "Abr", value: 31800 },
  { month: "Mai", value: 38900 },
  { month: "Jun", value: 34742 },
  { month: "Jul", value: 36500 },
  { month: "Ago", value: 33200 },
  { month: "Set", value: 39100 },
  { month: "Out", value: 35800 },
  { month: "Nov", value: 37200 },
  { month: "Dez", value: 34900 }
]

export function ExpenditureChartCard() {
  const [selectedMonth, setSelectedMonth] = useState("Jun")
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null)

  const maxValue = Math.max(...mockData.map(d => d.value))
  const selectedData = mockData.find(d => d.month === selectedMonth) || mockData[5]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 h-[400px]"
    >
      <div className="flex items-start justify-between mb-8">
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Despesas do Ano</h3>
            <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900 tracking-tight">
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0
                }).format(selectedData.value)}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wide">
                {selectedData.month}
            </span>
            </div>
        </div>
        
        {/* Period Selector */}
        <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-100">
            {['Semana', 'Mês', 'Ano'].map((period) => (
                <button
                    key={period}
                    className={cn(
                        "px-3 py-1 rounded-md text-xs font-medium transition-all",
                        period === 'Ano' 
                            ? "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200" 
                            : "text-gray-500 hover:text-gray-900"
                    )}
                >
                    {period}
                </button>
            ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative flex-1 w-full">
        <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none" className="overflow-visible">
          {/* Grid lines */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * 66}
              x2="800"
              y2={i * 66}
              stroke="#f3f4f6"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {/* Area fill */}
          <motion.path
            d={`${mockData.map((d, i) => {
              const x = (i / (mockData.length - 1)) * 800
              const y = 200 - (d.value / maxValue) * 180
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
            }).join(' ')} L 800 220 L 0 220 Z`}
            fill="url(#gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Line chart */}
          <motion.path
            d={mockData.map((d, i) => {
              const x = (i / (mockData.length - 1)) * 800
              const y = 200 - (d.value / maxValue) * 180
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
            }).join(' ')}
            stroke="#F59E0B"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="drop-shadow-sm"
          />

          {/* Data points */}
          {mockData.map((d, i) => {
            const x = (i / (mockData.length - 1)) * 800
            const y = 200 - (d.value / maxValue) * 180
            const isSelected = d.month === selectedMonth
            const isHovered = d.month === hoveredMonth

            return (
              <g key={d.month}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r={isSelected || isHovered ? "6" : "0"}
                  fill="#FFF"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  className="cursor-pointer transition-all"
                  initial={{ scale: 0 }}
                  animate={{ scale: isSelected || isHovered ? 1 : 0 }}
                />
                {/* Invisible click target */}
                <rect 
                    x={x - 20} 
                    y="0" 
                    width="40" 
                    height="220" 
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredMonth(d.month)}
                    onMouseLeave={() => setHoveredMonth(null)}
                    onClick={() => setSelectedMonth(d.month)}
                />
              </g>
            )
          })}
        </svg>
      </div>

      {/* Month labels */}
      <div className="flex justify-between items-center mt-4 px-2">
        {mockData.map((d) => (
          <button
            key={d.month}
            onClick={() => setSelectedMonth(d.month)}
            className={cn(
                "text-[11px] font-semibold transition-all duration-200 px-2 py-1 rounded-md",
                d.month === selectedMonth
                    ? "bg-gray-900 text-white shadow-md scale-110"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
            )}
          >
            {d.month}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
