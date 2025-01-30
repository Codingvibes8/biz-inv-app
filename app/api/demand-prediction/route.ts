import { NextResponse } from "next/server"
import { supabase } from "../../../lib/supabase"

/**
 * Handles GET requests to retrieve demand predictions based on inventory history.
 *
 * Fetches inventory history from the "inventory_history" table, ordered by date.
 * Computes a simple demand prediction for each wine based on the average monthly
 * decrease in inventory quantity. Returns the predicted demand for each wine.
 *
 * @returns {NextResponse} A JSON response with the predicted demand for each wine,
 * or an error message with a 500 status code if the data fetching fails.
 */

export async function GET() {
  const { data: inventoryHistory, error } = await supabase
    .from("inventory_history")
    .select("*")
    .order("date", { ascending: true })

  if (error) {
    return NextResponse.json({ error: "Error fetching inventory history" }, { status: 500 })
  }

  // Simple demand prediction based on average monthly decrease
  const demandPrediction: { [wineId: string]: { date: string; quantity: number }[] } = inventoryHistory.reduce((acc, curr) => {
    if (!acc[curr.wine_id]) {
      acc[curr.wine_id] = []
    }
    acc[curr.wine_id].push(curr)
    return acc
  }, {})

  const predictions = Object.entries(demandPrediction).map(([wineId, history]) => {
    const sortedHistory = history.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const monthlyDecrease =
      (sortedHistory[0].quantity - sortedHistory[sortedHistory.length - 1].quantity) / (sortedHistory.length - 1)
    return {
      wineId: Number.parseInt(wineId),
      predictedDemand: Math.round(monthlyDecrease),
    }
  })

  return NextResponse.json(predictions)
}

