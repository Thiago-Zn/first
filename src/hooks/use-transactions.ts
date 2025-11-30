import { useState, useEffect, useCallback } from "react"
import { api } from "@/services/api"
import { Transaction, TransactionSortOption } from "@/lib/types/transactions"

interface UseTransactionsResult {
  transactions: Transaction[]
  totalCount: number
  totalPages: number
  isLoading: boolean
  error: Error | null
  // State controls
  currentPage: number
  sortBy: TransactionSortOption
  setPage: (page: number) => void
  setSort: (sort: TransactionSortOption) => void
  // Debug
  simulateError: () => void
  simulateEmpty: () => void
}

export function useTransactions(pageSize: number = 10): UseTransactionsResult {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState<TransactionSortOption>("date_desc")
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Debug flags
  const [forceError, setForceError] = useState(false)
  const [forceEmpty, setForceEmpty] = useState(false)
  const [trigger, setTrigger] = useState(0) // To force refetch

  const fetchTransactions = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    
    try {
       if (forceError) {
          await new Promise(r => setTimeout(r, 600))
          throw new Error("Erro simulado em transações")
       }

       if (forceEmpty) {
           await new Promise(r => setTimeout(r, 600))
           setTransactions([])
           setTotalCount(0)
           setTotalPages(0)
           setIsLoading(false)
           return
       }

       const result = await api.transactions.getAll(currentPage, pageSize, sortBy)
       setTransactions(result.data)
       setTotalCount(result.total)
       setTotalPages(result.totalPages)
    } catch (err) {
       setError(err instanceof Error ? err : new Error("Erro ao buscar transações"))
    } finally {
       setIsLoading(false)
    }
  }, [currentPage, pageSize, sortBy, forceError, forceEmpty])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions, trigger])

  const setPage = (page: number) => {
      setCurrentPage(page)
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  }

  const setSort = (option: TransactionSortOption) => {
      setSortBy(option)
      setCurrentPage(1) // Reset to page 1 on sort change
  }
  
  const simulateError = () => {
      setForceError(prev => !prev)
      setTrigger(prev => prev + 1)
  }

  const simulateEmpty = () => {
      setForceEmpty(prev => !prev)
      setTrigger(prev => prev + 1)
  }

  return {
    transactions,
    totalCount,
    totalPages,
    isLoading,
    error,
    currentPage,
    sortBy,
    setPage,
    setSort,
    simulateError,
    simulateEmpty
  }
}

