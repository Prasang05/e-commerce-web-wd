"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { useCart, type Product } from "@/lib/cart-context"
import { Plus, Minus } from "lucide-react"

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 120,
    vendor: "Fresh Fruits & Vegetables",
    description: "Crisp and sweet apples from local orchards",
    image: "/fresh-red-apples.png",
  },
  {
    id: 2,
    name: "Handwoven Scarf",
    price: 850,
    vendor: "Handmade Crafts",
    description: "Beautiful handwoven scarf with traditional patterns",
    image: "/handwoven-traditional-scarf.jpg",
  },
  {
    id: 3,
    name: "Fresh Bread",
    price: 45,
    vendor: "Local Bakery",
    description: "Freshly baked bread made with organic flour",
    image: "/fresh-baked-bread-loaf.jpg",
  },
  {
    id: 4,
    name: "Organic Tomatoes",
    price: 80,
    vendor: "Fresh Fruits & Vegetables",
    description: "Organic tomatoes grown without pesticides",
    image: "/fresh-organic-tomatoes.png",
  },
  {
    id: 5,
    name: "Clay Pottery",
    price: 450,
    vendor: "Handmade Crafts",
    description: "Traditional clay pottery for home decoration",
    image: "/traditional-clay-pottery.jpg",
  },
  {
    id: 6,
    name: "Croissants",
    price: 25,
    vendor: "Local Bakery",
    description: "Buttery and flaky croissants baked fresh daily",
    image: "/fresh-croissants.jpg",
  },
  {
    id: 7,
    name: "Traditional Kurta",
    price: 1200,
    vendor: "Traditional Clothing",
    description: "Comfortable cotton kurta with embroidered details",
    image: "/traditional-indian-kurta.jpg",
  },
  {
    id: 8,
    name: "Organic Honey",
    price: 350,
    vendor: "Fresh Fruits & Vegetables",
    description: "Pure organic honey from local beekeepers",
    image: "/organic-honey-jar.jpg",
  },
]

export default function ShopPage() {
  const { t } = useLanguage()
  const { addToCart } = useCart()
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})

  const updateQuantity = (productId: number, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }))
  }

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1
    addToCart(product, quantity)
    setQuantities((prev) => ({ ...prev, [product.id]: 1 }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t("allProducts")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {product.vendor}
                </Badge>
                <span className="text-lg font-bold text-primary">₹{product.price}</span>
              </div>
              <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
              <CardDescription className="text-sm mb-4">{product.description}</CardDescription>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{t("quantity")}:</span>
                  <div className="flex items-center space-x-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(product.id, -1)}
                      disabled={(quantities[product.id] || 1) <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      value={quantities[product.id] || 1}
                      onChange={(e) =>
                        setQuantities((prev) => ({
                          ...prev,
                          [product.id]: Math.max(1, Number.parseInt(e.target.value) || 1),
                        }))
                      }
                      className="w-16 text-center"
                    />
                    <Button size="sm" variant="outline" onClick={() => updateQuantity(product.id, 1)}>
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => handleAddToCart(product)}
              >
                {t("addToCart")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
