"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FoodCard } from "@/components/food-card"
import { CategoryFilter } from "@/components/category-filter"
import { useCart } from "@/lib/cart-context"
import type { FoodItem } from "@/lib/types"
import { CardSkeleton } from "@/components/ui/card-skeleton"
import { fetchFoodItems, fetchCategories } from "@/lib/api"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [foodItems, setFoodItems] = useState<FoodItem[]>([])
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { items } = useCart()

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const [itemsData, categoriesData] = await Promise.all([fetchFoodItems(), fetchCategories()])
        setFoodItems(itemsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Failed to fetch data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const filteredItems = selectedCategory ? foodItems.filter((item) => item.category === selectedCategory) : foodItems

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Our Menu</h1>
          <p className="text-muted-foreground">Delicious food made with fresh ingredients</p>
        </div>
        <Link href="/cart">
          <Button variant="outline" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Cart ({totalItems})
          </Button>
        </Link>
      </div>

      <div className="sticky top-4 z-10 bg-background pb-4 pt-2">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No items found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

