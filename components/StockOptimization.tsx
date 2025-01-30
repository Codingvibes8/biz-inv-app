"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface OptimizationData {
  id: number
  product: string
  currentStock: number
  recommendedStock: number
  action: string
}

export default function StockOptimization() {
  const [optimizationData, setOptimizationData] = useState<OptimizationData[]>([])

  useEffect(() => {
    async function fetchStockOptimization() {
      const response = await fetch("/api/stock-optimization")
      const data = await response.json()
      setOptimizationData(data)
    }

    fetchStockOptimization()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Stock Optimization</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Wine</TableHead>
                <TableHead className="font-semibold">Current Stock</TableHead>
                <TableHead className="font-semibold">Recommended Stock</TableHead>
                <TableHead className="font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {optimizationData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell>{item.currentStock}</TableCell>
                  <TableCell>{item.recommendedStock}</TableCell>
                  <TableCell>{item.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}

