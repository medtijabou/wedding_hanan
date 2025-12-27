"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { defaultTranslations, type Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Record<string, string>
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")
  const [translations, setTranslations] = useState<Record<string, string>>(defaultTranslations.es)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
      setTranslations(defaultTranslations[savedLanguage])
    }
  }, [])

  useEffect(() => {
    setTranslations(defaultTranslations[language])

    async function loadTranslations() {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/translations?language=${language}`)
        const data = await response.json()
        setTranslations({ ...defaultTranslations[language], ...data })
      } catch (error) {
        console.error("Error loading translations:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    // Update document direction for Arabic
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
