"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface CategoryFilterProps {
  categories: { id: string; name: string }[]
  selectedCategory?: string | null
  onCategoryChange?: (category: string | null) => void
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const handleCategoryClick = (category: string) => {
    if (onCategoryChange) {
      if (selectedCategory === category) {
        onCategoryChange(null)
      } else {
        onCategoryChange(category)
      }
    }
  }

  const handleAllClick = () => {
    if (onCategoryChange) {
      onCategoryChange(null)
    }
  }

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-2 p-1">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={handleAllClick}
          className="rounded-full"
        >
          All
        </Button>

        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryClick(category.id)}
            className="rounded-full"
          >
            {category.name}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

