export function CardSkeleton() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="aspect-square bg-muted animate-pulse" />
      <div className="p-3 space-y-3">
        <div className="flex justify-between">
          <div className="h-4 bg-muted animate-pulse rounded w-2/3" />
          <div className="h-4 bg-muted animate-pulse rounded w-1/4" />
        </div>
        <div className="h-3 bg-muted animate-pulse rounded w-full" />
        <div className="h-8 bg-muted animate-pulse rounded w-full mt-2" />
      </div>
    </div>
  )
}

