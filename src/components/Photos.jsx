import React from "react";
import bgPhotos from "../assets/images/bg-photos.jpg";
import img1 from "../assets/images/phothusLogo.jpeg";
import img2 from "../assets/images/phothusLogo.jpeg";
import img3 from "../assets/images/phothusLogo.jpeg";
import img4 from "../assets/images/phothusLogo.jpeg";

const Photos = () => {
  return (
    <section
      id="photos"
      className="py-5"
      style={{
        backgroundImage: `url(${bgPhotos})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <h2 data-aos="fade-up" className="mb-3 text-white fw-bold">
          <span className="border-bottom border-orange border-3 pb-1">
            Sobre Photos
          </span>
        </h2>

        <p
          data-aos="fade-up"
          className="text-white-50 mb-4"
          style={{ maxWidth: "600px" }}
        >
          Fotografía profesional para marcas, emprendedores y proyectos
          personales. Capturamos la esencia visual que potencia tu presencia
          digital.
        </p>

        {/* Highlights */}
        <div className="row mb-4 w-100" data-aos="fade-up">
          <div className="col-md-4 text-white mb-3">
            <h5 className="fw-bold">📸 Calidad Profesional</h5>
            <p className="text-white-50 small">
              Edición avanzada y composición cuidada.
            </p>
          </div>
          <div className="col-md-4 text-white mb-3">
            <h5 className="fw-bold">✨ Estilo Único</h5>
            <p className="text-white-50 small">
              Fotografía pensada para destacar tu marca.
            </p>
          </div>
          <div className="col-md-4 text-white mb-3">
            <h5 className="fw-bold">🚀 Listas Para Redes</h5>
            <p className="text-white-50 small">
              Optimización para Instagram, Web y más.
            </p>
          </div>
        </div>

        {/* Mini-gallery */}
        <div
          className="d-flex gap-3 mb-4 flex-wrap justify-content-center"
          data-aos="zoom-in"
        >
          {[img1, img2, img3, img4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Mini gallery"
              className="rounded"
              style={{
                width: "180px",
                height: "200px",
                objectFit: "cover",
                opacity: 0.9,
                backgroundColor: "white",
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <button data-aos="fade-up" className="btn btn-orange fw-bold px-4 py-2">
          Contactar
        </button>
      </div>
    </section>
  );
};

export default Photos;
