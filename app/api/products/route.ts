import { NextResponse } from "next/server"
import { supabase } from "../../../lib/supabase"

/**
 * Handles GET requests to retrieve a list of all products.
 *
 * @returns A JSON response containing all products, or an error message with a 500 status code.
 */
export async function GET() {
  const { data: wines, error } = await supabase.from("wines").select("*")

  if (error) {
    return NextResponse.json({ error: "Error fetching wines" }, { status: 500 })
  }

  return NextResponse.json(wines)
}

