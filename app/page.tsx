"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ReservationForm } from "@/components/reservation-form"
import { ImageSlider } from "@/components/image-slider"
import { GalleryModal } from "@/components/gallery-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { mockGalleryData } from "@/lib/translations"
import { Instagram, MessageCircle, Sparkles, Heart, Crown, Music } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const { translations, isLoading } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImages, setModalImages] = useState<Array<{ src: string; alt: string; category: string }>>([])
  const [modalIndex, setModalIndex] = useState(0)
  const [modalTitle, setModalTitle] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  const t = (key: string) => translations[key] || key

  const openGalleryModal = (category: "dresses" | "beauty" | "shows", titleKey: string, index = 0) => {
    setModalImages(mockGalleryData[category])
    setModalIndex(index)
    setModalTitle(t(titleKey))
    setModalOpen(true)
  }

  const sliderImages = [
    {
      src: "/moroccan-wedding-celebration-with-traditional-deco.jpg",
      alt: "Celebration de mariage marocain traditionnel",
      category: "general",
    },
    {
      src: "/moroccan-bridal-makeup-and-hairstyle-professional.jpg",
      alt: "Maquillage et coiffure de mariée marocaine",
      category: "beauty",
    },
    {
      src: "/moroccan-amariya-traditional-wedding-palanquin.jpg",
      alt: "Amariya traditionnelle marocaine",
      category: "shows",
    },
    {
      src: "/moroccan-wedding-entertainment-musicians-dancers.jpg",
      alt: "Spectacle de mariage marocain",
      category: "shows",
    },
    {
      src: "/.jpg",
      alt: "Robe de mariée marocaine élégante",
      category: "dresses",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with animations */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/moroccan-wedding-celebration-with-traditional-deco.jpg"
            alt={t("hero.title")}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto text-center max-w-4xl">
          <ScrollAnimation animation="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 text-balance">
              {t("hero.title")}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">{t("hero.subtitle")}</p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg gap-2 group" asChild>
                <a href="https://wa.me/+34672544358" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  {t("hero.whatsapp")}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg gap-2 bg-transparent group" asChild>
                <a href="https://instagram.com/zianahanane_0034672544358/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  {t("hero.instagram")}
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-7xl">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{t("gallery.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("gallery.subtitle")}</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="scale-in" delay={200}>
            <ImageSlider
              images={sliderImages}
              autoPlayInterval={4000}
              onImageClick={(index) => {
                const image = sliderImages[index]
                if (image.category === "dresses") {
                  openGalleryModal("dresses", "dresses.title", 0)
                } else if (image.category === "beauty") {
                  openGalleryModal("beauty", "beauty.title", 0)
                } else if (image.category === "shows") {
                  openGalleryModal("shows", "shows.title", 0)
                }
              }}
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Overview with staggered animations */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{t("services.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="scale-in" delay={100}>
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 animate-float">
                    <Crown className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{t("services.dresses")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("services.dresses.desc")}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={200}>
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4 animate-float delay-100">
                    <Sparkles className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{t("services.beauty")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("services.beauty.desc")}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-in" delay={300}>
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 animate-float delay-200">
                    <Music className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{t("services.shows")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("services.shows.desc")}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-in-left">
              <div className="relative">
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/zina-hanane.png" alt="Zina Hanane" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-75" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-semibold text-lg mb-2">{t("profile.subtitle")}</p>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t("profile.title")}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{t("profile.description")}</p>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t("profile.experience")}</h3>
                      <p className="text-sm text-muted-foreground">{t("services.subtitle")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t("profile.weddings")}</h3>
                      <p className="text-sm text-muted-foreground">{t("hero.subtitle")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Crown className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t("profile.passion")}</h3>
                      <p className="text-sm text-muted-foreground">{t("services.dresses.desc")}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="text-lg gap-2 group" asChild>
                    <a href="https://wa.me/+34672544358" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      {t("profile.cta")}
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Robes Section with hover effects */}
      <section id="robes" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{t("dresses.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("dresses.subtitle")}</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { titleKey: "dresses.caftan_royal", src: mockGalleryData.dresses[0].src, index: 0 },
              { titleKey: "dresses.takchita_premium", src: mockGalleryData.dresses[1].src, index: 1 },
              { titleKey: "dresses.caftan_moderne", src: mockGalleryData.dresses[2].src, index: 2 },
              { titleKey: "dresses.robe_henne", src: mockGalleryData.dresses[3].src, index: 3 },
              { titleKey: "dresses.caftan_brode", src: mockGalleryData.dresses[4].src, index: 4 },
              { titleKey: "dresses.takchita_diamant", src: mockGalleryData.dresses[5].src, index: 5 },
            ].map((item, index) => (
              <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                <Card
                  className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
                  onClick={() => openGalleryModal("dresses", "dresses.title", item.index)}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={t(item.titleKey)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Sparkles className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm font-semibold">Clic para ver más</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-serif font-semibold text-center group-hover:text-primary transition-colors">
                      {t(item.titleKey)}
                    </h3>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Section */}
      <section id="beaute" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">{t("beauty.title")}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("beauty.subtitle")}</p>
                <ul className="space-y-4">
                  {[t("beauty.item1"), t("beauty.item2"), t("beauty.item3"), t("beauty.item4")].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="mt-6 gap-2 group"
                  onClick={() => openGalleryModal("beauty", "beauty.title", 0)}
                >
                  <Sparkles className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Ver Galería
                </Button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div
                className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => openGalleryModal("beauty", "beauty.title", 0)}
              >
                <Image
                  src="/moroccan-bridal-makeup-and-hairstyle-professional.jpg"
                  alt={t("beauty.title")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <Sparkles className="h-16 w-16 mx-auto mb-3" />
                    <p className="text-lg font-semibold">Clic para ver más</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Spectacles Section */}
      <section id="spectacles" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{t("shows.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("shows.subtitle")}</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation animation="fade-in-left">
              <Card
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => openGalleryModal("shows", "shows.title", 0)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/moroccan-amariya-traditional-wedding-palanquin.jpg"
                    alt={t("shows.amariya.title")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <Music className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Clic para ver más</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3">{t("shows.amariya.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("shows.amariya.desc")}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right">
              <Card
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => openGalleryModal("shows", "shows.title", 1)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/moroccan-wedding-entertainment-musicians-dancers.jpg"
                    alt={t("shows.animations.title")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <Music className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm font-semibold">Clic para ver más</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3">{t("shows.animations.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t("shows.animations.desc")}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-3xl">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">{t("reservation.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("reservation.subtitle")}</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="scale-in" delay={200}>
            <ReservationForm />
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t("contact.title")}</h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">{t("contact.subtitle")}</p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="text-lg gap-2 h-14 group" asChild>
                <a href="https://wa.me/+34672544358" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  {t("contact.whatsapp")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg gap-2 h-14 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group"
                asChild
              >
                <a href="https://instagram.com/zianahanane_0034672544358/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  {t("contact.instagram")}
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">{t("footer.text")}</p>
        </div>
      </footer>

      {/* GalleryModal component */}
      <GalleryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={modalImages}
        initialIndex={modalIndex}
        categoryTitle={modalTitle}
      />
    </div>
  )
}
