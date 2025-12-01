import React from "react";
import bgRedes from "../assets/images/bg-redes.jpeg";

const RSSContent = () => {
  return (
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
          Diseño y producción de contenido estratégico para Instagram, TikTok y
          Facebook: reels, carruseles, posts y branding visual.
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

        {/* Minimalista Premium Mockups */}
        <div className="d-flex gap-4 mb-5" data-aos="fade-up">
          {/* Mockup Reel / TikTok */}
          <div
            className="rounded-4 bg-white shadow-lg d-flex flex-column justify-content-end p-2"
            style={{
              width: "110px",
              height: "200px",
              opacity: 0.95,
            }}
          >
            <div
              style={{
                background: "#e8e8e8",
                height: "80%",
                borderRadius: "12px",
              }}
            ></div>
            <div className="mt-2">
              <div
                style={{
                  height: "6px",
                  background: "#ddd",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  height: "6px",
                  width: "60%",
                  background: "#ddd",
                  borderRadius: "5px",
                  marginTop: "4px",
                }}
              ></div>
            </div>
          </div>

          {/* Mockup Carrusel */}
          <div
            className="rounded-4 bg-white shadow-lg p-2"
            style={{
              width: "140px",
              height: "200px",
              opacity: 0.95,
            }}
          >
            <div
              style={{
                background: "#e8e8e8",
                height: "65%",
                borderRadius: "12px",
              }}
            ></div>
            <div className="mt-2">
              <div
                style={{
                  height: "6px",
                  background: "#ddd",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  height: "6px",
                  width: "70%",
                  background: "#ddd",
                  borderRadius: "5px",
                  marginTop: "4px",
                }}
              ></div>
              <div
                style={{
                  height: "6px",
                  width: "50%",
                  background: "#ddd",
                  borderRadius: "5px",
                  marginTop: "4px",
                }}
              ></div>
            </div>
          </div>

          {/* Mockup Post estático */}
          <div
            className="rounded-4 bg-white shadow-lg p-2"
            style={{
              width: "110px",
              height: "200px",
              opacity: 0.95,
            }}
          >
            <div
              style={{
                background: "#e8e8e8",
                height: "75%",
                borderRadius: "12px",
              }}
            ></div>
            <div className="mt-2">
              <div
                style={{
                  height: "6px",
                  background: "#ddd",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                style={{
                  height: "6px",
                  width: "80%",
                  background: "#ddd",
                  borderRadius: "5px",
                  marginTop: "4px",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button data-aos="fade-up" className="btn btn-orange fw-bold px-4 py-2">
          Quiero Contenido Profesional
        </button>
      </div>
    </section>
  );
};

export default RSSContent;
