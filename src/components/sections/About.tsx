import { motion } from 'framer-motion';

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

 
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-slate-900">

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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

        <div className="flex justify-center">
          <motion.div 
            className="max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-10 shadow-2xl"
              whileHover={{ 
                borderColor: 'rgba(0, 255, 255, 0.4)',
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.15)'
              }}
            >
              <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                <p>
                  Soy <span className="text-cyan-400 font-semibold">Desarrollador Frontend</span> con más de 4 años de experiencia en el desarrollo de aplicaciones web escalables y de alto rendimiento.
                </p>

                <p>
                  Cuento con sólida experiencia en <span className="text-cyan-400 font-semibold">Frontend con React y TypeScript</span>, creando interfaces intuitivas y optimizadas, y manejo de <span className="text-purple-400 font-semibold">Backend con Node.js, Express y bases de datos</span> para el diseño de APIs robustas y seguras.
                </p>

                <p>
                  Me destaco en la construcción de <span className="text-cyan-400 font-semibold">soluciones de extremo a extremo</span>, priorizando código limpio, arquitectura mantenible y optimización del rendimiento. He participado en proyectos como sistemas de gestión, plataformas de e-commerce y paneles administrativos, siempre enfocado en aportar valor real al usuario final.
                </p>

                <p>
                  Apasionado por el <span className="text-cyan-400 font-semibold">aprendizaje constante y la colaboración en equipo</span>, busco integrar nuevas tecnologías y mejores prácticas que eleven la calidad del producto.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;