export interface FoodItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  vegetarian: boolean
  popular?: boolean
}

export interface Category {
  id: string
  name: string
}

export interface CartItemType extends FoodItem {
  quantity: number
}

