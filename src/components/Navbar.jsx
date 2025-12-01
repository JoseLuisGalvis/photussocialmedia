import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import photusLogo from "../assets/images/LogoPSM.png";

const Navbar = ({ darkMode, toggleDarkMode, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "shadow" : ""
      } ${darkMode ? "navbar-dark bg-dark" : "navbar-dark"}`}
      style={{
        transition: "all 0.3s ease",
        backgroundColor: darkMode ? "" : "var(--color-orange)",
      }}
    >
      {" "}
      <div className="container">
        {/* LOGO */}{" "}
        <a
          className="navbar-brand d-flex align-items-center"
          href="https://www.instagram.com/photusocialmedia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={photusLogo}
            alt="Phothus Social Media"
            className="logo-icon"
            style={{
              height: "40px",
              width: "auto",
              transition: "all 0.3s ease",
            }}
          />{" "}
        </a>
        {/* MODO OSCURO + BURGER MOBILE */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-link d-lg-none p-2"
            onClick={toggleDarkMode}
            style={{ color: darkMode ? "#fff" : "#000" }}
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            className="btn btn-link d-lg-none p-2"
            onClick={toggleMenu}
            style={{ color: darkMode ? "#fff" : "#000" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* NAV */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {/* Inicio */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("hero");
                }}
              >
                Inicio
              </a>
            </li>

            {/* Nosotros */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                Nosotros
              </a>
            </li>

            {/* ====== SERVICIOS (DROPDOWN) ====== */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("services");
                    }}
                  >
                    Características
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("photos");
                    }}
                  >
                    Fotografía
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("air-products");
                    }}
                  >
                    Aéreos
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("youtube-videos");
                    }}
                  >
                    Youtube
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("rss-content");
                    }}
                  >
                    Contenido RRSS
                  </a>
                </li>
              </ul>
            </li>

            {/* Contacto */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
              >
                Contacto
              </a>
            </li>

            {/* Dark mode desktop */}
            <li className="nav-item ms-lg-3 d-none d-lg-block">
              <button
                className="btn btn-link"
                onClick={toggleDarkMode}
                style={{ color: darkMode ? "#fff" : "#000" }}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
