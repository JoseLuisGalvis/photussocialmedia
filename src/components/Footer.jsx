import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import photusLogo from "../assets/images/LogoPSM.png";
import photusQR from "../assets/images/qrcode.png";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const quickLinks = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Nosotros" },
    { id: "services", label: "Servicios" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <footer
      className={`py-4 ${darkMode ? "bg-dark text-white" : "text-dark"}`}
      style={{
        backgroundColor: darkMode ? "" : "var(--color-orange)",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Columna 1: Logo + descripción + datos */}
          <div className="col-lg-3">
            <div className="d-flex align-items-center mb-2">
              <a
                className="navbar-brand d-flex align-items-center"
                href="https://www.instagram.com/photusocialmedia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita nuestro Instagram"
              >
                <img
                  src={photusLogo}
                  alt="Phothus Social Media"
                  className="logo-icon"
                  loading="lazy"
                  decoding="async"
                  style={{
                    height: "40px",
                    width: "auto",
                    transition: "all 0.3s ease",
                  }}
                />
              </a>
            </div>

            <p
              className={`small mb-2 ${darkMode ? "text-light" : "text-dark"}`}
            >
              Transformamos ideas en experiencias visuales que conectan con tu
              audiencia.
            </p>

            <ul className="list-unstyled small">
              <li className="mb-1">
                <Mail size={16} className="me-2" />
                <a
                  href="mailto:contacto@photus.com"
                  className={`${
                    darkMode ? "text-light" : "text-dark"
                  } text-decoration-none`}
                >
                  contacto@photus.com
                </a>
              </li>

              <li className="mb-1">
                <Phone size={16} className="me-2" />
                <a
                  href="https://wa.me/5491112345678"
                  className={`${
                    darkMode ? "text-light" : "text-dark"
                  } text-decoration-none`}
                >
                  +54 9 11 1234-5678
                </a>
              </li>

              <li className={`${darkMode ? "text-light" : "text-dark"}`}>
                <MapPin size={16} className="me-2" />
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="col-lg-3">
            <h6
              className={`fw-bold mb-3 ${
                darkMode ? "text-light" : "text-dark"
              }`}
            >
              Enlaces Rápidos
            </h6>

            <ul className="list-unstyled small">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    className={`btn btn-link btn-sm p-0 m-0 text-decoration-none ${
                      darkMode ? "text-light" : "text-dark"
                    }`}
                    onClick={() => scrollToSection(link.id)}
                  >
                    <ChevronRight size={14} className="me-1" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: QR WhatsApp */}
          <div className="col-lg-3 text-center">
            <h6
              className={`fw-bold mb-3 ${
                darkMode ? "text-light" : "text-dark"
              }`}
            >
              Escanea para WhatsApp
            </h6>
            <img
              src={photusQR}
              alt="QR WhatsApp"
              className="img-fluid rounded-3"
              style={{ maxWidth: 150 }}
            />
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="col-lg-3">
            <h6
              className={`fw-bold mb-3 ${
                darkMode ? "text-light" : "text-dark"
              }`}
            >
              Seguinos
            </h6>

            <div className="d-flex gap-2 mb-2">
              <a
                href="https://www.instagram.com/photusocialmedia"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-white" : "text-dark"}
              >
                <Instagram size={22} />
              </a>

              <a
                href="https://facebook.com/photusocialmedia"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-white" : "text-dark"}
              >
                <Facebook size={22} />
              </a>

              <a
                href="https://linkedin.com/photusocialmedia"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-white" : "text-dark"}
              >
                <Linkedin size={22} />
              </a>
            </div>

            <a
              href="https://www.photusocialmedia.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-sm ${
                darkMode ? "btn-outline-light" : "btn-outline-dark"
              }`}
            >
              www.photusocialmedia.com.ar
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4 pt-3 border-top border-secondary">
          <div
            className={`col text-center small ${
              darkMode ? "text-light" : "text-dark"
            }`}
          >
            © {currentYear} Photus Social Media. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
