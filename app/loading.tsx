import { Skeleton } from "../components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-10">
      <Skeleton className="h-12 w-[200px]" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-[120px] w-full" />
        ))}
      </div>
      <Skeleton className="h-[300px] w-full" />
    </div>
  )
}