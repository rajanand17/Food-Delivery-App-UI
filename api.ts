import type { FoodItem } from "./types"

// Mock data
const categories = [
  { id: "pizza", name: "Pizza" },
  { id: "burger", name: "Burgers" },
  { id: "pasta", name: "Pasta" },
  { id: "salad", name: "Salads" },
  { id: "dessert", name: "Desserts" },
  { id: "drink", name: "Drinks" },
]

const allItems: FoodItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=200&text=Pizza",
    category: "pizza",
    vegetarian: true,
    popular: true,
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description: "Pizza topped with pepperoni, cheese, and tomato sauce",
    price: 14.99,
    image: "/placeholder.svg?height=200&width=200&text=Pizza",
    category: "pizza",
    vegetarian: false,
    popular: true,
  },
  {
    id: "3",
    name: "Veggie Supreme Pizza",
    description: "Pizza loaded with bell peppers, onions, mushrooms, and olives",
    price: 13.99,
    image: "/placeholder.svg?height=200&width=200&text=Pizza",
    category: "pizza",
    vegetarian: true,
  },
  {
    id: "4",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
    price: 10.99,
    image: "/placeholder.svg?height=200&width=200&text=Burger",
    category: "burger",
    vegetarian: false,
    popular: true,
  },
  {
    id: "5",
    name: "Veggie Burger",
    description: "Plant-based patty with lettuce, tomato, onion, and vegan mayo",
    price: 11.99,
    image: "/placeholder.svg?height=200&width=200&text=Burger",
    category: "burger",
    vegetarian: true,
  },
  {
    id: "6",
    name: "Spaghetti Bolognese",
    description: "Spaghetti with rich meat sauce and parmesan cheese",
    price: 13.99,
    image: "/placeholder.svg?height=200&width=200&text=Pasta",
    category: "pasta",
    vegetarian: false,
  },
  {
    id: "7",
    name: "Fettuccine Alfredo",
    description: "Fettuccine pasta in creamy parmesan sauce",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=200&text=Pasta",
    category: "pasta",
    vegetarian: true,
  },
  {
    id: "8",
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan cheese with Caesar dressing",
    price: 8.99,
    image: "/placeholder.svg?height=200&width=200&text=Salad",
    category: "salad",
    vegetarian: true,
  },
  {
    id: "9",
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie with vanilla ice cream",
    price: 6.99,
    image: "/placeholder.svg?height=200&width=200&text=Dessert",
    category: "dessert",
    vegetarian: true,
    popular: true,
  },
  {
    id: "10",
    name: "Soft Drink",
    description: "Choice of Coke, Sprite, or Fanta",
    price: 2.99,
    image: "/placeholder.svg?height=200&width=200&text=Drink",
    category: "drink",
    vegetarian: true,
  },
]

// Simulate API calls with delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchCategories() {
  await delay(800) // Simulate network delay
  return categories
}

export async function fetchFoodItems() {
  await delay(1000) // Simulate network delay
  return allItems
}

export async function fetchFeaturedItems() {
  await delay(800) // Simulate network delay
  return allItems.filter((item) => item.popular)
}

