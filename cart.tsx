"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart-item"
import { useCart } from "@/lib/cart-context"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"

export default function CartPage() {
  const { items, updateItemQuantity, removeItem, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // 10% tax
  const deliveryFee = subtotal > 0 ? 2.99 : 0
  const total = subtotal + tax + deliveryFee

  const handleCheckout = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/checkout"
    }, 1000)
  }

  return (
    <div className="container py-6">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/menu">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Continue Shopping
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">Your Cart</h1>
            {items.length > 0 && (
              <Button variant="outline" size="sm" className="gap-1 text-destructive" onClick={() => clearCart()}>
                <Trash2 className="h-4 w-4" /> Clear Cart
              </Button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12 border rounded-lg">
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-4">Add some delicious items to your cart</p>
              <Link href="/menu">
                <Button>Browse Menu</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} onUpdateQuantity={updateItemQuantity} onRemove={removeItem} />
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-4 space-y-4 sticky top-4">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span>{formatCurrency(deliveryFee)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <Button className="w-full" size="lg" disabled={items.length === 0 || isLoading} onClick={handleCheckout}>
              {isLoading ? "Processing..." : "Proceed to Checkout"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Taxes and delivery fees are calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

