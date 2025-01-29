import { NextResponse } from "next/server"

/**
 * Returns a JSON response containing the demand prediction data for the next 12 months.
 * The data is a list of objects with two properties: `month` and `demand`.
 * The `month` property is a string representing the month of the year
 * (i.e. "Jan", "Feb", etc.), and the `demand` property is a number representing
 * the predicted demand for that month.
 */
export async function GET() {
  // In a real application, this data would come from a predictive model
  const demandPrediction = [
    { month: "Jan", demand: 100 },
    { month: "Feb", demand: 120 },
    { month: "Mar", demand: 130 },
    { month: "Apr", demand: 110 },
    { month: "May", demand: 150 },
    { month: "Jun", demand: 170 },
  ]

  return NextResponse.json(demandPrediction)
}

