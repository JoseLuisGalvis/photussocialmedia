import { Target, Zap, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target size={30} />,
      title: "Estrategia",
      description: "Planes personalizados que conectan con tu audiencia",
    },
    {
      icon: <Zap size={30} />,
      title: "Creatividad",
      description: "Diseños únicos que destacan tu marca",
    },
    {
      icon: <Users size={30} />,
      title: "Comunidad",
      description: "Construimos relaciones auténticas con tu audiencia",
    },
    {
      icon: <TrendingUp size={30} />,
      title: "Resultados",
      description: "Medimos y optimizamos cada estrategia",
    },
  ];

  return (
    <section id="about" className="py-5 about-section-parallax">
      <div className="about-parallax-overlay"></div>
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
            <span className="services-title-glass">Sobre Photus</span>
          </h2>
        </div>
        <div className="row g-5">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-secondary mb-4 about-text">
              En <strong>Photus Social Media</strong>, transformamos ideas en
              experiencias visuales que conectan emocionalmente con tu
              audiencia. Somos más que una agencia de diseño: somos tu aliado
              estratégico en el mundo digital.
            </p>
            <p className="text-secondary mb-4 about-text">
              Con años de experiencia creando contenido que convierte,
              entendemos que cada marca tiene su propia historia. Nuestro
              enfoque combina creatividad innovadora con estrategias basadas en
              datos para maximizar tu impacto en redes sociales.
            </p>
            <p className="text-secondary about-text">
              Desde branding hasta campañas completas de marketing digital,
              diseñamos soluciones personalizadas que no solo se ven increíbles,
              sino que generan resultados reales para tu negocio.
            </p>
          </div>

          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="row row-cols-md-2 g-4">
              {features.map((f, index) => (
                <div
                  key={f.title}
                  className="col"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  data-aos-duration="600"
                >
                  <div className="p-4 border rounded-3 h-100 shadow-sm d-flex flex-column text-center about-card">
                    <div className="text-orange mb-3">{f.icon}</div>
                    <h5 className="fw-bold">{f.title}</h5>
                    <p className="text-muted mb-0">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
