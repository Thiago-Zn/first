"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data para categorias com cores refinadas da paleta
const categoryData = [
  { name: "Alimentação", value: 35, color: "#FACC15", amount: 4250.00 }, // Yellow-400
  { name: "Moradia", value: 25, color: "#EAB308", amount: 3100.00 },    // Yellow-500
  { name: "Transporte", value: 15, color: "#FEF08A", amount: 1800.00 }, // Yellow-200
  { name: "Lazer", value: 10, color: "#171717", amount: 1200.00 },      // Neutral-900
  { name: "Outros", value: 15, color: "#E5E5E5", amount: 1850.00 }      // Neutral-200
]

export function CategoriesChartCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 h-[400px]"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Gastos por Categoria</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
           <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-8">
        {/* Donut Chart Container */}
        <div className="relative h-52 w-52 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full drop-shadow-sm">
            {categoryData.map((category, index) => {
              const total = categoryData.reduce((acc, cur) => acc + cur.value, 0)
              const startAngle = categoryData
                .slice(0, index)
                .reduce((acc, cur) => acc + (cur.value / total) * 360, 0)
              const sliceAngle = (category.value / total) * 360
              
              // Ajuste fino para criar o espaçamento (gap) visual entre as fatias
              const gapAngle = 3 // graus de espaço
              const adjustedSliceAngle = sliceAngle - gapAngle
              
              const x1 = 50 + 40 * Math.cos((Math.PI * startAngle) / 180)
              const y1 = 50 + 40 * Math.sin((Math.PI * startAngle) / 180)
              const x2 = 50 + 40 * Math.cos((Math.PI * (startAngle + adjustedSliceAngle)) / 180)
              const y2 = 50 + 40 * Math.sin((Math.PI * (startAngle + adjustedSliceAngle)) / 180)
              
              const largeArcFlag = adjustedSliceAngle > 180 ? 1 : 0
              
              const pathData = [
                `M 50 50`,
                `L ${x1} ${y1}`,
                `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                `Z`
              ].join(" ")

              return (
                <motion.path
                  key={category.name}
                  d={pathData}
                  fill={category.color}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ transformOrigin: "50% 50%" }}
                />
              )
            })}
            {/* Center hole */}
            <circle cx="50" cy="50" r="28" fill="white" />
          </svg>
          
          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xs text-gray-400 font-medium mb-0.5">Total</span>
            <span className="text-lg font-bold text-gray-900 tracking-tight">R$ 12k</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full space-y-3 pr-2">
          {categoryData.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-between group p-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-default"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-2.5 h-2.5 rounded-full shadow-sm" 
                  style={{ backgroundColor: category.color }} 
                />
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {category.name}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-900 w-8 text-right">
                  {category.value}%
                </span>
                <span className="text-xs text-gray-400 w-20 text-right font-medium">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0
                  }).format(category.amount)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
