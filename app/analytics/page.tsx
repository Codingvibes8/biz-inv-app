import DemandPrediction from "@/components/DemandPrediction"
import StockOptimization from "@/components/StockOptimization"

/**
 * The analytics page component.
 *
 * This component displays two charts: a line chart of demand prediction data for the next 12 months,
 * and a table of stock optimization data for products.
 *
 * @returns The AnalyticsPage component.
 */
export default function AnalyticsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <DemandPrediction />
        <StockOptimization />
      </div>
    </div>
  )
}

