import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

// ================================
// Componentes críticos (above the fold)
// ================================
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// ================================
// Lazy loading (below the fold)
// ================================
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Photos = lazy(() => import("./components/Photos"));
const YoutubeVideos = lazy(() => import("./components/YoutubeVideos"));
const AirProducts = lazy(() => import("./components/AirProducts"));
const RSSContent = lazy(() => import("./components/RSSContent"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// ================================
// Lazy loading para AOS
// ================================
let AOS;
const loadAOS = async () => {
  if (!AOS) {
    const module = await import("aos");
    AOS = module.default;
    await import("aos/dist/aos.css");
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }
};

// ================================
// Placeholder de carga
// ================================
const LoadingFallback = () => (
  <div
    style={{
      minHeight: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-orange)",
    }}
  >
    <div>Cargando...</div>
  </div>
);

function App() {
  // ================================
  // Dark mode optimizado
  // ================================
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; // Default false
  });

  // Sincronizar body + localStorage
  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // ================================
  // Lazy-load AOS al hacer scroll o después de 2 segundos
  // ================================
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      loadAOS();
      window.removeEventListener("scroll", handleScroll);
    };

    timeoutId = setTimeout(() => {
      loadAOS();
    }, 2000);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // ================================
  // Scroll suave a secciones
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

      {/* ================================
          Componentes lazy con Suspense
      ================================= */}
      <Suspense fallback={<LoadingFallback />}>
        <About darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Services darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Photos darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <AirProducts darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <YoutubeVideos darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <RSSContent darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Contact darkMode={darkMode} />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Footer darkMode={darkMode} scrollToSection={scrollToSection} />
      </Suspense>
    </div>
  );
}

export default App;
