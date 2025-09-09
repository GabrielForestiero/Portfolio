import Header from './components/layout/Header';
import HeroSection from './components/sections/Hero';
import AboutSection from './components/sections/About';
import ProjectsSection from './components/sections/Projects';
import ContactSection from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Experience from './components/sections/Experience';
import SkillsSection from './components/sections/Skills';


function App() {
  // Configuración para el Header
  const headerMenuItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre Mí", href: "#about" },
    // { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" }
  ];

  // Configuración para el Footer
  const footerSocialLinks = {
    github: "https://github.com/GabrielForestiero",
    linkedin: "https://linkedin.com/in/gabriel-forestiero-dev/",
    email: "mailto:gabyforestiero@gmail.com"
  };

  return (
    <div className="App">
      {/* Header con navegación smooth scroll */}
      <Header 
        title=""
        menuItems={headerMenuItems}
        showNotifications={false}
        showCart={false}
      />
      
      {/* Contenido principal */}
      <main>
        <HeroSection />
        <AboutSection />
        <Experience></Experience>
        <SkillsSection />
        {/* <ProjectsSection /> */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer 
        name="Gabriel Forestiero"
        socialLinks={footerSocialLinks}
      />
    </div>
  );
}

export default App;