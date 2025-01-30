import "./globals.css"

import { Inter } from "next/font/google"
import ThemeProvider  from "../components/theme-provider"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import React from "react"
import { Suspense } from "react"
import Loading from "./loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Inventory Management App",
  description: "Predict demand and optimize stock levels",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col px-8 md:px-16 lg:px-32">
            <Header />
            <main className="flex-1">
              <div className="container py-6">
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

