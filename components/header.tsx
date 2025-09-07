"use client"

import Link from "next/link"
import { ShoppingCart, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const { getTotalItems } = useCart()

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "mr", name: "मराठी" },
  ]

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            LocalVendors
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t("home")}
            </Link>
            <Link href="/shop" className="text-foreground hover:text-primary transition-colors">
              {t("shop")}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t("about")}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t("contact")}
            </Link>
            <Link href="/vendor-signup" className="text-foreground hover:text-primary transition-colors">
              {t("vendorSignup")}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  {languages.find((lang) => lang.code === language)?.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as "en" | "hi" | "mr")}>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/cart" className="relative">
              <Button variant="outline" size="sm">
                <ShoppingCart className="w-4 h-4" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link href="/user-signup">
              <Button variant="outline" size="sm">
                {t("userSignup")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
