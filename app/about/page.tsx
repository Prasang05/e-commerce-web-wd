"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { Users, Heart, Store, Globe } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{t("aboutTitle")}</h1>

        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t("aboutDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Community First</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in strengthening local communities by connecting neighbors with local vendors and promoting
                sustainable shopping practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Quality Products</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every vendor on our platform is carefully selected to ensure you get the highest quality products and
                services from trusted local businesses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Support Local Business</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By shopping with us, you're directly supporting local entrepreneurs and helping small businesses thrive
                in your community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Multilingual Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our platform supports multiple languages including Hindi, English, and Marathi to serve our diverse
                community better.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground text-lg">
              To create a thriving ecosystem where local vendors can easily reach customers, and community members can
              discover amazing products while supporting their neighbors. We're building more than just a marketplace –
              we're building stronger communities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
