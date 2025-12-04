import React from "react";
import bgAereo from "../assets/video/phothusvideo.mp4"; // o imagen optimizada
import img1 from "../assets/images/fa1.jpeg";
import img2 from "../assets/images/fa2.jpeg";
import img3 from "../assets/images/fa3.jpg";
import img4 from "../assets/images/fa4.jpeg";

const AirProducts = () => {
  return (
    <section id="air-products" className="position-relative">
      {/* HERO */}
      <div
        className="hero-wrapper position-relative"
        style={{ height: "60vh" }}
      >
        <video
          className="w-100 h-100 object-fit-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgAereo} type="video/mp4" />
        </video>

        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

        <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h2 className="fw-bold display-5 mb-3" data-aos="fade-up">
            Producción Aérea Profesional
          </h2>
          <p className="text-white-50 mb-4" data-aos="fade-up">
            Capturamos imágenes aéreas cinematográficas para turismo, real
            estate, eventos y contenido comercial de alto impacto.
          </p>
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
            Cotizar vuelo
          </a>
          <p className="small text-white-50 mt-2">
            Respuesta en menos de 15 minutos
          </p>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className="container py-5 text-center">
        <div className="row g-4" data-aos="fade-up">
          <div className="col-md-4">
            <h5 className="fw-bold">4K / 5.4K Ultra HD</h5>
            <p className="small">
              Tomas aéreas de máxima calidad para producciones premium.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Estabilización Cinemática</h5>
            <p className="small">
              Movimientos fluidos para contenido profesional.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Piloto Certificado</h5>
            <p className="small">
              Vuelos seguros, legales y altamente precisos.
            </p>
          </div>
        </div>
      </div>

      {/* MINI GALLERY */}
      <div className="container pb-5" data-aos="zoom-in">
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {[img1, img2, img3, img4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Aerial photography"
              className="rounded shadow"
              style={{
                width: "180px",
                height: "200px",
                objectFit: "cover",
                margin: "0.5em",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirProducts;
