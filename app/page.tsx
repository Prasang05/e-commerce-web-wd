"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { Store, Users, ShoppingBag, Heart } from "lucide-react"

const featuredVendors = [
  {
    id: 1,
    name: "Fresh Fruits & Vegetables",
    description: "Organic produce from local farms",
    category: "Groceries",
    image: "/fresh-fruits-and-vegetables-market-stall.jpg",
  },
  {
    id: 2,
    name: "Handmade Crafts",
    description: "Beautiful handcrafted items by local artisans",
    category: "Crafts",
    image: "/handmade-crafts-and-pottery-display.jpg",
  },
  {
    id: 3,
    name: "Local Bakery",
    description: "Fresh bread and pastries baked daily",
    category: "Food",
    image: "/local-bakery-with-fresh-bread-and-pastries.jpg",
  },
  {
    id: 4,
    name: "Traditional Clothing",
    description: "Authentic traditional wear and accessories",
    category: "Fashion",
    image: "/traditional-indian-clothing-store.png",
  },
]

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t("welcomeTitle")}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">{t("welcomeSubtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <ShoppingBag className="w-5 h-5 mr-2" />
                {t("shopNow")}
              </Button>
            </Link>
            <Link href="/vendor-signup">
              <Button size="lg" variant="outline">
                <Store className="w-5 h-5 mr-2" />
                {t("vendorSignup")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Community</h3>
              <p className="text-muted-foreground">Support your local vendors and strengthen community bonds</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-muted-foreground">Discover unique, high-quality products from trusted local vendors</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Shopping</h3>
              <p className="text-muted-foreground">
                Simple and intuitive shopping experience in your preferred language
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vendors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("featuredVendors")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVendors.map((vendor) => (
              <Card key={vendor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={vendor.image || "/placeholder.svg"}
                    alt={vendor.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{vendor.category}</Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{vendor.name}</CardTitle>
                  <CardDescription className="text-sm">{vendor.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/shop">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
