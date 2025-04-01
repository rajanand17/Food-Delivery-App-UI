"use client"

import Image from "next/image"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { FoodItem } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

interface FoodCardProps {
  item: FoodItem
}

export function FoodCard({ item }: FoodCardProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    // Add a small delay to show the animation
    setTimeout(() => {
      addItem(item)
      setIsAdding(false)
    }, 300)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square">
        <Image
          src={item.image || "/placeholder.svg?height=200&width=200"}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {item.vegetarian && (
          <Badge variant="secondary" className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-100">
            Veg
          </Badge>
        )}
      </div>
      <CardContent className="p-3">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="font-semibold line-clamp-1">{item.name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
          </div>
          <div className="font-bold">{formatCurrency(item.price)}</div>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button onClick={handleAddToCart} className="w-full gap-2 text-sm" size="sm" disabled={isAdding}>
          <Plus className="h-4 w-4" />
          {isAdding ? "Adding..." : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}

