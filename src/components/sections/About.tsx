import { motion, easeOut } from 'framer-motion';
import { Code, Database, Globe, Smartphone, User, Terminal, Cpu, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { 
      name: 'Frontend', 
      icon: Code, 
      techs: ['React', 'TypeScript', 'Tailwind CSS'], 
      color: 'cyan',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      iconColor: 'text-cyan-400'
    },
    { 
      name: 'Backend', 
      icon: Database, 
      techs: ['Node.js', 'Python', 'PostgreSQL'], 
      color: 'purple',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      iconColor: 'text-purple-400'
    },
    { 
      name: 'Web', 
      icon: Globe, 
      techs: ['Next.js', 'REST APIs', 'GraphQL'], 
      color: 'blue',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      iconColor: 'text-blue-400'
    },
    { 
      name: 'Mobile', 
      icon: Smartphone, 
      techs: ['React Native', 'Flutter'], 
      color: 'green',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      iconColor: 'text-green-400'
    }
  ];

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
            <span className="text-cyan-400 ml-2">ABOUT</span>
            <span className="text-purple-400">.exe</span>
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
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-purple-400">//</span> Desarrollador con +3 años de experiencia
            <br />
            <span className="text-purple-400">//</span> Creando aplicaciones web y móviles de impacto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-mono font-bold text-white mb-6"
              style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
            >
              <span className="text-cyan-400">$</span> MI_HISTORIA.md
            </motion.h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-mono">
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-4 rounded-lg"
                whileHover={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
              >
                <p className="mb-2">
                  <span className="text-purple-400">{">"}</span> <span className="text-cyan-400">init_career()</span>
                </p>
                <p className="text-sm text-gray-400 ml-4">
                  Comenzé mi carrera como desarrollador hace 3 años, especializándome en tecnologías web modernas. 
                  Me apasiona crear soluciones elegantes y funcionales que generen impacto real.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-4 rounded-lg"
                whileHover={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
              >
                <p className="mb-2">
                  <span className="text-purple-400">{">"}</span> <span className="text-cyan-400">build_experience()</span>
                </p>
                <p className="text-sm text-gray-400 ml-4">
                  He trabajado en proyectos diversos, desde aplicaciones web empresariales hasta plataformas de e-commerce, 
                  siempre enfocándome en la calidad del código y la experiencia del usuario.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-4 rounded-lg"
                whileHover={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}
              >
                <p className="mb-2">
                  <span className="text-purple-400">{">"}</span> <span className="text-cyan-400">personal_interests()</span>
                </p>
                <p className="text-sm text-gray-400 ml-4">
                  Cuando no estoy programando, disfruto aprender nuevas tecnologías, contribuir a proyectos open source 
                  y compartir conocimiento con la comunidad de desarrolladores.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Avatar/Image placeholder con estilo cyberpunk */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-80 h-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center group overflow-hidden"
              whileHover={{ 
                borderColor: 'rgba(0, 255, 255, 0.6)',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)'
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div key={i} className="border border-cyan-400/10" />
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4 mx-auto border border-cyan-400/40"
                  whileHover={{ scale: 1.1, rotate: 12 }}
                >
                  <User className="w-10 h-10 text-cyan-400" />
                </motion.div>
                <span className="text-gray-400 text-lg font-mono">AVATAR.jpg</span>
                <p className="text-xs text-gray-500 font-mono mt-2">// Tu foto aquí</p>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50" />
            </motion.div>
          </motion.div>
        </div>

        {/* Skills con estilo cyberpunk */}
        <motion.div variants={itemVariants}>
          <motion.h3 
            className="text-2xl font-mono font-bold text-white text-center mb-12"
            style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
          >
            <span className="text-purple-400">{'>'}</span> TECH_STACK.load()
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`group relative text-center p-6 bg-gray-900/50 backdrop-blur-sm border ${skill.borderColor} rounded-lg hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-${skill.color}-400/20`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon */}
                <motion.div
                  className={`flex justify-center mb-4 ${skill.iconColor}`}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-12 h-12 ${skill.bgColor} border ${skill.borderColor} rounded-lg flex items-center justify-center`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                </motion.div>
                
                {/* Title */}
                <h4 className={`text-lg font-mono font-semibold text-white mb-4 group-hover:${skill.iconColor.replace('text-', 'text-')} transition-colors`}>
                  {skill.name}
                </h4>
                
                {/* Tech tags */}
                <div className="space-y-2">
                  {skill.techs.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={`inline-block ${skill.bgColor} ${skill.iconColor} text-xs px-3 py-1 rounded-full mr-1 mb-1 border ${skill.borderColor} font-mono hover:bg-opacity-20 transition-all cursor-default`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Status indicator */}
                <motion.div 
                  className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal-style status bar */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-4 bg-gray-900/40 border border-gray-700/40 px-6 py-3 rounded-full font-mono text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>SKILLS_LOADED:</span>
              <span className="text-green-400">SUCCESS</span>
            </div>
            <div className="w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>PERFORMANCE:</span>
              <span className="text-yellow-400">OPTIMIZED</span>
            </div>
            <div className="w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>STATUS:</span>
              <span className="text-green-400">ACTIVE</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;