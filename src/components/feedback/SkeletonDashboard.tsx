import React from "react"
import { Skeleton } from "./Skeleton"

export function SkeletonDashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Balance Card Skeleton */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-50/50 via-yellow-50/50 to-orange-50/50 p-8 border border-amber-100">
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-12 w-48" />
          </div>
          <Skeleton variant="circular" className="h-14 w-14" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-40 rounded-full" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </div>

      {/* Metric Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 w-32" />
              </div>
              <Skeleton variant="circular" className="h-12 w-12" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Transactions Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Chart Skeleton */}
        <div className="lg:col-span-3 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="mb-6 space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-8 w-40" />
          </div>
          <Skeleton className="h-[240px] w-full rounded-lg" />
          <div className="flex justify-between mt-4 px-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <Skeleton key={i} className="h-6 w-8 rounded-full" />
            ))}
          </div>
        </div>

        {/* Transactions Skeleton */}
        <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton variant="circular" className="h-10 w-10" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
