-- Insert Spanish translations (Lingua principal)
INSERT INTO translations (key, language, value) VALUES
-- Navigation
('nav.home', 'es', 'Inicio'),
('nav.dresses', 'es', 'Vestidos'),
('nav.beauty', 'es', 'Belleza'),
('nav.shows', 'es', 'Espectáculos'),
('nav.contact', 'es', 'Contacto'),

-- Hero section
('hero.title', 'es', 'Creemos Juntos la Boda de Tus Sueños'),
('hero.subtitle', 'es', 'Organizadora profesional de bodas marroquíes tradicionales y modernas'),
('hero.whatsapp', 'es', 'WhatsApp'),
('hero.instagram', 'es', 'Instagram'),

-- Services
('services.title', 'es', 'Nuestros Servicios'),
('services.subtitle', 'es', 'Una experiencia completa para hacer de tu boda un momento inolvidable'),
('services.dresses', 'es', 'Vestidos Tradicionales'),
('services.dresses.desc', 'es', 'Colección exclusiva de caftanes y takchitas auténticos'),
('services.beauty', 'es', 'Belleza'),
('services.beauty.desc', 'es', 'Maquillaje profesional y peinado personalizado'),
('services.shows', 'es', 'Espectáculos'),
('services.shows.desc', 'es', 'Amariya tradicional y animaciones festivas'),

-- Gallery section
('gallery.title', 'es', 'Galería'),
('gallery.subtitle', 'es', 'Descubre nuestras creaciones y momentos mágicos'),
('gallery.dresses', 'es', 'Vestidos'),
('gallery.makeup', 'es', 'Maquillaje'),
('gallery.hairstyle', 'es', 'Peinados'),
('gallery.shows', 'es', 'Espectáculos'),

-- About section
('about.title', 'es', 'Sobre Nosotros'),
('about.subtitle', 'es', 'Pasión y experiencia al servicio de tu felicidad'),
('about.text1', 'es', 'Con años de experiencia en la organización de bodas marroquíes, convertimos tus sueños en realidad con un enfoque personalizado y profesional.'),
('about.text2', 'es', 'Nuestro equipo de expertos te acompaña en cada etapa de la preparación de tu gran día, desde la elección del vestido tradicional hasta la organización de espectáculos auténticos.'),

-- Reservation form
('reservation.title', 'es', 'Reserva tu Fecha'),
('reservation.subtitle', 'es', 'Contáctanos para planificar tu boda'),
('reservation.name', 'es', 'Nombre completo'),
('reservation.email', 'es', 'Correo electrónico'),
('reservation.phone', 'es', 'Teléfono'),
('reservation.date', 'es', 'Fecha del evento'),
('reservation.service', 'es', 'Servicio deseado'),
('reservation.service.all', 'es', 'Todos los servicios'),
('reservation.service.dresses', 'es', 'Solo vestidos'),
('reservation.service.beauty', 'es', 'Solo belleza'),
('reservation.service.shows', 'es', 'Solo espectáculos'),
('reservation.message', 'es', 'Mensaje adicional'),
('reservation.submit', 'es', 'Enviar solicitud'),
('reservation.success', 'es', '¡Gracias! Te contactaremos pronto.'),
('reservation.error', 'es', 'Error al enviar. Inténtalo de nuevo.'),

-- Contact section
('contact.title', 'es', 'Contáctanos'),
('contact.subtitle', 'es', 'Estamos disponibles para responder a todas tus preguntas'),
('contact.whatsapp.text', 'es', 'Chatea con nosotros'),
('contact.instagram.text', 'es', 'Síguenos'),

-- Footer
('footer.tagline', 'es', 'Creando momentos inolvidables desde hace más de 10 años'),
('footer.services', 'es', 'Servicios'),
('footer.follow', 'es', 'Síguenos'),
('footer.rights', 'es', 'Todos los derechos reservados')

ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value;
