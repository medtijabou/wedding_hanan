import { getSupabaseClient } from "./supabase"

export type Language = "es" | "fr" | "ar" | "en"

export const defaultTranslations: Record<Language, Record<string, string>> = {
  es: {
    "nav.home": "Inicio",
    "nav.dresses": "Vestidos",
    "nav.beauty": "Belleza",
    "nav.shows": "Espectáculos",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "Creamos Juntos Tu Boda de tu sueños",
    "hero.subtitle": "Organizadora profesional de bodas marroquíes tradicionales y modernas",
    "hero.whatsapp": "WhatsApp",
    "hero.instagram": "Instagram",

    // Gallery Section
    "gallery.title": "Galería de Momentos Mágicos",
    "gallery.subtitle": "Descubre nuestras creaciones y los momentos inolvidables que hemos creado",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Una experiencia completa para hacer de tu boda un momento inolvidable",
    "services.dresses": "Vestidos Tradicionales",
    "services.dresses.desc": "Colección exclusiva de caftanes y takchitas auténticos",
    "services.beauty": "Belleza",
    "services.beauty.desc": "Maquillaje profesional y peinado a medida",
    "services.shows": "Espectáculos",
    "services.shows.desc": "Amariya tradicional y animaciones festivas",

    // Profile Section
    "profile.title": "Conoce a Ziana Hanane",
    "profile.subtitle": "Tu Organizadora de Bodas",
    "profile.description":
      "Con años de experiencia en la organización de bodas marroquíes, Zina Hanane ha hecho realidad cientos de sueños de parejas. Su pasión por la tradición combinada con su visión moderna hacen de cada boda un evento único e inolvidable.",
    "profile.experience": "Más de 10 años de experiencia",
    "profile.weddings": "Más de 500 bodas organizadas",
    "profile.passion": "Pasión por la perfección",
    "profile.cta": "Hablemos de tu boda",

    // Dresses Section
    "dresses.title": "Vestidos y Trajes",
    "dresses.subtitle": "Creaciones excepcionales que celebran la tradición marroquí",
    "dresses.caftan_royal": "Caftán Real",
    "dresses.takchita_premium": "Takchita Premium",
    "dresses.caftan_moderne": "Caftán Moderno",
    "dresses.robe_henne": "Vestido de Henna",
    "dresses.caftan_brode": "Caftán Bordado",
    "dresses.takchita_diamant": "Takchita Diamante",

    // Beauty Section
    "beauty.title": "Maquillaje y Peinado Profesional",
    "beauty.subtitle":
      "Nuestro equipo de profesionales de belleza te acompaña para realzar tu apariencia en tu gran día.",
    "beauty.item1": "Maquillaje tradicional y moderno",
    "beauty.item2": "Peinados elaborados a medida",
    "beauty.item3": "Productos de alta gama",
    "beauty.item4": "Prueba gratuita antes de la boda",

    // Shows Section
    "shows.title": "Espectáculos y Animaciones",
    "shows.subtitle": "Momentos mágicos para celebrar tu unión",
    "shows.amariya.title": "La Amariya Tradicional",
    "shows.amariya.desc":
      "La famosa entrada real en el palanquín tradicional, acompañada de música andaluza y danzas folclóricas para un momento espectacular inolvidable.",
    "shows.animations.title": "Animaciones Festivas",
    "shows.animations.desc":
      "Orquesta tradicional, bailarines profesionales, DJ moderno y animaciones personalizadas para crear un ambiente festivo que deleitará a todos tus invitados.",

    // Reservation Section
    "reservation.title": "Reserva Ahora",
    "reservation.subtitle": "Completa el formulario para reservar tu fecha",
    "reservation.form.title": "Formulario de Reserva",
    "reservation.form.name": "Nombre Completo",
    "reservation.form.phone": "Teléfono",
    "reservation.form.email": "Correo Electrónico",
    "reservation.form.date": "Fecha de la Boda",
    "reservation.form.guests": "Número de Invitados",
    "reservation.form.services": "Servicios Deseados",
    "reservation.form.service.dresses": "Vestidos Tradicionales",
    "reservation.form.service.beauty": "Maquillaje y Peinado",
    "reservation.form.service.shows": "Espectáculos y Animaciones",
    "reservation.form.message": "Mensaje",
    "reservation.form.message.placeholder": "Cuéntanos tu visión para este día especial...",
    "reservation.form.submit": "Enviar Solicitud",
    "reservation.form.submitting": "Enviando...",
    "reservation.success.title": "¡Gracias!",
    "reservation.success.message": "Tu solicitud ha sido enviada con éxito. ¡Te contactaremos pronto!",

    // Contact Section
    "contact.title": "Contáctanos",
    "contact.subtitle":
      "¿Lista para organizar la boda de tus sueños? Contáctanos en WhatsApp o Instagram para hablar de tu proyecto",
    "contact.whatsapp": "Chatear en WhatsApp",
    "contact.instagram": "Síguenos en Instagram",

    // Footer
    "footer.text": "© 2025 Bodas de Ensueño - Organizadora de eventos especializada en bodas marroquíes",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.dresses": "Robes",
    "nav.beauty": "Beauté",
    "nav.shows": "Spectacles",
    "nav.contact": "Contact",

    "hero.title": "Créons Ensemble Votre Mariage de Rêve",
    "hero.subtitle": "Organisatrice professionnelle de mariages marocains traditionnels et modernes",
    "hero.whatsapp": "WhatsApp",
    "hero.instagram": "Instagram",

    // Gallery Section
    "gallery.title": "Galerie de Moments Magiques",
    "gallery.subtitle": "Découvrez nos créations et les moments inoubliables que nous avons créés",

    "services.title": "Nos Services",
    "services.subtitle": "Une expérience complète pour faire de votre mariage un moment inoubliable",
    "services.dresses": "Robes Traditionnelles",
    "services.dresses.desc": "Collection exclusive de caftans et takchitas authentiques",
    "services.beauty": "Beauté",
    "services.beauty.desc": "Maquillage professionnel et coiffure sur mesure",
    "services.shows": "Spectacles",
    "services.shows.desc": "Amariya traditionnelle et animations festives",

    // Profile Section
    "profile.title": "Rencontrez Zina Hanane",
    "profile.subtitle": "Votre Organisatrice de Mariages",
    "profile.description":
      "Avec des années d'expérience dans l'organisation de mariages marocains, Zina Hanane a réalisé des centaines de rêves de couples. Sa passion pour la tradition combinée à sa vision moderne font de chaque mariage un événement unique et inoubliable.",
    "profile.experience": "Plus de 10 ans d'expérience",
    "profile.weddings": "Plus de 500 mariages organisés",
    "profile.passion": "Passion pour la perfection",
    "profile.cta": "Parlons de votre mariage",

    // Dresses Section
    "dresses.title": "Robes et Tenues",
    "dresses.subtitle": "Des créations exceptionnelles qui célèbrent la tradition marocaine",
    "dresses.caftan_royal": "Caftan Royal",
    "dresses.takchita_premium": "Takchita Premium",
    "dresses.caftan_moderne": "Caftan Moderne",
    "dresses.robe_henne": "Robe de Henné",
    "dresses.caftan_brode": "Caftan Brodé",
    "dresses.takchita_diamant": "Takchita Diamant",

    "beauty.title": "Maquillage et Coiffure Professionnels",
    "beauty.subtitle":
      "Notre équipe de professionnels de la beauté vous accompagne pour sublimer votre apparence lors de votre grand jour.",
    "beauty.item1": "Maquillage traditionnel et moderne",
    "beauty.item2": "Coiffures élaborées sur mesure",
    "beauty.item3": "Produits haut de gamme",
    "beauty.item4": "Essai gratuit avant le mariage",

    "shows.title": "Spectacles et Animations",
    "shows.subtitle": "Des moments magiques pour célébrer votre union",
    "shows.amariya.title": "L'Amariya Traditionnelle",
    "shows.amariya.desc":
      "La célèbre entrée royale sur le palanquin traditionnel, accompagnée de musique andalouse et de danses folkloriques pour un moment spectaculaire inoubliable.",
    "shows.animations.title": "Animations Festives",
    "shows.animations.desc":
      "Orchestre traditionnel, danseurs professionnels, DJ moderne et animations personnalisées pour créer une ambiance festive qui ravira tous vos invités.",

    "reservation.title": "Réservez Maintenant",
    "reservation.subtitle": "Remplissez le formulaire pour réserver votre date",
    "reservation.form.title": "Formulaire de Réservation",
    "reservation.form.name": "Nom Complet",
    "reservation.form.phone": "Téléphone",
    "reservation.form.email": "Email",
    "reservation.form.date": "Date du Mariage",
    "reservation.form.guests": "Nombre d'Invités",
    "reservation.form.services": "Services Souhaités",
    "reservation.form.service.dresses": "Robes Traditionnelles",
    "reservation.form.service.beauty": "Maquillage et Coiffure",
    "reservation.form.service.shows": "Spectacles et Animations",
    "reservation.form.message": "Message",
    "reservation.form.message.placeholder": "Parlez-nous de votre vision pour ce jour spécial...",
    "reservation.form.submit": "Envoyer la demande",
    "reservation.form.submitting": "Envoi en cours...",
    "reservation.success.title": "Merci !",
    "reservation.success.message": "Votre demande a été envoyée avec succès. Nous vous contactons bientôt !",

    "contact.title": "Contactez-Nous",
    "contact.subtitle":
      "Prête à organiser le mariage de vos rêves ? Contactez-nous sur WhatsApp ou Instagram pour discuter de votre projet",
    "contact.whatsapp": "Discuter sur WhatsApp",
    "contact.instagram": "Suivez-nous sur Instagram",

    "footer.text": "© 2025 Mariages de Rêve - Organisatrice d'événements spécialisée en mariages marocains",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.dresses": "الفساتين",
    "nav.beauty": "الجمال",
    "nav.shows": "العروض",
    "nav.contact": "اتصل بنا",

    "hero.title": "لنبني معاً حفل زفافك المثالي",
    "hero.subtitle": "منظمة محترفة لحفلات الزفاف المغربية التقليدية والعصرية",
    "hero.whatsapp": "واتساب",
    "hero.instagram": "إنستغرام",

    // Gallery Section
    "gallery.title": "معرض اللحظات السحرية",
    "gallery.subtitle": "اكتشف إبداعاتنا واللحظات التي لا تُنسى التي أنشأناها",

    "services.title": "خدماتنا",
    "services.subtitle": "تجربة كاملة لجعل زفافك لحظة لا تُنسى",
    "services.dresses": "فساتين تقليدية",
    "services.dresses.desc": "مجموعة حصرية من القفاطين والتكاشيط الأصيلة",
    "services.beauty": "الجمال",
    "services.beauty.desc": "مكياج احترافي وتصفيف مخصص",
    "services.shows": "العروض",
    "services.shows.desc": "العمارية التقليدية والرقصات الاحتفالية",

    // Profile Section
    "profile.title": "تعرف على زينة حنان",
    "profile.subtitle": "منظمة حفلات الزفاف الخاصة بك",
    "profile.description":
      "بسنوات من الخبرة في تنظيم حفلات الزفاف المغربية، حققت زينة حنان مئات الأحلام للأزواج. شغفها بالتقاليد مع رؤيتها العصرية يجعل كل زفاف حدثاً فريداً لا يُنسى.",
    "profile.experience": "أكثر من 10 سنوات من الخبرة",
    "profile.weddings": "أكثر من 500 حفل زفاف",
    "profile.passion": "شغف بالكمال",
    "profile.cta": "لنتحدث عن زفافك",

    // Dresses Section
    "dresses.title": "الفساتين والأزياء",
    "dresses.subtitle": "إبداعات استثنائية تحتفي بالتقاليد المغربية",
    "dresses.caftan_royal": "قفطان ملكي",
    "dresses.takchita_premium": "تكشيطة بريميوم",
    "dresses.caftan_moderne": "قفطان عصري",
    "dresses.robe_henne": "فستان الحناء",
    "dresses.caftan_brode": "قفطان مطرز",
    "dresses.takchita_diamant": "تكشيطة الماس",

    "beauty.title": "مكياج وتصفيف احترافي",
    "beauty.subtitle": "فريقنا من محترفي التجميل يرافقك لإبراز جمالك في يومك المميز.",
    "beauty.item1": "مكياج تقليدي وعصري",
    "beauty.item2": "تسريحات متقنة حسب الطلب",
    "beauty.item3": "منتجات راقية",
    "beauty.item4": "تجربة مجانية قبل الزفاف",

    "shows.title": "العروض والفعاليات",
    "shows.subtitle": "لحظات سحرية للاحتفال باتحادكما",
    "shows.amariya.title": "العمارية التقليدية",
    "shows.amariya.desc":
      "الدخول الملكي الشهير على الهودج التقليدي، مصحوباً بالموسيقى الأندلسية والرقصات الفلكلورية للحظة مذهلة لا تُنسى.",
    "shows.animations.title": "فعاليات احتفالية",
    "shows.animations.desc":
      "أوركسترا تقليدية، راقصون محترفون، دي جي عصري وفعاليات مخصصة لخلق جو احتفالي يبهج جميع ضيوفك.",

    "reservation.title": "احجز الآن",
    "reservation.subtitle": "املأ النموذج لحجز موعدك",
    "reservation.form.title": "نموذج الحجز",
    "reservation.form.name": "الاسم الكامل",
    "reservation.form.phone": "الهاتف",
    "reservation.form.email": "البريد الإلكتروني",
    "reservation.form.date": "تاريخ الزفاف",
    "reservation.form.guests": "عدد الضيوف",
    "reservation.form.services": "الخدمات المطلوبة",
    "reservation.form.service.dresses": "فساتين تقليدية",
    "reservation.form.service.beauty": "مكياج وتصفيف",
    "reservation.form.service.shows": "العروض والفعاليات",
    "reservation.form.message": "رسالة",
    "reservation.form.message.placeholder": "أخبرنا عن رؤيتك لهذا اليوم المميز...",
    "reservation.form.submit": "إرسال الطلب",
    "reservation.form.submitting": "جاري الإرسال...",
    "reservation.success.title": "شكراً!",
    "reservation.success.message": "تم إرسال طلبك بنجاح. سنتواصل معك قريباً!",

    "contact.title": "اتصل بنا",
    "contact.subtitle": "هل أنت مستعدة لتنظيم زفاف أحلامك؟ تواصل معنا عبر واتساب أو إنستغرام لمناقشة مشروعك",
    "contact.whatsapp": "تحدث على واتساب",
    "contact.instagram": "تابعنا على إنستغرام",

    "footer.text": "© 2025 أعراس الأحلام - منظمة فعاليات متخصصة في الزفاف المغربي",
  },
  en: {
    "nav.home": "Home",
    "nav.dresses": "Dresses",
    "nav.beauty": "Beauty",
    "nav.shows": "Shows",
    "nav.contact": "Contact",

    "hero.title": "Let's Create Your Dream Wedding Together",
    "hero.subtitle": "Professional organizer of traditional and modern Moroccan weddings",
    "hero.whatsapp": "WhatsApp",
    "hero.instagram": "Instagram",

    // Gallery Section
    "gallery.title": "Gallery of Magical Moments",
    "gallery.subtitle": "Discover our creations and the unforgettable moments we have created",

    "services.title": "Our Services",
    "services.subtitle": "A complete experience to make your wedding an unforgettable moment",
    "services.dresses": "Traditional Dresses",
    "services.dresses.desc": "Exclusive collection of authentic caftans and takchitas",
    "services.beauty": "Beauty",
    "services.beauty.desc": "Professional makeup and custom hairstyling",
    "services.shows": "Shows",
    "services.shows.desc": "Traditional Amariya and festive entertainment",

    // Profile Section
    "profile.title": "Meet Zina Hanane",
    "profile.subtitle": "Your Wedding Organizer",
    "profile.description":
      "With years of experience organizing Moroccan weddings, Zina Hanane has brought hundreds of couples' dreams to life. Her passion for tradition combined with her modern vision make every wedding a unique and unforgettable event.",
    "profile.experience": "Over 10 years of experience",
    "profile.weddings": "Over 500 weddings organized",
    "profile.passion": "Passion for perfection",
    "profile.cta": "Let's talk about your wedding",

    // Dresses Section
    "dresses.title": "Dresses and Outfits",
    "dresses.subtitle": "Exceptional creations celebrating Moroccan tradition",
    "dresses.caftan_royal": "Royal Caftan",
    "dresses.takchita_premium": "Premium Takchita",
    "dresses.caftan_moderne": "Modern Caftan",
    "dresses.robe_henne": "Henna Dress",
    "dresses.caftan_brode": "Embroidered Caftan",
    "dresses.takchita_diamant": "Diamond Takchita",

    "beauty.title": "Professional Makeup and Hairstyling",
    "beauty.subtitle": "Our team of beauty professionals accompanies you to enhance your appearance on your big day.",
    "beauty.item1": "Traditional and modern makeup",
    "beauty.item2": "Custom elaborate hairstyles",
    "beauty.item3": "High-end products",
    "beauty.item4": "Free trial before the wedding",

    "shows.title": "Shows and Entertainment",
    "shows.subtitle": "Magical moments to celebrate your union",
    "shows.amariya.title": "The Traditional Amariya",
    "shows.amariya.desc":
      "The famous royal entrance on the traditional palanquin, accompanied by Andalusian music and folk dances for an unforgettable spectacular moment.",
    "shows.animations.title": "Festive Entertainment",
    "shows.animations.desc":
      "Traditional orchestra, professional dancers, modern DJ and personalized entertainment to create a festive atmosphere that will delight all your guests.",

    "reservation.title": "Book Now",
    "reservation.subtitle": "Fill out the form to reserve your date",
    "reservation.form.title": "Reservation Form",
    "reservation.form.name": "Full Name",
    "reservation.form.phone": "Phone",
    "reservation.form.email": "Email",
    "reservation.form.date": "Wedding Date",
    "reservation.form.guests": "Number of Guests",
    "reservation.form.services": "Desired Services",
    "reservation.form.service.dresses": "Traditional Dresses",
    "reservation.form.service.beauty": "Makeup and Hairstyling",
    "reservation.form.service.shows": "Shows and Entertainment",
    "reservation.form.message": "Message",
    "reservation.form.message.placeholder": "Tell us about your vision for this special day...",
    "reservation.form.submit": "Submit Request",
    "reservation.form.submitting": "Submitting...",
    "reservation.success.title": "Thank You!",
    "reservation.success.message": "Your request has been sent successfully. We will contact you soon!",

    "contact.title": "Contact Us",
    "contact.subtitle":
      "Ready to organize your dream wedding? Contact us on WhatsApp or Instagram to discuss your project",
    "contact.whatsapp": "Chat on WhatsApp",
    "contact.instagram": "Follow us on Instagram",

    "footer.text": "© 2025 Dream Weddings - Event organizer specialized in Moroccan weddings",
  },
}

