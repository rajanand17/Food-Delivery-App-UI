"use client"

import { useEffect, useState } from "react"
import { FoodCard } from "./food-card"
import type { FoodItem } from "@/lib/types"
import { fetchFeaturedItems } from "@/lib/api"
import { CardSkeleton } from "./ui/card-skeleton"

export function FeaturedItemsSection() {
  const [featuredItems, setFeaturedItems] = useState<FoodItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedItems = async () => {
      try {
        const data = await fetchFeaturedItems()
        setFeaturedItems(data)
      } catch (error) {
        console.error("Failed to fetch featured items:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadFeaturedItems()
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {featuredItems.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  )
}

