import { Camera, Video, Plane, Share2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Camera size={40} />,
      title: "Fotografía Profesional",
      description:
        "Capturamos la esencia de tu marca con imágenes de alta calidad que transmiten profesionalismo y autenticidad.",
      features: [
        "Sesiones de producto",
        "Fotografía corporativa",
        "Eventos y coberturas",
        "Retratos profesionales",
      ],
      sectionId: "photos",
    },
    {
      icon: <Plane size={40} />,
      title: "Fotografía y Video Aéreo",
      description:
        "Perspectivas únicas desde el cielo con drones profesionales para destacar tu proyecto con tomas espectaculares.",
      features: [
        "Tomas aéreas con drones",
        "Videos panorámicos",
        "Inspección de propiedades",
        "Cobertura de eventos",
      ],
      sectionId: "air-products",
    },
    {
      icon: <Video size={40} />,
      title: "Producción de Videos para YouTube",
      description:
        "Creamos contenido audiovisual optimizado para YouTube que conecta con tu audiencia y potencia tu canal.",
      features: [
        "Edición profesional",
        "Motion graphics y animaciones",
        "Guiones y storytelling",
        "Optimización SEO para YouTube",
      ],
      sectionId: "youtube-videos",
    },
    {
      icon: <Share2 size={40} />,
      title: "Contenido para Redes Sociales",
      description:
        "Diseños y videos estratégicos para redes sociales que generan engagement y aumentan tu presencia digital.",
      features: [
        "Reels y TikToks virales",
        "Posts y Stories para Instagram",
        "Contenido para Facebook y LinkedIn",
        "Estrategia de contenido mensual",
      ],
      sectionId: "rss-content",
    },
  ];

  return (
    <section id="services" className="py-5 services-section-parallax">
      <div className="services-parallax-overlay"></div>
      <div
        className="container min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
        style={{ zIndex: 2 }}
      >
        <div
          className="text-center mb-5"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <h2>
            <span className="services-title-glass">Nuestros Servicios</span>
          </h2>
          <p className="lead mt-3 mx-auto services-subtitle-glass">
            Soluciones creativas de fotografía, video y contenido digital para
            elevar tu marca
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="card h-100 border-0 services-card">
                <div className="card-body d-flex flex-column">
                  <div className="text-orange mb-3 services-icon">
                    {service.icon}
                  </div>
                  <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                  <p className="card-text">{service.description}</p>

                  <h6 className="mt-4 mb-2 fw-semibold text-orange">
                    Incluye:
                  </h6>
                  <ul className="list-unstyled mb-4 small flex-grow-1 card-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-start mb-1">
                        <span className="text-success me-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
