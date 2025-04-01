"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { fetchCategories } from "@/lib/api"

export function CategorySection() {
  const [categories, setCategories] = useState<{ id: string; name: string; image: string }[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories()
        // Add images to categories
        const categoriesWithImages = data.map((cat) => ({
          ...cat,
          image: `/placeholder.svg?height=80&width=80&text=${cat.name}`,
        }))
        setCategories(categoriesWithImages)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCategories()
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/menu?category=${category.id}`}
          className="flex flex-col items-center p-4 bg-background rounded-lg border hover:border-primary transition-colors"
        >
          <div className="relative h-16 w-16 mb-2">
            <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-contain" />
          </div>
          <span className="text-sm font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

