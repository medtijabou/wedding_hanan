"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/contexts/language-context"
import { Calendar, Users, Send } from "lucide-react"

export function ReservationForm() {
  const { language, translations } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    wedding_date: "",
    guest_count: "",
    services: [] as string[],
    message: "",
    language: language,
  })

  const t = (key: string) => translations[key] || key

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          wedding_date: "",
          guest_count: "",
          services: [],
          message: "",
          language: language,
        })
      }
    } catch (error) {
      console.error("Error submitting reservation:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  if (submitted) {
    return (
      <Card className="animate-scale-in">
        <CardContent className="pt-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Send className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-2">{t("reservation.success.title")}</h3>
          <p className="text-muted-foreground">{t("reservation.success.message")}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-serif">{t("reservation.form.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="full_name">{t("reservation.form.name")} *</Label>
              <Input
                id="full_name"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("reservation.form.phone")} *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("reservation.form.email")}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="wedding_date">{t("reservation.form.date")} *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="wedding_date"
                  type="date"
                  className="pl-10"
                  value={formData.wedding_date}
                  onChange={(e) => setFormData({ ...formData, wedding_date: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guest_count">{t("reservation.form.guests")}</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="guest_count"
                  type="number"
                  className="pl-10"
                  value={formData.guest_count}
                  onChange={(e) => setFormData({ ...formData, guest_count: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label>{t("reservation.form.services")} *</Label>
            <div className="space-y-2">
              {[
                { id: "robes", labelKey: "reservation.form.service.dresses" },
                { id: "beauty", labelKey: "reservation.form.service.beauty" },
                { id: "spectacles", labelKey: "reservation.form.service.shows" },
              ].map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.id}
                    checked={formData.services.includes(service.id)}
                    onCheckedChange={() => handleServiceToggle(service.id)}
                  />
                  <label htmlFor={service.id} className="text-sm cursor-pointer">
                    {t(service.labelKey)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t("reservation.form.message")}</Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t("reservation.form.message.placeholder")}
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? t("reservation.form.submitting") : t("reservation.form.submit")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
