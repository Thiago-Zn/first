"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils/cn"

interface TransactionPaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function TransactionPagination({
    currentPage,
    totalPages,
    onPageChange,
}: TransactionPaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    
    // Show only 5 pages at a time
    const visiblePages = pages.slice(
        Math.max(0, currentPage - 3),
        Math.min(totalPages, currentPage + 2)
    )

    return (
        <div className="flex items-center justify-between px-4 py-3 bg-card rounded-xl border">
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="gap-1"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Anterior
                </Button>
            </div>

            <div className="flex items-center gap-1">
                {currentPage > 3 && (
                    <>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onPageChange(1)}
                            className="w-9 h-9"
                        >
                            1
                        </Button>
                        {currentPage > 4 && (
                            <span className="px-2 text-muted-foreground">...</span>
                        )}
                    </>
                )}

                {visiblePages.map((page) => (
                    <Button
                        key={page}
                        variant={page === currentPage ? "default" : "outline"}
                        size="sm"
                        onClick={() => onPageChange(page)}
                        className={cn(
                            "w-9 h-9",
                            page === currentPage && "bg-primary text-primary-foreground"
                        )}
                    >
                        {page}
                    </Button>
                ))}

                {currentPage < totalPages - 2 && (
                    <>
                        {currentPage < totalPages - 3 && (
                            <span className="px-2 text-muted-foreground">...</span>
                        )}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onPageChange(totalPages)}
                            className="w-9 h-9"
                        >
                            {totalPages}
                        </Button>
                    </>
                )}
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden sm:block">
                    Página {currentPage} de {totalPages}
                </span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="gap-1"
                >
                    Próxima
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

