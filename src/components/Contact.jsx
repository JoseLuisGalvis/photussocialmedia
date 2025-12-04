import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        {/* Título */}
        <div className="row">
          <div
            className="col-12 text-center mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="d-inline-block border-bottom border-3 pb-1 border-orange">
              Contáctanos
            </h2>
            <p className="lead text-secondary mt-3">
              ¿Listo para impulsar tu marca? Cuéntanos sobre tu proyecto
            </p>
          </div>
        </div>

        {/* Formulario + Mapa */}
        <div className="row g-4">
          {/* Formulario */}
          <div
            ref={formRef}
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <form onSubmit={handleSubmit}>
              {["name", "email", "phone"].map((field) => (
                <div className="mb-3" key={field}>
                  <label htmlFor={field} className="form-label">
                    {field === "name"
                      ? "Nombre Completo"
                      : field === "email"
                      ? "Email"
                      : "Teléfono"}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    className="form-control"
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== "phone"}
                    placeholder={
                      field === "name"
                        ? "Juan Pérez"
                        : field === "email"
                        ? "juan@ejemplo.com"
                        : "+54 9 11 1234-5678"
                    }
                  />
                </div>
              ))}

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-submit text-white w-100"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? (
                  "Enviando..."
                ) : formStatus === "success" ? (
                  "¡Mensaje Enviado!"
                ) : (
                  <>
                    <Send size={20} className="me-2" />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {formStatus === "success" && (
                <div className="alert alert-success mt-3 mb-0">
                  ¡Gracias! Te contactaremos pronto.
                </div>
              )}
            </form>
          </div>

          {/* Mapa */}
          <div
            ref={mapRef}
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="ratio ratio-1x1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26233.945634332395!2d-58.267319461271114!3d-34.7242635937144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e38e45f5777%3A0x6a86dac21334524f!2sQuilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1764846324279!5m2!1ses-419!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Photus"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
