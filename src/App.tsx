import Header from './components/layout/Header';
import HeroSection from './components/sections/Hero';
import AboutSection from './components/sections/About';
import ProjectsSection from './components/sections/Projects';
import ContactSection from './components/sections/Contact';
import Footer from './components/layout/Footer';


function App() {
  // Configuración para el Header
  const headerMenuItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" }
  ];

  // Configuración para el Footer
  const footerSocialLinks = {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
    email: "mailto:tu@email.com"
  };

  return (
    <div className="App">
      {/* Header con navegación smooth scroll */}
      <Header 
        title="GF"
        menuItems={headerMenuItems}
        showNotifications={false}
        showCart={false}
      />
      
      {/* Contenido principal */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer 
        name="Tu Nombre"
        email="tu@email.com"
        socialLinks={footerSocialLinks}
      />
    </div>
  );
}

export default App;