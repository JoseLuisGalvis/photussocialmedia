import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Photos from "./components/Photos";
import YoutubeVideos from "./components/YoutubeVideos";
import AirProducts from "./components/AirProducts";
import RSSContent from "./components/RSSContent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return savedMode === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Aplicar clase al body
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Guardar preferencia
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // ================================
  // Función scroll suave a secciones
  // ================================
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Photos darkMode={darkMode} />
      <AirProducts darkMode={darkMode} />
      <YoutubeVideos darkMode={darkMode} />
      <RSSContent darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
