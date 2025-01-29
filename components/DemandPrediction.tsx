"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface DemandData {
  month: string
  demand: number
}

  /**
   * Displays a line chart of demand prediction data for the next 12 months.
   *
   * The data is fetched from the "/api/demand-prediction" endpoint.
   *
   * @returns A JSX element representing the demand prediction chart.
   */
export default function DemandPrediction() {
  const [data, setData] = useState<DemandData[]>([])

  useEffect(() => {
    async function fetchDemandPrediction() {
      const response = await fetch("/api/demand-prediction")
      const demandData = await response.json()
      setData(demandData)
    }

    fetchDemandPrediction()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Demand Prediction</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="demand" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}

