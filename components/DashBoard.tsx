"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
interface DashboardData {
  totalProducts: number
  lowStockItems: number
  overstockItems: number
  totalValue: number | null
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("/api/dashboard")
      const dashboardData = await response.json()
      setData(dashboardData)
    }

    fetchDashboardData()
  }, [])

  if (!data) return <div className="text-center">Loading...</div>

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      <Card className="dark:bg-[#493737]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Wines</CardTitle>
        </CardHeader>
        <CardContent >
          <div className="text-3xl font-bold">{data.totalProducts}</div>
        </CardContent>
      </Card>
      <Card className="dark:bg-[#493737]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Low Stock Wines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{data.lowStockItems}</div>
        </CardContent>
      </Card>
      <Card className="dark:bg-[#493737]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Overstock Wines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{data.overstockItems}</div>
        </CardContent>
      </Card>
      <Card className="dark:bg-[#493737]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
        </CardHeader>
        <CardContent>
  <div className="text-3xl font-bold">${data.totalValue?.toLocaleString()}</div>
</CardContent>
      </Card>
    </motion.div>
  )
}

