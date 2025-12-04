import React from "react";
import bgVideos from "../assets/images/ytbg.jpg";

const YoutubeVideos = () => {
  return (
    <section
      id="youtube-videos"
      className="py-5"
      style={{
        backgroundImage: `url(${bgVideos})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        {/* OVERLAY DEL TEXTO */}
        <div
          className="p-4 rounded mb-4"
          data-aos="fade-up"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            maxWidth: "1400px",
          }}
        >
          <h2 className="text-white mb-3 fw-bold">
            <span className="border-bottom border-orange border-3 pb-1">
              Sobre YoutubeVideos
            </span>
          </h2>

          <p className="text-white-50 mb-4">
            Producción profesional de videos para YouTube: guion, grabación,
            edición, miniaturas y optimización SEO para crecer tu canal.
          </p>

          {/* Highlights */}
          <div className="row mb-1 w-100">
            <div className="col-md-4 text-white mb-3">
              <h5 className="fw-bold">🎬 Edición Pro</h5>
              <p className="text-white-50 small">
                Videos dinámicos con el mejor ritmo visual.
              </p>
            </div>
            <div className="col-md-4 text-white mb-3">
              <h5 className="fw-bold">📈 Miniaturas Impactantes</h5>
              <p className="text-white-50 small">
                Diseños que aumentan el CTR.
              </p>
            </div>
            <div className="col-md-4 text-white mb-3">
              <h5 className="fw-bold">🎙️ Storytelling</h5>
              <p className="text-white-50 small">
                Narrativa diseñada para retención.
              </p>
            </div>
          </div>
        </div>

        {/* YOUTUBE VIDEOS (3 en fila) */}
        <div className="row g-4 mb-4 w-100" data-aos="zoom-in">
          {[
            "https://www.youtube.com/embed/6e6kqhvU3FQ?si=JphwISKJCtHn4xlT",
            "https://www.youtube.com/embed/JLUBg9YF0Bc?si=8xoeS2Oz9aAYamFT",
            "https://www.youtube.com/embed/e7PXoXJcfrM?si=tb4OSwNY5NbLWz_H",
          ].map((url, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-12">
              <div
                className="video-box rounded shadow"
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <iframe
                  src={url}
                  loading="lazy"
                  title={`Video ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
          ))}
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
          Iniciar Proyecto
        </a>
      </div>
    </section>
  );
};

export default YoutubeVideos;
