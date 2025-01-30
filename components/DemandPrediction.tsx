"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface DemandPrediction {
  wineId: number
  predictedDemand: number
}

export default function DemandPrediction() {
  const [data, setData] = useState<DemandPrediction[]>([])

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
            <BarChart data={data}>
              <XAxis dataKey="wineId" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="predictedDemand" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}

