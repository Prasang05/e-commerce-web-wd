"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">LocalVendors</h3>
            <p className="text-muted-foreground">{t("aboutDescription")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("contact")}</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: info@localvendors.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("about")}
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("contact")}
              </a>
              <a href="/vendor-signup" className="block text-muted-foreground hover:text-primary transition-colors">
                {t("vendorSignup")}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 LocalVendors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
