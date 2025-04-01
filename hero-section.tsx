import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-muted py-12 md:py-24">
      <div className="container flex flex-col items-center text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Delicious Food <br className="hidden sm:inline" />
            Delivered to Your Door
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Order your favorite meals from our menu and enjoy a fast delivery right to your doorstep
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/menu">
            <Button size="lg" className="gap-2">
              Order Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            View Specials
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg w-full mt-8">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold">15-30</div>
            <div className="text-sm text-muted-foreground">Min Delivery</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold">200+</div>
            <div className="text-sm text-muted-foreground">Menu Items</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

