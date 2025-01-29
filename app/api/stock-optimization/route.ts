import { NextResponse } from "next/server"

export async function GET() {
  // In a real application, this data would come from an optimization algorithm
  const stockOptimization = [
    { id: 1, product: "Product A", currentStock: 50, recommendedStock: 75, action: "Increase" },
    { id: 2, product: "Product B", currentStock: 100, recommendedStock: 80, action: "Decrease" },
    { id: 3, product: "Product C", currentStock: 25, recommendedStock: 60, action: "Increase" },
    { id: 4, product: "Product D", currentStock: 75, recommendedStock: 70, action: "Maintain" },
    { id: 5, product: "Product E", currentStock: 40, recommendedStock: 55, action: "Increase" },
  ]

  return NextResponse.json(stockOptimization)
}

