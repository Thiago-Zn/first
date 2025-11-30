import { useState, useEffect, useCallback } from "react"
import { api, DashboardMetrics } from "@/services/api"
import { Transaction } from "@/lib/types/transactions"

interface UseDashboardResult {
  metrics: DashboardMetrics | null
  recentTransactions: Transaction[]
  isLoading: boolean
  error: Error | null
  refetch: () => void
  // Debug utilities
  simulateError: () => void
  simulateEmpty: () => void
}

export function useDashboard(): UseDashboardResult {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null)
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  // Debug states
  const [forceError, setForceError] = useState(false)
  const [forceEmpty, setForceEmpty] = useState(false)
  const [trigger, setTrigger] = useState(0)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      if (forceError) {
        await new Promise(r => setTimeout(r, 600))
        throw new Error("Erro simulado no dashboard")
      }

      if (forceEmpty) {
         await new Promise(r => setTimeout(r, 600))
         setMetrics(null)
         setRecentTransactions([])
         setIsLoading(false)
         return
      }

      const [metricsData, transactionsData] = await Promise.all([
        api.dashboard.getMetrics(),
        api.dashboard.getRecentTransactions()
      ])

      setMetrics(metricsData)
      setRecentTransactions(transactionsData)
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Erro desconhecido"))
    } finally {
      setIsLoading(false)
    }
  }, [forceError, forceEmpty])

  useEffect(() => {
    fetchData()
  }, [fetchData, trigger])

  const refetch = () => setTrigger(prev => prev + 1)
  const simulateError = () => {
      setForceError(prev => !prev)
      setTrigger(prev => prev + 1) // Force re-run
  }
  const simulateEmpty = () => {
      setForceEmpty(prev => !prev)
      setTrigger(prev => prev + 1) // Force re-run
  }

  return {
    metrics,
    recentTransactions,
    isLoading,
    error,
    refetch,
    simulateError,
    simulateEmpty
  }
}

