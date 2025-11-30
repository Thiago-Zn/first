"use client"

import * as React from "react"
import { useTransactions } from "@/hooks/use-transactions"
import { TransactionListToolbar } from "./_components/TransactionListToolbar"
import { TableTransactionList } from "./_components/TableTransactionList"
import { CompactTransactionList } from "./_components/CompactTransactionList"
import { MobileTransactionList } from "./_components/MobileTransactionList"
import { TransactionPagination } from "./_components/TransactionPagination"
import { SkeletonTransactions } from "@/components/feedback/SkeletonTransactions"
import { ErrorBanner } from "@/components/feedback/ErrorBanner"
import { EmptyState } from "@/components/feedback/EmptyState"
import { Wallet } from "lucide-react"
import { Transaction } from "@/lib/types/transaction"

type ViewMode = "table" | "compact" | "mobile"
type SortOption = "recent" | "oldest" | "highest" | "lowest"
type FilterOption = "all" | "income" | "expense"

export default function TransactionsPage() {
    const { transactions, isLoading, error } = useTransactions()
    const [viewMode, setViewMode] = React.useState<ViewMode>("table")
    const [sortBy, setSortBy] = React.useState<SortOption>("recent")
    const [filterBy, setFilterBy] = React.useState<FilterOption>("all")
    const [currentPage, setCurrentPage] = React.useState(1)
    const itemsPerPage = 10

    if (isLoading) {
        return <SkeletonTransactions />
    }

    if (error) {
        return (
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Todas as Transações</h1>
                    <p className="text-muted-foreground mt-2">Gerencie suas transações</p>
                </div>
                <ErrorBanner
                    message="Não foi possível carregar as transações. Verifique sua conexão."
                />
            </div>
        )
    }

    // Filter transactions
    let filteredTransactions = transactions.filter((t): t is Transaction & { type: 'income' | 'expense' } => 
        t.type === 'income' || t.type === 'expense'
    )

    if (filterBy !== "all") {
        filteredTransactions = filteredTransactions.filter(t => t.type === filterBy)
    }

    // Sort transactions
    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
        switch (sortBy) {
            case "recent":
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            case "oldest":
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            case "highest":
                return b.amount - a.amount
            case "lowest":
                return a.amount - b.amount
            default:
                return 0
        }
    })

    // Paginate
    const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedTransactions = sortedTransactions.slice(startIndex, endIndex)

    if (!transactions || transactions.length === 0) {
        return (
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Todas as Transações</h1>
                    <p className="text-muted-foreground mt-2">Suas transações aparecerão aqui</p>
                </div>
                <EmptyState
                    title="Nenhuma transação encontrada"
                    description="Comece adicionando sua primeira transação."
                    icon={Wallet}
                />
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Todas as Transações</h1>
                <p className="text-muted-foreground mt-2">
                    Mostrando {startIndex + 1}-{Math.min(endIndex, sortedTransactions.length)} de {sortedTransactions.length} registros
                </p>
            </div>

            {/* Toolbar */}
            <TransactionListToolbar
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                sortBy={sortBy}
                onSortChange={setSortBy}
                filterBy={filterBy}
                onFilterChange={setFilterBy}
            />

            {/* Transaction List */}
            {viewMode === "table" && (
                <TableTransactionList transactions={paginatedTransactions} />
            )}
            {viewMode === "compact" && (
                <CompactTransactionList transactions={paginatedTransactions} />
            )}
            {viewMode === "mobile" && (
                <MobileTransactionList transactions={paginatedTransactions} />
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <TransactionPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    )
}
