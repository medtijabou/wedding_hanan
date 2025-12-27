-- Insert French translations
INSERT INTO translations (key, language, value) VALUES
-- Navigation
('nav.home', 'fr', 'Accueil'),
('nav.dresses', 'fr', 'Robes'),
('nav.beauty', 'fr', 'Beauté'),
('nav.shows', 'fr', 'Spectacles'),
('nav.contact', 'fr', 'Contact'),

-- Hero section
('hero.title', 'fr', 'Créons Ensemble Votre Mariage de Rêve'),
('hero.subtitle', 'fr', 'Organisatrice professionnelle de mariages marocains traditionnels et modernes'),
('hero.whatsapp', 'fr', 'WhatsApp'),
('hero.instagram', 'fr', 'Instagram'),

-- Services
('services.title', 'fr', 'Nos Services'),
('services.subtitle', 'fr', 'Une expérience complète pour faire de votre mariage un moment inoubliable'),
('services.dresses', 'fr', 'Robes Traditionnelles'),
('services.dresses.desc', 'fr', 'Collection exclusive de caftans et takchitas authentiques'),
('services.beauty', 'fr', 'Beauté'),
('services.beauty.desc', 'fr', 'Maquillage professionnel et coiffure sur mesure'),
('services.shows', 'fr', 'Spectacles'),
('services.shows.desc', 'fr', 'Amariya traditionnelle et animations festives')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Insert Arabic translations
INSERT INTO translations (key, language, value) VALUES
-- Navigation
('nav.home', 'ar', 'الرئيسية'),
('nav.dresses', 'ar', 'الأزياء'),
('nav.beauty', 'ar', 'الجمال'),
('nav.shows', 'ar', 'العروض'),
('nav.contact', 'ar', 'اتصل بنا'),

-- Hero section
('hero.title', 'ar', 'معاً نصنع زفاف أحلامك'),
('hero.subtitle', 'ar', 'منظمة محترفة لحفلات الزفاف المغربية التقليدية والعصرية'),
('hero.whatsapp', 'ar', 'واتساب'),
('hero.instagram', 'ar', 'إنستغرام'),

-- Services
('services.title', 'ar', 'خدماتنا'),
('services.subtitle', 'ar', 'تجربة كاملة لجعل زفافك لحظة لا تُنسى'),
('services.dresses', 'ar', 'الأزياء التقليدية'),
('services.dresses.desc', 'ar', 'مجموعة حصرية من القفاطين والتكاشط الأصيلة'),
('services.beauty', 'ar', 'الجمال'),
('services.beauty.desc', 'ar', 'مكياج احترافي وتسريحات شعر مخصصة'),
('services.shows', 'ar', 'العروض'),
('services.shows.desc', 'ar', 'العمارية التقليدية والرقصات الاحتفالية')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;

-- Insert English translations
INSERT INTO translations (key, language, value) VALUES
-- Navigation
('nav.home', 'en', 'Home'),
('nav.dresses', 'en', 'Dresses'),
('nav.beauty', 'en', 'Beauty'),
('nav.shows', 'en', 'Shows'),
('nav.contact', 'en', 'Contact'),

-- Hero section
('hero.title', 'en', 'Let\'s Create Your Dream Wedding Together'),
('hero.subtitle', 'en', 'Professional organizer of traditional and modern Moroccan weddings'),
('hero.whatsapp', 'en', 'WhatsApp'),
('hero.instagram', 'en', 'Instagram'),

-- Services
('services.title', 'en', 'Our Services'),
('services.subtitle', 'en', 'A complete experience to make your wedding an unforgettable moment'),
('services.dresses', 'en', 'Traditional Dresses'),
('services.dresses.desc', 'en', 'Exclusive collection of authentic caftans and takchitas'),
('services.beauty', 'en', 'Beauty'),
('services.beauty.desc', 'en', 'Professional makeup and custom hairstyling'),
('services.shows', 'en', 'Shows'),
('services.shows.desc', 'en', 'Traditional Amariya and festive entertainment')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;
