import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Download, ChevronDown, Code, Palette, Zap, Cpu, CircuitBoard, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [glitchText, setGlitchText] = useState('Gabriel Forestiero');
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const originalText = 'Gabriel Forestiero';
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789';
  const words = ['Desarrollador Frontend'];

    const codeSnippets = [
    '0', '1'
  ];

  // Efecto de glitch
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.06) {
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
    }, 4500);

    return () => clearInterval(glitchInterval);
  }, []);

  // Efecto de tipeo mejorado
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      // Escribiendo
      if (displayedText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100 + Math.random() * 100); // Velocidad variable para efecto más natural
      } else {
        // Terminó de escribir, esperar antes de borrar
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 5000);
      }
    } else {
      // Borrando
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        // Terminó de borrar, cambiar a la siguiente palabra
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, currentWordIndex, isTyping, words]);

  // Animation variants con mejores transiciones
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      y: -4,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.98 }
  };

  const glitchVariants: Variants = {
    normal: { x: 0 },
    glitch: {
      x: [-2, 2, -1, 1, 0],
      transition: { duration: 0.2 }
    }
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.1,
      y: -4,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center px-3 sm:px-6 lg:px-8" style={{ height: 'calc(100vh - 80px)' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        
        {/* Matrix rain - reducido en mobile */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-xs whitespace-pre hidden sm:block"
              style={{ left: `${i * 6}%` }}
              animate={{
                y: ['0vh', '200vh']
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 15
              }}
            >
              {Array.from({ length: 50 }, () => 
  codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
).join('\n')}

            </motion.div>
          ))}
          {/* Matrix rain simplificado para mobile */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={`mobile-${i}`}
              className="absolute text-green-400 font-mono text-xs whitespace-pre sm:hidden"
              style={{ left: `${i * 16}%` }}
              animate={{
                y: ['0vh', '200vh']
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 20
              }}
            >
            {Array.from({ length: 50 }, () => 
  codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
).join('\n')}
            </motion.div>
          ))}
        </div>

        {/* Hexagonal connections - oculto en mobile */}
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <svg className="w-full h-full">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              >
                <polygon
                  points="100,50 150,75 150,125 100,150 50,125 50,75"
                  stroke="#00ffff"
                  strokeWidth="1"
                  fill="none"
                  transform={`translate(${i * 150}, ${(i % 3) * 200 + 120})`}
                />
                <motion.circle
                  cx={100 + i * 150}
                  cy={100 + (i % 3) * 200 + 120}
                  r="2"
                  fill="#00ffff"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Ripple waves - menos en mobile */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 2 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute border border-cyan-500/10 rounded-full sm:hidden"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`
              }}
              animate={{
                scale: [0.8, 1.2],
                opacity: [1, 0]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
          {Array.from({ length: 4 }, (_, i) => (
            <motion.div
              key={`desktop-${i}`}
              className="absolute border border-cyan-500/10 rounded-full hidden sm:block"
              style={{
                width: `${300 + i * 200}px`,
                height: `${300 + i * 200}px`
              }}
              animate={{
                scale: [0.8, 1.2],
                opacity: [1, 0]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations - más pequeñas en mobile */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-cyan-400/30" />
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-cyan-400/30" />
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-cyan-400/30" />
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-cyan-400/30" />
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="text-center max-w-5xl mx-auto relative z-10 py-4 sm:py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name with glitch - tamaños más apropiados */}
        <motion.div className="mb-4 sm:mb-6" variants={itemVariants}>
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold mb-3 sm:mb-4 relative leading-tight"
            variants={glitchVariants}
            animate={glitchText !== originalText ? "glitch" : "normal"}
          >
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
          </motion.h1>
        </motion.div>

        {/* Typewriter effect mejorado */}
        <motion.div 
          className="mb-4 sm:mb-6 relative min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
            <motion.div 
              className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-16 sm:max-w-24"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.div 
              className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent max-w-16 sm:max-w-24"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
          
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-mono font-semibold text-cyan-400 absolute">
            <span className="text-purple-400 mr-2 sm:mr-3">&gt;</span>
            <span className="inline-block min-w-[200px] xs:min-w-[250px] sm:min-w-[300px] text-left">
              <span className="text-cyan-400">
                {displayedText}
              </span>
              <motion.span 
                className="text-purple-400 ml-1"
                animate={{ 
                  opacity: isTyping ? [1, 0.3, 1] : [1, 0, 1] 
                }}
                transition={{ 
                  duration: isTyping ? 0.5 : 1.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                █
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* Skills - más compactas en mobile */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          {[
            { icon: Code, text: 'Clean Code', color: 'cyan' },
            { icon: Palette, text: 'UI/UX Focus', color: 'purple' },
            { icon: Zap, text: 'Performance', color: 'yellow' },
            { icon: Cpu, text: 'AI Ready', color: 'green' },
            { icon: CircuitBoard, text: 'Scalable', color: 'blue' }
          ].map((skill, index) => (
            <motion.div
              key={skill.text}
              className="group flex items-center gap-2 sm:gap-3 bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 px-3 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl cursor-pointer"
              variants={skillVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${skill.color}-400`} />
              </motion.div>
              <span className="text-xs sm:text-sm font-mono text-gray-300 group-hover:text-white transition-colors font-medium">
                {skill.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons - ancho reducido */}
        <motion.div 
          className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center mb-6 sm:mb-8 max-w-sm sm:max-w-none mx-auto"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="w-full sm:w-auto group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 sm:px-8 sm:py-4 font-mono font-medium overflow-hidden rounded-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div 
              className="absolute inset-0 bg-cyan-400"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              style={{ originX: 0 }}
            />
            <span className="relative z-10 text-base sm:text-lg">CONTACTO</span>
          </motion.a>

          <motion.a
            href="/CV-Gabriel-Forestiero-Frontend-2025..pdf"
            download="Gabriel_Forestiero_CV.pdf" 
            className="w-full sm:w-auto group relative bg-gray-800/70 border-2 border-gray-600/70 hover:border-purple-400/70 text-gray-300 hover:text-purple-300 font-mono px-8 py-3 sm:px-8 sm:py-4 rounded-lg backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300 flex items-center justify-center gap-3"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
            <span className="relative z-10 text-base sm:text-lg font-medium">DESCARGAR CV</span>
          </motion.a>
        </motion.div>

        {/* Social Icons - más compactos en mobile */}
        <motion.div 
          className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          {[
            { 
              icon: Github, 
              href: 'https://github.com/GabrielForestiero', 
              label: 'GitHub',
              color: 'text-gray-300 hover:text-white',
              bgColor: 'hover:bg-gray-700/50'
            },
            { 
              icon: Linkedin, 
              href: 'https://www.linkedin.com/in/gabriel-forestiero-dev/', 
              label: 'LinkedIn',
              color: 'text-blue-400 hover:text-blue-300',
              bgColor: 'hover:bg-blue-900/30'
            },
            { 
              icon: Mail, 
              href: 'mailto:gabyforestiero@gmail.com', 
              label: 'Email',
              color: 'text-cyan-400 hover:text-cyan-300',
              bgColor: 'hover:bg-cyan-900/30'
            }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-3 sm:p-4 rounded-xl border border-gray-700/60 backdrop-blur-sm transition-all duration-300 ${social.bgColor}`}
              variants={socialVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <social.icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${social.color}`} />
              </motion.div>
              
              {/* Tooltip - oculto en mobile */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-mono hidden sm:block">
                {social.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400/70" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;