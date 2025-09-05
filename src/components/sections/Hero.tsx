import { useState, useEffect } from 'react';
import { ExternalLink, Download, ChevronDown, Code, Palette, Zap, Cpu, CircuitBoard } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchText, setGlitchText] = useState('Gabriel Forestiero');
  const [typewriterText, setTypewriterText] = useState('');

  const originalText = 'Gabriel Forestiero';
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789';

  useEffect(() => {
    setIsLoaded(true);

    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.04) {
        let glitched = '';
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() < 0.15) {
            glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            glitched += originalText[i];
          }
        }
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 80);
      }
    }, 5000);

    setTimeout(() => {
      const text = 'Frontend Developer';
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        setTypewriterText(text.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex >= text.length) {
          clearInterval(typeInterval);
        }
      }, 100);
    }, 1200);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950 opacity-80"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg)',
            animation: 'grid-flow 30s linear infinite'
          }}
        ></div>
        <div className="absolute inset-0">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-flow ${15 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 15}s`
              }}
            >
              <div
                className="w-1 h-1 bg-cyan-400 rounded-full opacity-40"
                style={{
                  boxShadow: '0 0 3px rgba(0, 255, 255, 0.5)'
                }}
              />
              <div
                className="absolute inset-0 w-1 h-4 bg-gradient-to-t from-cyan-400/30 to-transparent rounded-full"
                style={{ transform: 'translateY(-4px)' }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ animation: 'scan-line 8s ease-in-out infinite' }}
          />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8">
          <div className="w-8 h-8 border-l border-t border-cyan-400/40"></div>
        </div>
        <div className="absolute top-8 right-8">
          <div className="w-8 h-8 border-r border-t border-cyan-400/40"></div>
        </div>
        <div className="absolute bottom-8 left-8">
          <div className="w-8 h-8 border-l border-b border-cyan-400/40"></div>
        </div>
        <div className="absolute bottom-8 right-8">
          <div className="w-8 h-8 border-r border-b border-cyan-400/40"></div>
        </div>
      </div>
      <div className={`text-center max-w-5xl mx-auto relative z-10 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold mb-4 relative">
            <br />
            <span
              className="relative inline-block group cursor-default font-bold"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'monospace',
                letterSpacing: '0.05em'
              }}
            >
              {glitchText}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-transparent to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </span>
          </h1>
        </div>
        <div className="mb-8 relative min-h-[3rem] flex items-center justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-20"></div>

            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent max-w-20"></div>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono font-semibold text-cyan-400 absolute">
            <span className="animate-pulse mr-2">&gt;</span>
            <span className="inline-block min-w-[250px] text-left">
              {typewriterText}
              <span className={`text-purple-400 ml-1 animate-pulse`}>█</span>
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { icon: Code, text: 'Clean Code', color: 'cyan', delay: 0 },
            { icon: Palette, text: 'UI/UX Focus', color: 'purple', delay: 0.2 },
            { icon: Zap, text: 'Performance', color: 'yellow', delay: 0.4 },
            { icon: Cpu, text: 'AI Ready', color: 'green', delay: 0.6 },
            { icon: CircuitBoard, text: 'Scalable', color: 'blue', delay: 0.8 }
          ].map((skill) => (
            <div
              key={skill.text}
              className={`
                group flex items-center gap-2 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50
                px-4 py-2 rounded-lg hover:border-${skill.color}-400/70 
                hover:shadow-lg hover:shadow-${skill.color}-400/20 transition-all duration-500
                transform hover:-translate-y-1 hover:scale-105 cursor-pointer
                animate-float-up
              `}
              style={{
                animationDelay: `${skill.delay}s`,
                animationFillMode: 'both'
              }}
            >
              <skill.icon className={`w-4 h-4 text-${skill.color}-400`} />
              <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                {skill.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="#projects"
            className="
              group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 
              text-white px-8 py-4 font-mono font-medium transition-all duration-300 
              flex items-center gap-3 transform hover:-translate-y-1 hover:scale-105
              border border-cyan-400/50 hover:border-cyan-400 overflow-hidden
              hover:shadow-2xl hover:shadow-cyan-400/50
            "
            style={{
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center gap-3">
              <span className="animate-pulse">&gt;</span> VER_PROYECTOS.exe
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </a>
          <a
            href="#contact"
            className="
              group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black 
              px-8 py-4 font-mono font-medium transition-all duration-300 transform hover:-translate-y-1
              hover:shadow-xl hover:shadow-cyan-400/50 overflow-hidden
            "
            style={{
              clipPath: 'polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%)'
            }}
          >
            <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10">CONTACTO.init()</span>
          </a>
        </div>
        <div className="mb-12">
          <a
            href="/cv-gabriel-forestiero.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative inline-flex items-center gap-4 
              bg-gray-800/80 border-2 border-gray-600 hover:border-cyan-400
              text-gray-200 hover:text-white font-mono transition-all duration-300 
              px-8 py-4 rounded-xl backdrop-blur-sm
              hover:bg-gray-700/80 hover:shadow-2xl hover:shadow-cyan-400/30
              transform hover:scale-110 hover:-translate-y-2
            "
          >
            <Download className="w-6 h-6 text-cyan-400 group-hover:animate-bounce" />
            <span className="text-lg font-semibold">Descargar CV</span>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="animate-bounce">
            <ChevronDown className="w-5 h-5 text-cyan-400/70" />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes grid-flow {
          0% { transform: perspective(1000px) rotateX(60deg) translate(0, 0); }
          100% { transform: perspective(1000px) rotateX(60deg) translate(-60px, -60px); }
        }
        
        @keyframes particle-flow {
          0% { 
            transform: translateY(100vh) translateX(0) scale(0); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
            transform: translateY(90vh) translateX(10px) scale(1); 
          }
          90% { 
            opacity: 1; 
            transform: translateY(-10vh) translateX(-10px) scale(1); 
          }
          100% { 
            transform: translateY(-20vh) translateX(0) scale(0); 
            opacity: 0; 
          }
        }
        
        @keyframes scan-line {
          0% { 
            top: -10px; 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            top: 100%; 
            opacity: 0; 
          }
        }
        
        @keyframes animate-float-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float-up {
          animation: animate-float-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;