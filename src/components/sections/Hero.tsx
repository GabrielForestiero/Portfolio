import { ExternalLink, Download, ChevronDown, Code, Palette, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-white text-4xl font-bold">GF</span>
          </div>
        </div>

        {/* Contenido principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Hola, soy <span className="text-blue-600">Gabriel Forestiero</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
          Desarrollador Frontend
        </h2>
        
        <p className="text-xl sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Especializado en <span className="text-blue-600 font-medium">React</span>, <span className="text-blue-600 font-medium">TypeScript</span> y <span className="text-blue-600 font-medium">Next.js</span>. 
          Transformo ideas en interfaces web modernas, intuitivas y de alto rendimiento.
        </p>

        {/* Skills highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Code className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Clean Code</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Palette className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">UI/UX Focus</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Zap className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">Performance</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Proyectos
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-1"
          >
            Hablemos
          </a>
          <a
            href="/cv-gabriel-forestiero.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 px-8 py-3 font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Descargar CV
          </a>
        </div>

        {/* Tech stack preview */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 mb-4">Tecnologías que uso</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Git'].map((tech) => (
              <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;