export async function getTranslations(language: Language) {
  const supabase = getSupabaseClient()

  const { data, error } = await supabase.from("translations").select("key, value").eq("language", language)

  if (error) {
    console.error("Error fetching translations:", error)
    return defaultTranslations[language] || {}
  }

  // Convert array to object for easier access
  const translations: Record<string, string> = {}
  data?.forEach((item) => {
    translations[item.key] = item.value
  })

  return translations
}

export async function getGalleryItems(category?: string) {
  const supabase = getSupabaseClient()

  let query = supabase
    .from("gallery_items")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true })

  if (category) {
    query = query.eq("category", category)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching gallery items:", error)
    return []
  }

  return data || []
}

export const mockGalleryData = {
  dresses: [
    {
      src: "/caftan-royal-marocain-rouge-or.jpg",
      alt: "Caftan Royal",
      category: "dresses",
    },
    {
      src: "/takchita-marocaine-luxe-premium.jpg",
      alt: "Takchita Premium",
      category: "dresses",
    },
    {
      src: "/caftan-moderne-elegante-marocain.jpg",
      alt: "Caftan Moderne",
      category: "dresses",
    },
    {
      src: "/robe-henne-mariage-marocain.jpg",
      alt: "Robe de Henné",
      category: "dresses",
    },
    {
      src: "/caftan-brode-perles-marocain.jpg",
      alt: "Caftan Brodé",
      category: "dresses",
    },
    {
      src: "/takchita-diamant-luxe-mariage.jpg",
      alt: "Takchita Diamante",
      category: "dresses",
    },
  ],
  beauty: [
    {
      src: "/maquillage-mariage-marocain-traditionnel.jpg",
      alt: "Maquillage Traditionnel",
      category: "beauty",
    },
    {
      src: "/coiffure-mariage-marocain-elaboree.jpg",
      alt: "Coiffure Élaborée",
      category: "beauty",
    },
    {
      src: "/maquillage-mariee-moderne-elegant.jpg",
      alt: "Maquillage Moderne",
      category: "beauty",
    },
    {
      src: "/coiffure-tresse-mariee-marocaine.jpg",
      alt: "Coiffure avec Tresse",
      category: "beauty",
    },
  ],
  shows: [
    {
      src: "/moroccan-amariya-traditional-wedding-palanquin.jpg",
      alt: "Amariya Traditionnelle",
      category: "shows",
    },
    {
      src: "/orchestre-mariage-marocain-musique.jpg",
      alt: "Orchestre Traditionnel",
      category: "shows",
    },
    {
      src: "/danseurs-professionnels-mariage-festif.jpg",
      alt: "Danseurs Professionnels",
      category: "shows",
    },
    {
      src: "/moroccan-wedding-entertainment-musicians-dancers.jpg",
      alt: "Animations Festives",
      category: "shows",
    },
  ],
}
