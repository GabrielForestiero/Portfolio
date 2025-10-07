import Header from './components/layout/Header';
import HeroSection from './components/sections/Hero';
import AboutSection from './components/sections/About';
import ContactSection from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Experience from './components/sections/Experience';
import SkillsSection from './components/sections/Skills';


function App() {

  const headerMenuItems = [
    { label: "Inicio", href: "#" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contacto", href: "#contact" }

  ];


  const footerSocialLinks = {
    github: "https://github.com/GabrielForestiero",
    linkedin: "https://linkedin.com/in/gabriel-forestiero-dev/",
    email: "mailto:gabyforestiero@gmail.com"
  };

  return (
    <div className="App">

      <Header
        title=""
        menuItems={headerMenuItems}
        showNotifications={false}
        showCart={false}
      />


      <main>
        <HeroSection />
        <AboutSection />
        <Experience></Experience>
        <SkillsSection />

        <ContactSection />
      </main>


      <Footer
        name="Gabriel Forestiero"
        socialLinks={footerSocialLinks}
      />
    </div>
  );
}

export default App;