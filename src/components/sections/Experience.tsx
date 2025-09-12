import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, Zap } from 'lucide-react';

const ExperienceSection = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const experiences = [
    {
      id: 1,
      title: 'Desarrollador FrontEnd',
      company: 'Oppers',
      period: 'Oct. 2024 - Presente',
      location: 'Buenos Aires, Argentina',
      type: 'Especialización Frontend',
      status: 'current',
      description: 'Me especialicé en desarrollo Front-End con React y TypeScript, entregando código escalable y mantenible. Diseñé e implementé sistemas de componentes modulares que estandarizaron patrones de UI en toda la organización. Optimicé el rendimiento mediante la gestión eficiente de estado y estrategias de renderizado de componentes.',
      technologies: ['React', 'TypeScript', 'Styled Components'],
    },
    {
      id: 2,
      title: 'Desarrollador FullStack',
      company: 'Grava Digital',
      period: 'Ago. 2021 - Sep. 2024',
      location: 'Buenos Aires, Argentina',
      type: 'Desarrollo & Liderazgo',
      status: 'completed',
      description: 'Participé en más de 10 proyectos, desarrollando y manteniendo aplicaciones con tecnologías como React, Next.js y Angular en el frontend, y Node.js con Express en el backend. Lideré un equipo de desarrollo, mejorando la eficiencia en las entregas y capacitando a desarrolladores junior. Trabajé mediante la metodología Scrum, facilitando reuniones diarias y planificación de sprints para mejorar la colaboración del equipo y optimizar los tiempos de entrega.',
      keyAchievements: [
        'Participación en más de 10 proyectos exitosos',
        'Liderazgo de equipo de desarrollo y mentoring de developers junior',
        'Implementación de metodología Scrum y optimización de entregas'
      ],
      technologies: ['React', 'Next.js', 'Angular', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL'],
      references: []
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const techVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="experience" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden">

      <div className="absolute inset-0">

        <div className="absolute inset-0 overflow-hidden opacity-5">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/40 font-mono text-xs whitespace-pre"
              style={{ left: `${i * 8}%` }}
              animate={{
                y: ['0vh', '200vh']
              }}
              transition={{
                duration: 20 + Math.random() * 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 20
              }}
            >
              {Array.from({ length: 30 }, () =>
                String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
              ).join('\n')}
            </motion.div>
          ))}
        </div>


        <div className="absolute inset-0 opacity-8">
          <svg className="w-full h-full">
            {Array.from({ length: 15 }, (_, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              >
                <polygon
                  points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5"
                  stroke="#00ffff"
                  strokeWidth="0.5"
                  fill="none"
                  transform={`translate(${(i * 200) % (typeof window !== 'undefined' ? window.innerWidth : 1200)}, ${Math.floor(i / 5) * 250 + 100})`}
                />
                <motion.circle
                  cx={50 + (i * 200) % (typeof window !== 'undefined' ? window.innerWidth : 1200)}
                  cy={50 + Math.floor(i / 5) * 250 + 100}
                  r="1.5"
                  fill="#00ffff"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              </motion.g>
            ))}
          </svg>
        </div>


        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          {Array.from({ length: 3 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute border border-purple-500/20 rounded-full"
              style={{
                width: `${400 + i * 300}px`,
                height: `${400 + i * 300}px`
              }}
              animate={{
                scale: [0.8, 1.2],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                delay: i * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>


      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >

      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.div className="mb-20 text-center" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white mb-6">
            <span className="text-purple-400 mr-2">&gt;</span>
            <span className="text-cyan-400"> EXPERIENCIA</span>

            <motion.span
              className="text-cyan-400 ml-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              █
            </motion.span>
          </h2>
          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent max-w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent max-w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
            Mi trayectoria profesional construyendo experiencias digitales
          </p>
        </motion.div>


        <div className="relative">

          <div className="absolute left-1/2 sm:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 rounded-full opacity-30 transform -translate-x-1/2 sm:translate-x-0"></div>

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                variants={itemVariants}
                custom={index}
              >

                <motion.div
                  className="absolute left-1/2 sm:left-3 w-6 h-6 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center transform -translate-x-1/2 sm:translate-x-0"
                  style={{
                    background: exp.status === 'current'
                      ? 'linear-gradient(135deg, #10b981, #06d6a0)'
                      : 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                  }}
                  whileHover={{
                    scale: 1.4,
                    boxShadow: exp.status === 'current'
                      ? '0 0 20px rgba(16, 185, 129, 0.6)'
                      : '0 0 20px rgba(139, 92, 246, 0.6)'
                  }}
                  animate={exp.status === 'current' ? {
                    boxShadow: [
                      '0 0 0 rgba(16, 185, 129, 0)',
                      '0 0 20px rgba(16, 185, 129, 0.4)',
                      '0 0 0 rgba(16, 185, 129, 0)'
                    ]
                  } : {}}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity },
                    scale: { duration: 0.2 }
                  }}
                >
                  {exp.status === 'current' ? (
                    <Zap className="w-3 h-3 text-white" />
                  ) : (
                    <Award className="w-3 h-3 text-white" />
                  )}
                </motion.div>


                <div className="pt-8 sm:pt-0 sm:ml-16">
                  <motion.div
                    className="group relative"
                    variants={cardVariants}
                    whileHover="hover"
                  >

                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl group-hover:border-cyan-400/50 transition-all duration-500" />


                    <div className="relative p-6 sm:p-8">

                      <div className="mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 break-words text-center sm:text-left">
                              {exp.title}
                            </h3>
                            <div className="flex flex-col items-center sm:items-start sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-3">
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                <span className="text-cyan-400 font-semibold font-mono text-sm sm:text-base">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                <span className="text-gray-400 text-xs sm:text-sm font-mono">{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                <span className="text-gray-400 text-xs sm:text-sm font-mono">{exp.location}</span>
                              </div>
                            </div>
                          </div>


                          {exp.status === 'current' && (
                            <motion.div
                              className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs font-mono font-bold border border-emerald-500/30 backdrop-blur-sm flex-shrink-0 self-center sm:self-start"
                              animate={{
                                boxShadow: [
                                  '0 0 0 rgba(16, 185, 129, 0)',
                                  '0 0 15px rgba(16, 185, 129, 0.3)',
                                  '0 0 0 rgba(16, 185, 129, 0)'
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              ACTUAL
                            </motion.div>
                          )}
                        </div>
                      </div>


                      <div className="mb-6">
                        <p className="text-gray-300 leading-relaxed font-mono text-sm text-center sm:text-left">
                          {exp.description}
                        </p>
                      </div>


                      <div className="mb-6">
                        <h4 className="text-white font-bold mb-3 font-mono text-sm sm:text-base text-center sm:text-left">
                          Stack Tecnológico:
                        </h4>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-gray-300 text-xs sm:text-sm rounded-lg border border-gray-600/50 font-mono backdrop-blur-sm cursor-pointer"
                              variants={techVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover="hover"
                              transition={{ delay: idx * 0.05 }}
                              onHoverStart={() => setHoveredTech(tech)}
                              onHoverEnd={() => setHoveredTech(null)}
                              style={{
                                background: hoveredTech === tech
                                  ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(139, 92, 246, 0.2))'
                                  : undefined,
                                borderColor: hoveredTech === tech
                                  ? 'rgba(16, 185, 129, 0.5)'
                                  : undefined,
                                color: hoveredTech === tech
                                  ? '#10b981'
                                  : undefined
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;