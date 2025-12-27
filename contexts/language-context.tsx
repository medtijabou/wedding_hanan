"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
// Importamos las definiciones desde tu archivo de libreria
import { defaultTranslations, type Language } from "@/lib/translations" 

// 1. Definimos la forma de los datos que tendrá el contexto
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Record<string, string>
}

// 2. Creamos el contexto (Esto resuelve el error "Cannot find name LanguageContext")
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 3. Estado inicial (français por defecto)
  const [language, setLanguage] = useState<Language>("fr")

  // 4. Detección automática del idioma del navegador
  useEffect(() => {
    const browserLang = window.navigator.language.split("-")[0] as Language
    const supported: Language[] = ["es", "fr", "ar", "en"]
    
    if (supported.includes(browserLang)) {
      setLanguage(browserLang)
    }
  }, [])

  // 5. El objeto que repartiremos por toda la web
  const value = {
    language,
    setLanguage,
    translations: defaultTranslations[language] || defaultTranslations["fr"]
  }

  return (
    <LanguageContext.Provider value={value}>
      {/* Añadimos soporte visual para Árabe (RTL) */}
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

// 6. El Hook que usarás en tus componentes (Como en ReservationForm)
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}