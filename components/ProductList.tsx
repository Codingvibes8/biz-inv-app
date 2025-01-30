"use client"
import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Wine {
  id: number
  name: string
  type: string
  region: string
  price: number
  stock: number
}

export default function ProductList() {
  const [wines, setWines] = useState<Wine[]>([])

  useEffect(() => {
    async function fetchWines() {
      const response = await fetch("/api/products")
      const wineData = await response.json()
      setWines(wineData)
    }

    fetchWines()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Wine Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Type</TableHead>
                <TableHead className="font-semibold">Region</TableHead>
                <TableHead className="font-semibold">Price</TableHead>
                <TableHead className="font-semibold">Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wines.map((wine) => (
                <TableRow key={wine.id}>
                  <TableCell className="font-medium">{wine.name}</TableCell>
                  <TableCell>{wine.type}</TableCell>
                  <TableCell>{wine.region}</TableCell>
                  <TableCell>${wine.price.toLocaleString()}</TableCell>
                  <TableCell>{wine.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}

