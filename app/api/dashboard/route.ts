import { NextResponse } from "next/server"
import { supabase } from "../../../lib/supabase"

  /**
   * Fetches the dashboard data.
   * @returns A JSON response with the following properties:
   * - totalProducts: The total number of products.
   * - lowStockItems: The number of products with low stock.
   * - overstockItems: The number of products with overstock.
   * - totalValue: The total value of all products.
   */

  
export async function GET() {
  const { data: wines, error: winesError } = await supabase.from("wines").select("*")

  if (winesError) {
    return NextResponse.json({ error: "Error fetching wines" }, { status: 500 })
  }

  const totalProducts = wines.length
  const totalValue = wines.reduce((sum, wine) => sum + wine.price * wine.stock, 0)
  const lowStockItems = wines.filter((wine) => wine.stock < 20).length
  const overstockItems = wines.filter((wine) => wine.stock > 100).length

  const dashboardData = {
    totalProducts,
    lowStockItems,
    overstockItems,
    totalValue,
  }

  return NextResponse.json(dashboardData)
}




