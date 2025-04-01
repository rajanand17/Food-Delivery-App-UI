import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CategorySection } from "@/components/category-section"
import { PromoBanner } from "@/components/promo-banner"
import { FeaturedItemsSection } from "@/components/featured-items-section"
import { CardSkeleton } from "@/components/ui/card-skeleton"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoBanner />

      <section className="container py-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Featured Items</h2>
            <p className="text-muted-foreground">Our most popular dishes that customers love</p>
          </div>
          <Link href="/menu">
            <Button variant="outline" className="gap-1">
              View Full Menu <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <FeaturedItemsSection />
        </Suspense>
      </section>

      <section className="bg-muted py-8">
        <div className="container space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Browse by Category</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Find exactly what you're craving from our diverse categories
            </p>
          </div>

          <Suspense fallback={<div className="h-24 bg-muted animate-pulse rounded-md" />}>
            <CategorySection />
          </Suspense>

          <div className="flex justify-center mt-8">
            <Link href="/menu">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="h-5 w-5" />
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

