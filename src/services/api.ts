import { Transaction, TransactionSortOption } from "@/lib/types/transactions"
import { getPaginatedTransactions } from "@/lib/mock/transactions"

// --- Types ---

export interface DashboardMetrics {
  totalIncome: number
  totalExpenses: number
  balance: number
  incomeChange: number // percentage
  expenseChange: number // percentage
  balanceChange: number // percentage
}

export interface UserSettings {
  name: string
  email: string
  notifications: boolean
}

// --- Mock Data ---

const MOCK_METRICS: DashboardMetrics = {
  totalIncome: 6200.00,
  totalExpenses: 2400.00,
  balance: 3800.00,
  incomeChange: 20.1,
  expenseChange: 4,
  balanceChange: 12
}

const MOCK_USER_SETTINGS: UserSettings = {
  name: "Usuário Exemplo",
  email: "usuario@exemplo.com",
  notifications: true
}

// --- Service Functions ---

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
  dashboard: {
    getMetrics: async (): Promise<DashboardMetrics> => {
      await delay(800)
      return MOCK_METRICS
    },
    getRecentTransactions: async (): Promise<Transaction[]> => {
       // Reusing existing mock logic but limiting to 5
       const result = await getPaginatedTransactions(1, 5, "date_desc")
       return result.data
    }
  },
  
  transactions: {
    getAll: async (page: number, pageSize: number, sortBy: TransactionSortOption) => {
        // Delay is already handled inside getPaginatedTransactions but we can standardize here if needed
        return getPaginatedTransactions(page, pageSize, sortBy)
    }
  },

  settings: {
    get: async (): Promise<UserSettings> => {
      await delay(600)
      return MOCK_USER_SETTINGS
    },
    update: async (data: Partial<UserSettings>): Promise<UserSettings> => {
      await delay(1500)
      // Simulate random error for robustness testing
      if (Math.random() > 0.9) {
        throw new Error("Falha ao salvar configurações (erro simulado)")
      }
      return { ...MOCK_USER_SETTINGS, ...data }
    }
  }
}

