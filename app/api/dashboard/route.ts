import { NextResponse } from "next/server"

/**
 * Handles GET requests to retrieve a summary of the products in the database.
 *
 * Returns a JSON response containing the following properties:
 *
 * - `totalProducts`: the total number of products
 * - `lowStockItems`: the number of products with low stock
 * - `overstockItems`: the number of products with overstock
 * - `totalValue`: the total value of all products
 *
 * @returns {NextResponse} A JSON response with the dashboard data.
 */
export async function GET() {
  // In a real application, this data would come from a database
  const dashboardData = {
    totalProducts: 120,
    lowStockItems: 18,
    overstockItems: 7,
    totalValue: 62000,
  }

  return NextResponse.json(dashboardData)
}

