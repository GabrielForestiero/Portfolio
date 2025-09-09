import { motion, easeOut } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background con gradiente que inicia oscuro (conecta con Hero) y termina claro */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-slate-900"></div>

        {/* Matrix rain sutil */}
        <div className="absolute inset-0 overflow-hidden opacity-3">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/20 font-mono text-xs whitespace-pre"
              style={{ left: `${i * 12}%` }}
              animate={{
                y: ['0vh', '200vh']
              }}
              transition={{
                duration: 25 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 25
              }}
            >
              {Array.from({ length: 20 }, () =>
                Math.random() > 0.5 ? '1' : '0'
              ).join('\n')}
            </motion.div>
          ))}
        </div>

        {/* Conexiones hexagonales */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2, delay: i * 0.3 }}
              >
                <polygon
                  points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5"
                  stroke="#00ffff"
                  strokeWidth="0.5"
                  fill="none"
                  transform={`translate(${i * 200 + 100}, ${(i % 2) * 200 + 100})`}
                />
              </motion.g>
            ))}
          </svg>
        </div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header con estilo cyberpunk */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6"
            style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
            }}
          >
            <span className="text-white">&gt;</span>
            <span className="text-cyan-400 ml-2">SOBRE </span>
            <span className="text-purple-400">MÍ</span>
            <motion.span
              className="text-purple-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              █
            </motion.span>
          </motion.h2>

          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent max-w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Contenido principal - Solo información personal */}
        <div className="flex justify-center">
          <motion.div variants={itemVariants} className="max-w-4xl">
            <div className="text-gray-300 leading-relaxed font-mono">
              <motion.div
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-lg"
                whileHover={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
              >
                <div className="text-sm text-gray-400 space-y-6">
                  <p>
                    Soy <strong className="text-cyan-400">Desarrollador Frontend</strong> con más de 4 años de experiencia en el desarrollo de
                    <strong className="text-white"> aplicaciones web escalables y de alto rendimiento</strong>.
                  </p>

                  <p>
                    Cuento con sólida experiencia en <strong className="text-cyan-400">Frontend con React y TypeScript</strong>, creando
                    interfaces intuitivas y optimizadas, y manejo de <strong className="text-purple-400">Backend con Node.js, Express y bases de datos</strong>
                    para el diseño de <strong className="text-white">APIs robustas y seguras</strong>.
                  </p>

                  <p>
                    Me destaco en la construcción de <strong className="text-cyan-400">soluciones de extremo a extremo</strong>, priorizando
                    <strong className="text-white"> código limpio, arquitectura mantenible y optimización del rendimiento</strong>.
                    He participado en proyectos como <strong className="text-purple-400">sistemas de gestión, plataformas de e-commerce y paneles administrativos</strong>,
                    siempre enfocado en aportar <strong className="text-cyan-400">valor real al usuario final</strong>.
                  </p>

                  <p>
                    Apasionado por el <strong className="text-cyan-400">aprendizaje constante y la colaboración en equipo</strong>, busco
                    integrar <strong className="text-white">nuevas tecnologías y mejores prácticas</strong> que eleven la calidad del producto.
                  </p>
                </div>

                {/* Indicador de estado activo */}
              
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;