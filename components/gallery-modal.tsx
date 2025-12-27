"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  images: GalleryImage[]
  initialIndex: number
  categoryTitle: string
}

export function GalleryModal({ isOpen, onClose, images, initialIndex, categoryTitle }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
        <div className="relative w-full h-[90vh]">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Category Title */}
          <div className="absolute top-4 left-4 z-50 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
            <h3 className="text-xl font-serif font-bold">{categoryTitle}</h3>
            <p className="text-sm text-white/80">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-12">
            <Image
              src={images[currentIndex]?.src || "/placeholder.svg"}
              alt={images[currentIndex]?.alt || "Gallery image"}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white h-16 w-16"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-10 w-10" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white h-16 w-16"
                onClick={handleNext}
              >
                <ChevronRight className="h-10 w-10" />
              </Button>
            </>
          )}

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex ? "ring-4 ring-rose-500 scale-110" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
