import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  return (
    <div className="relative w-full bg-primary/10 overflow-hidden">
      <div className="container py-6 md:py-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left z-10">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Limited Time Offer
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">30% OFF on your first order!</h1>
          <p className="text-muted-foreground max-w-md">
            Use code <span className="font-bold">WELCOME30</span> at checkout to get 30% off on your first order.
          </p>
          <Link href="/menu">
            <Button className="gap-2">
              Order Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Promotional food image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

