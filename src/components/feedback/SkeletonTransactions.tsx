import * as React from "react"
import { Skeleton } from "@/components/feedback/Skeleton"
import { ViewMode } from "@/lib/types/transactions"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface SkeletonTransactionsProps {
    viewMode?: ViewMode
}

export function SkeletonTransactions({ viewMode = "table" }: SkeletonTransactionsProps) {
    const items = Array.from({ length: 5 })

    if (viewMode === "table") {
        return (
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[120px]"><Skeleton className="h-4 w-20" /></TableHead>
                            <TableHead><Skeleton className="h-4 w-32" /></TableHead>
                            <TableHead><Skeleton className="h-4 w-24" /></TableHead>
                            <TableHead className="text-right"><Skeleton className="h-4 w-16 ml-auto" /></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((_, i) => (
                            <TableRow key={i}>
                                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                                <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                                <TableCell><Skeleton className="h-4 w-20 ml-auto" /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }

    if (viewMode === "compact") {
        return (
            <div className="space-y-1 border border-border rounded-md divide-y divide-border">
                {items.map((_, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-2.5">
                        <Skeleton className="h-3 w-16" />
                        <Skeleton className="h-4 flex-1" />
                        <Skeleton className="h-5 w-20 rounded-xl" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                ))}
            </div>
        )
    }

    // Mobile Card View
    return (
        <div className="space-y-4">
            {items.map((_, i) => (
                <Card key={i} className="border-border/50">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-5">
                            <Skeleton variant="circular" className="h-14 w-14" />
                            <div className="flex-1 space-y-3">
                                <Skeleton className="h-5 w-3/4" />
                                <div className="flex items-center gap-3">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-5 w-16 rounded-xl" />
                                </div>
                                <Skeleton className="h-6 w-32 ml-auto" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
