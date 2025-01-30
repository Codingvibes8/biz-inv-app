import { NextResponse } from "next/server"
import { supabase } from "../../../lib/supabase"

export async function GET() {
  const { data: wines, error: winesError } = await supabase.from("wines").select("*")

  if (winesError) {
    return NextResponse.json({ error: "Error fetching wines" }, { status: 500 })
  }

  const { data: demandPredictions, error: demandError } = await supabase.from("demand_predictions").select("*")

  if (demandError) {
    return NextResponse.json({ error: "Error fetching demand predictions" }, { status: 500 })
  }

  const stockOptimization = wines.map((wine) => {
    const prediction = demandPredictions.find((p) => p.wine_id === wine.id)
    const predictedDemand = prediction ? prediction.predicted_demand : 0
    const optimalStock = Math.round(predictedDemand * 1.2) // 20% buffer

    let action
    if (wine.stock < optimalStock * 0.8) {
      action = "Increase"
    } else if (wine.stock > optimalStock * 1.2) {
      action = "Decrease"
    } else {
      action = "Maintain"
    }

    return {
      id: wine.id,
      product: wine.name,
      currentStock: wine.stock,
      recommendedStock: optimalStock,
      action,
    }
  })

  return NextResponse.json(stockOptimization)
}

