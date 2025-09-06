import { useState, useEffect } from 'react';
import { ExternalLink, Download, ChevronDown, Code, Palette, Zap, Cpu, CircuitBoard } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchText, setGlitchText] = useState('Gabriel Forestiero');
  const [typewriterText, setTypewriterText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const originalText = 'Gabriel Forestiero';
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789';
  const words = ['Frontend Developer', 'React Specialist', 'UI/UX Designer', 'JavaScript Expert'];

  useEffect(() => {
    setIsLoaded(true);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.05) {
        let glitched = '';
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() < 0.2) {
            glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            glitched += originalText[i];
          }
        }
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Typewriter effect with loop
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: number | undefined;

    if (!isDeleting) {
      // Writing
      if (typewriterText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setTypewriterText(currentWord.slice(0, typewriterText.length + 1));
        }, 80);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (typewriterText.length > 0) {
        timeout = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1));
        }, 50);
      } else {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentWordIndex, words]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ height: 'calc(100vh - 80px)' }}>
      {/* Fondo completamente nuevo - textura de código */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        
        {/* Matriz de código estilo Matrix */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-xs whitespace-pre"
              style={{
                left: `${i * 5}%`,
                top: '-100px',
                animation: `matrix-rain ${15 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 15}s`
              }}
            >
              {Array.from({ length: 50 }, () => 
                String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
              ).join('\n')}
            </div>
          ))}
        </div>

        {/* Líneas de conexión hexagonales */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <polygon
                  points="100,50 150,75 150,125 100,150 50,125 50,75"
                  stroke="#00ffff"
                  strokeWidth="1"
                  fill="none"
                  transform={`translate(${i * 150}, ${(i % 3) * 200})`}
                />
                <circle
                  cx={100 + i * 150}
                  cy={100 + (i % 3) * 200}
                  r="2"
                  fill="#00ffff"
                  opacity="0.6"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Ondas concéntricas */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-500/10 rounded-full"
              style={{
                width: `${300 + i * 200}px`,
                height: `${300 + i * 200}px`,
                animation: `ripple ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Decoraciones de esquinas minimalistas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30" />
        <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-cyan-400/30" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-cyan-400/30" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-cyan-400/30" />
      </div>

      {/* Contenido principal */}
      <div className={`text-center max-w-5xl mx-auto relative z-10 transition-all duration-2000 py-8 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        {/* Nombre */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold mb-4 relative">
            <span
              className="relative inline-block group cursor-default font-bold text-white"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                fontFamily: 'monospace',
                letterSpacing: '0.05em'
              }}
            >
              {glitchText}
            </span>
          </h1>
        </div>

        {/* Typewriter */}
        <div className="mb-6 relative min-h-[3rem] flex items-center justify-center">
          <div className="flex items-center gap-6 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-24" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent max-w-24" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono font-semibold text-cyan-400 absolute">
            <span className="text-purple-400 mr-3">&gt;</span>
            <span className="inline-block min-w-[300px] text-left">
              {typewriterText}
              <span className="text-purple-400 ml-1 animate-pulse">█</span>
            </span>
          </h2>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            { icon: Code, text: 'Clean Code', color: 'cyan' },
            { icon: Palette, text: 'UI/UX Focus', color: 'purple' },
            { icon: Zap, text: 'Performance', color: 'yellow' },
            { icon: Cpu, text: 'AI Ready', color: 'green' },
            { icon: CircuitBoard, text: 'Scalable', color: 'blue' }
          ].map((skill) => (
            <div
              key={skill.text}
              className="group flex items-center gap-3 bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 px-5 py-3 rounded-xl hover:bg-gray-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 cursor-pointer"
            >
              <skill.icon className={`w-5 h-5 text-${skill.color}-400 group-hover:rotate-12 transition-transform duration-300`} />
              <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors font-medium">
                {skill.text}
              </span>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-10 py-5 font-mono font-medium transition-all duration-500 flex items-center gap-4 transform hover:-translate-y-2 hover:scale-110 border border-cyan-400/60 hover:border-cyan-400 overflow-hidden hover:shadow-2xl hover:shadow-cyan-400/60 rounded-lg"
          >
            <span className="relative z-10 flex items-center gap-4">
              <span className="text-lg">&gt;</span>
              <span className="text-lg">VER_PROYECTOS.exe</span>
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </a>
          
          <a
            href="#contact"
            className="group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-5 font-mono font-medium transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 hover:shadow-xl hover:shadow-cyan-400/60 overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="relative z-10 text-lg">CONTACTO.init()</span>
          </a>
        </div>

        {/* CV */}
        <div className="mb-6">
          <a
            href="/cv-gabriel-forestiero.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-5 bg-gray-800/80 border-2 border-gray-600 hover:border-cyan-400 text-gray-200 hover:text-white font-mono transition-all duration-500 px-10 py-5 rounded-2xl backdrop-blur-sm hover:bg-gray-700/80 hover:shadow-2xl hover:shadow-cyan-400/40 transform hover:scale-115 hover:-translate-y-3"
          >
            <Download className="w-7 h-7 text-cyan-400" />
            <span className="text-xl font-semibold">Descargar CV</span>
            <div className="w-4 h-4 bg-cyan-400 rounded-full" />
          </a>
        </div>

        {/* Scroll */}
        <div className="flex flex-col items-center">
          <ChevronDown className="w-6 h-6 text-cyan-400/70 animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes ripple {
          0% { 
            transform: scale(0.8); 
            opacity: 1; 
          }
          100% { 
            transform: scale(1.2); 
            opacity: 0; 
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;