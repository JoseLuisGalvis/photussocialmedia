import React from "react";
import bgRedes from "../assets/images/bg-redes.jpeg";
import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post1.png";
import post3 from "../assets/images/post1.png";

const RSSContent = () => {
  return (
    <>
      {/* CSS del tooltip + animación */}
      <style>
        {`
          /* Animación de 10px en Y */
          .insta-card {
            transition: transform 0.35s ease;
            position: relative;
          }

          .insta-card:hover {
            transform: translateY(-10px);
          }

          /* Tooltip SOLO en Desktop */
          @media (min-width: 992px) {
            .insta-card::after {
              content: "Haz click para ver la publicación";
              position: absolute;
              bottom: -35px;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(0, 0, 0, 0.85);
              color: #fff;
              padding: 6px 10px;
              font-size: 12px;
              white-space: nowrap;
              border-radius: 6px;
              opacity: 0;
              pointer-events: none;
              transition: opacity 0.25s ease;
            }

            .insta-card:hover::after {
              opacity: 1;
            }
          }
        `}
      </style>

      <section
        id="rss-content"
        className="py-5 position-relative"
        style={{
          backgroundImage: `url(${bgRedes})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(2px)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center position-relative"
          style={{ zIndex: 2 }}
        >
          <h2 data-aos="fade-up" className="text-white mb-3 fw-bold">
            <span className="border-bottom border-orange border-3 pb-1">
              Sobre Contenido de Redes Sociales
            </span>
          </h2>

          <p
            data-aos="fade-up"
            className="text-white mb-4"
            style={{ maxWidth: "650px" }}
          >
            Diseño y producción de contenido estratégico para Instagram, TikTok
            y Facebook: reels, carruseles, posts y branding visual.
          </p>

          {/* Highlights */}
          <div className="row mb-4 w-100" data-aos="fade-up">
            <div className="col-md-4 text-white mb-3">
              <h5 className="fw-bold">📅 Calendario Editorial</h5>
              <p className="text-white small">
                Organización y estrategia mensual.
              </p>
            </div>
            <div className="col-md-4 text-white mb-3">
              <h5 className="fw-bold">🎨 Diseño Profesional</h5>
              <p className="text-white small">
                Posts, carruseles y reels de alto impacto.
              </p>
            </div>
            <div className="col-md-4 text-white mb-3">
              <h5 className="fw-bold">🔥 Estrategia de Crecimiento</h5>
              <p className="text-white small">
                Alcance, engagement y conversión.
              </p>
            </div>
          </div>

          {/* 3 Mini Mockups */}
          <div className="d-flex gap-4 mb-5" data-aos="fade-up">
            {/* 1 */}
            <a
              href="https://www.instagram.com/p/DRvlr59DEDX/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
              style={{
                width: "160px",
                height: "240px",
                display: "block",
                background: "#fff",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <img
                src={post1}
                alt="Publicación 1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </a>

            {/* 2 */}
            <a
              href="https://www.instagram.com/p/DRvlr59DEDX/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
              style={{
                width: "160px",
                height: "240px",
                display: "block",
                background: "#fff",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <img
                src={post2}
                alt="Publicación 2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </a>

            {/* 3 */}
            <a
              href="https://www.instagram.com/reel/DRvlr59DEDX/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
              style={{
                width: "160px",
                height: "240px",
                display: "block",
                background: "#fff",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <img
                src={post3}
                loading="lazy"
                decoding="async"
                alt="Publicación 3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </a>
          </div>

          {/* CTA Button con scroll suave */}
          <a
            href="#contact"
            data-aos="fade-up"
            className="btn btn-orange fw-bold px-4 py-2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Quiero Contenido Profesional
          </a>
        </div>
      </section>
    </>
  );
};

export default RSSContent;
