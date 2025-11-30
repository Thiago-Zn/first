"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { LayoutGrid, AlignLeft, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils/cn"

type ViewMode = "table" | "compact" | "mobile"
type SortOption = "recent" | "oldest" | "highest" | "lowest"
type FilterOption = "all" | "income" | "expense"

interface TransactionListToolbarProps {
    viewMode: ViewMode
    onViewModeChange: (mode: ViewMode) => void
    sortBy: SortOption
    onSortChange: (sort: SortOption) => void
    filterBy: FilterOption
    onFilterChange: (filter: FilterOption) => void
}

export function TransactionListToolbar({
    viewMode,
    onViewModeChange,
    sortBy,
    onSortChange,
    filterBy,
    onFilterChange,
}: TransactionListToolbarProps) {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-card rounded-xl border">
            {/* Left side - Sort and Filter */}
            <div className="flex flex-wrap items-center gap-3">
                {/* Sort Dropdown */}
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value as SortOption)}
                    className="h-10 px-4 rounded-lg border border-border bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="recent">Mais recentes</option>
                    <option value="oldest">Mais antigas</option>
                    <option value="highest">Maior valor</option>
                    <option value="lowest">Menor valor</option>
                </select>

                {/* Filter Buttons */}
                <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
                    <button
                        onClick={() => onFilterChange("all")}
                        className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                            filterBy === "all"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Todas
                    </button>
                    <button
                        onClick={() => onFilterChange("income")}
                        className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                            filterBy === "income"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Entradas
                    </button>
                    <button
                        onClick={() => onFilterChange("expense")}
                        className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                            filterBy === "expense"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        Saídas
                    </button>
                </div>
            </div>

            {/* Right side - View Mode */}
            <div className="flex items-center gap-2 bg-primary/10 p-1 rounded-lg">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onViewModeChange("mobile")}
                    className={cn(
                        "h-9 w-9",
                        viewMode === "mobile" && "bg-primary text-primary-foreground shadow-sm"
                    )}
                    title="Mobile"
                >
                    <Smartphone className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onViewModeChange("compact")}
                    className={cn(
                        "h-9 w-9",
                        viewMode === "compact" && "bg-primary text-primary-foreground shadow-sm"
                    )}
                    title="Compacta"
                >
                    <AlignLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onViewModeChange("table")}
                    className={cn(
                        "h-9 w-9",
                        viewMode === "table" && "bg-primary text-primary-foreground shadow-sm"
                    )}
                    title="Tabela"
                >
                    <LayoutGrid className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

