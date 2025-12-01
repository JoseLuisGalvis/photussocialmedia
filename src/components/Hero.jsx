import phothusVideo from "../assets/video/phothusvideo.mp4";

const Hero = () => {
  const handleCTAClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Video de fondo */}
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <source src={phothusVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div
        className="hero-content"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <h1 className="hero-title">Creatividad que Impulsa tu Marca</h1>
        <p className="hero-subtitle">
          Diseño, estrategia y contenido que convierte seguidores en clientes
        </p>
        <a
          href="#contact"
          className="btn btn-lg hero-cta"
          onClick={(e) => {
            e.preventDefault();
            handleCTAClick();
          }}
        >
          Comienza Ahora
        </a>
      </div>
    </section>
  );
};

export default Hero;
