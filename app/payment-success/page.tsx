"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { CheckCircle, Home, ShoppingBag } from "lucide-react"

export default function PaymentSuccessPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-600">{t("paymentSuccess")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{t("orderPlaced")}</p>
            <p className="text-muted-foreground">{t("thankYou")}</p>
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/">
                <Button className="w-full bg-transparent" variant="outline">
                  <Home className="w-4 h-4 mr-2" />
                  {t("home")}
                </Button>
              </Link>
              <Link href="/shop">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
