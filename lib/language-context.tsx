"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "hi" | "mr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact",
    vendorSignup: "Vendor Signup",
    userSignup: "User Signup",
    login: "Login",
    cart: "Cart",

    // Home page
    welcomeTitle: "Welcome to Local Vendors Marketplace",
    welcomeSubtitle: "Discover amazing products from local vendors in your community",
    featuredVendors: "Featured Vendors",
    shopNow: "Shop Now",

    // Shop page
    allProducts: "All Products",
    addToCart: "Add to Cart",
    quantity: "Quantity",
    price: "Price",

    // Cart
    cartItems: "Cart Items",
    total: "Total",
    checkout: "Checkout",
    emptyCart: "Your cart is empty",

    // Forms
    name: "Name",
    email: "Email",
    password: "Password",
    phone: "Phone",
    address: "Address",
    businessName: "Business Name",
    businessDescription: "Business Description",
    submit: "Submit",

    // Success messages
    paymentSuccess: "Payment Successful!",
    orderPlaced: "Your order has been placed successfully.",
    thankYou: "Thank you for shopping with us!",

    // About page
    aboutTitle: "About Us",
    aboutDescription:
      "We connect local vendors with customers in the community, promoting local business and sustainable shopping.",

    // Contact page
    contactTitle: "Contact Us",
    contactDescription: "Get in touch with us for any questions or support.",
    message: "Message",
    sendMessage: "Send Message",
  },
  hi: {
    // Navigation
    home: "होम",
    shop: "दुकान",
    about: "हमारे बारे में",
    contact: "संपर्क",
    vendorSignup: "विक्रेता साइनअप",
    userSignup: "उपयोगकर्ता साइनअप",
    login: "लॉगिन",
    cart: "कार्ट",

    // Home page
    welcomeTitle: "स्थानीय विक्रेता बाज़ार में आपका स्वागत है",
    welcomeSubtitle: "अपने समुदाय के स्थानीय विक्रेताओं से अद्भुत उत्पाद खोजें",
    featuredVendors: "विशेष विक्रेता",
    shopNow: "अभी खरीदें",

    // Shop page
    allProducts: "सभी उत्पाद",
    addToCart: "कार्ट में जोड़ें",
    quantity: "मात्रा",
    price: "कीमत",

    // Cart
    cartItems: "कार्ट आइटम",
    total: "कुल",
    checkout: "चेकआउट",
    emptyCart: "आपका कार्ट खाली है",

    // Forms
    name: "नाम",
    email: "ईमेल",
    password: "पासवर्ड",
    phone: "फोन",
    address: "पता",
    businessName: "व्यापार का नाम",
    businessDescription: "व्यापार का विवरण",
    submit: "जमा करें",

    // Success messages
    paymentSuccess: "भुगतान सफल!",
    orderPlaced: "आपका ऑर्डर सफलतापूर्वक दिया गया है।",
    thankYou: "हमारे साथ खरीदारी करने के लिए धन्यवाद!",

    // About page
    aboutTitle: "हमारे बारे में",
    aboutDescription: "हम स्थानीय विक्रेताओं को समुदाय के ग्राहकों से जोड़ते हैं, स्थानीय व्यापार और टिकाऊ खरीदारी को बढ़ावा देते हैं।",

    // Contact page
    contactTitle: "संपर्क करें",
    contactDescription: "किसी भी प्रश्न या सहायता के लिए हमसे संपर्क करें।",
    message: "संदेश",
    sendMessage: "संदेश भेजें",
  },
  mr: {
    // Navigation
    home: "मुख्यपृष्ठ",
    shop: "दुकान",
    about: "आमच्याबद्दल",
    contact: "संपर्क",
    vendorSignup: "विक्रेता नोंदणी",
    userSignup: "वापरकर्ता नोंदणी",
    login: "लॉगिन",
    cart: "कार्ट",

    // Home page
    welcomeTitle: "स्थानिक विक्रेता बाजारपेठेत आपले स्वागत",
    welcomeSubtitle: "आपल्या समुदायातील स्थानिक विक्रेत्यांकडून अद्भुत उत्पादने शोधा",
    featuredVendors: "वैशिष्ट्यीकृत विक्रेते",
    shopNow: "आता खरेदी करा",

    // Shop page
    allProducts: "सर्व उत्पादने",
    addToCart: "कार्टमध्ये जोडा",
    quantity: "प्रमाण",
    price: "किंमत",

    // Cart
    cartItems: "कार्ट आयटम",
    total: "एकूण",
    checkout: "चेकआउट",
    emptyCart: "तुमचा कार्ट रिकामा आहे",

    // Forms
    name: "नाव",
    email: "ईमेल",
    password: "पासवर्ड",
    phone: "फोन",
    address: "पत्ता",
    businessName: "व्यवसायाचे नाव",
    businessDescription: "व्यवसायाचे वर्णन",
    submit: "सबमिट करा",

    // Success messages
    paymentSuccess: "पेमेंट यशस्वी!",
    orderPlaced: "तुमची ऑर्डर यशस्वीरित्या दिली गेली आहे.",
    thankYou: "आमच्यासोबत खरेदी केल्याबद्दल धन्यवाद!",

    // About page
    aboutTitle: "आमच्याबद्दल",
    aboutDescription: "आम्ही स्थानिक विक्रेत्यांना समुदायातील ग्राहकांशी जोडतो, स्थानिक व्यवसाय आणि शाश्वत खरेदीला प्रोत्साहन देतो.",

    // Contact page
    contactTitle: "संपर्क करा",
    contactDescription: "कोणत्याही प्रश्न किंवा सहाय्यासाठी आमच्याशी संपर्क साधा.",
    message: "संदेश",
    sendMessage: "संदेश पाठवा",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
