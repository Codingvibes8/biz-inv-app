import { NextResponse } from "next/server"

/**
 * Handles GET requests to retrieve a list of products.
 *
 * This function returns a JSON response containing an array of products, 
 * each with its id, name, current stock, and optimal stock level.
 *
 * @returns {NextResponse} A JSON response with the product data.
 */

export async function GET() {
  // In a real application, this data would come from a database
  const products = [
    { id: 1, name: "Product A", stock: 50, optimal: 75 },
    { id: 2, name: "Product B", stock: 100, optimal: 80 },
    { id: 3, name: "Product C", stock: 25, optimal: 60 },
    { id: 4, name: "Product D", stock: 75, optimal: 70 },
    { id: 5, name: "Product E", stock: 40, optimal: 55 },
  ]

  return NextResponse.json(products)
}

