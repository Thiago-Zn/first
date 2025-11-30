"use client"

import React from "react"
import { SkeletonDashboard } from "@/components/feedback/SkeletonDashboard"
import { EmptyState } from "@/components/feedback/EmptyState"
import { ErrorBanner } from "@/components/feedback/ErrorBanner"
import { SectionFadeIn } from "@/components/feedback/SectionFadeIn"
import { Button } from "@/components/ui/button"
import { RotateCw, Wallet, TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react"
import { useDashboard } from "@/hooks/use-dashboard"
import { HeroBalanceCard } from "@/components/dashboard/HeroBalanceCard"
import { MetricCard } from "@/components/dashboard/MetricCard"
import { ExpenditureChartCard } from "@/components/dashboard/ExpenditureChartCard"
import { RecentTransactionsCard } from "@/components/dashboard/RecentTransactionsCard"
import { CategoriesChartCard } from "@/components/dashboard/CategoriesChartCard"

export function DashboardClient() {
  const { 
      metrics, 
      recentTransactions, 
      isLoading, 
      error, 
      refetch, 
      simulateError, 
      simulateEmpty 
  } = useDashboard()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-1 font-medium">
            Visão completa das suas finanças
          </p>
        </div>
        
        {/* Debug Controls */}
        <div className="flex gap-2">
           <Button variant="outline" size="sm" onClick={simulateError} className="text-xs">
             Simular Erro
          </Button>
          <Button variant="outline" size="sm" onClick={simulateEmpty} className="text-xs">
             Simular Vazio
          </Button>
          <Button variant="outline" size="sm" onClick={refetch} disabled={isLoading}>
            <RotateCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <SectionFadeIn>
          <ErrorBanner 
            message="Não foi possível carregar os dados do dashboard. Verifique sua conexão." 
            onRetry={refetch} 
          />
        </SectionFadeIn>
      )}

      {/* Loading State */}
      {isLoading ? (
        <SkeletonDashboard />
      ) : !error && !metrics && recentTransactions.length === 0 ? (
        /* Empty State */
         <SectionFadeIn delay={0.1}>
            <EmptyState
                title="Nenhum dado encontrado"
                description="Parece que você ainda não tem transações cadastradas."
                icon={Wallet}
                actionLabel="Nova Transação"
                onAction={() => console.log("Navigate to new transaction")}
            />
         </SectionFadeIn>
      ) : !error && metrics ? (
        /* Main Content - Bento Grid Layout */
        <div className="space-y-6">
          {/* Row 1: Hero Balance Card */}
          <SectionFadeIn delay={0.1}>
            <HeroBalanceCard metrics={metrics} />
          </SectionFadeIn>

          {/* Row 2: Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionFadeIn delay={0.15}>
              <MetricCard
                title="Receitas"
                value={new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0
                }).format(metrics.totalIncome)}
                change={metrics.incomeChange}
                icon={TrendingUp}
                color="green"
                delay={0.2}
              />
            </SectionFadeIn>

            <SectionFadeIn delay={0.2}>
              <MetricCard
                title="Despesas"
                value={new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0
                }).format(metrics.totalExpenses)}
                change={metrics.expenseChange}
                icon={TrendingDown}
                color="rose"
                delay={0.25}
              />
            </SectionFadeIn>

            <SectionFadeIn delay={0.25}>
              <MetricCard
                title="Metas"
                value="75%"
                change={12.5}
                changeLabel="progresso mensal"
                icon={Target}
                color="purple"
                delay={0.3}
              />
            </SectionFadeIn>
          </div>

          {/* Row 3: Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             <SectionFadeIn delay={0.3}>
                <ExpenditureChartCard />
             </SectionFadeIn>
             <SectionFadeIn delay={0.35}>
                <CategoriesChartCard />
             </SectionFadeIn>
          </div>

          {/* Row 4: Recent Transactions */}
          <SectionFadeIn delay={0.4}>
            <div className="grid grid-cols-1">
              <RecentTransactionsCard transactions={recentTransactions} />
            </div>
          </SectionFadeIn>
        </div>
      ) : null}
    </div>
  )
}
