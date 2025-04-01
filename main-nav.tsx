"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"
import { ModeToggle } from "./mode-toggle"

export function MainNav() {
  const pathname = usePathname()
  const { items } = useCart()

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/menu",
      label: "Menu",
      active: pathname === "/menu",
    },
    {
      href: "/cart",
      label: "Cart",
      active: pathname === "/cart",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="grid gap-6 text-lg font-medium">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`${
                    route.active ? "text-foreground" : "text-muted-foreground"
                  } hover:text-foreground transition-colors`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">FoodDelivery</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`${
                route.active ? "text-foreground" : "text-muted-foreground"
              } hover:text-foreground transition-colors`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 ml-auto">
          <ModeToggle />
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

