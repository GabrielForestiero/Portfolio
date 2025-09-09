import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Users, Code, ChevronRight, Target, ExternalLink, Phone, Calendar, MapPin, Award, Briefcase, Zap } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const experiences = [
    {
      id: 1,
      title: 'Desarrollador Frontend SSR',
      company: 'Oppers',
      period: 'Oct. 2024 - Presente',
      location: 'Buenos Aires, Argentina',
      type: 'Especialización Frontend',
      status: 'current',
      description: 'Me especialicé en desarrollo Front-End con React y TypeScript, entregando código escalable y mantenible. Diseñé e implementé sistemas de componentes modulares que estandarizaron patrones de UI en toda la organización. Optimicé el rendimiento mediante la gestión eficiente de estado y estrategias de renderizado de componentes.',
      keyAchievements: [
        'Especialización completa en desarrollo Front-End con React y TypeScript',
        'Sistemas de componentes modulares para estandarización de UI',
        'Optimización de rendimiento y gestión eficiente de estado'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Component Libraries'],
      references: [
        {
          name: 'Nicolás Andrés Hoffmann',
          role: 'CTO en Oppers',
          phone: '+54 9 11 6501-4422',
          linkedin: 'https://www.linkedin.com/in/nicoahoffmann/'
        },
        {
          name: 'Lucas Amado Córdoba',
          role: 'Technical Leader en Oppers',
          phone: '+54 9 11 3399 7178',
          linkedin: 'https://www.linkedin.com/in/lucas-amado-cordoba/'
        }
      ]
    },
    {
      id: 2,
      title: 'Desarrollador Full Stack',
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
      technologies: ['React', 'Next.js', 'Angular', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'Scrum'],
      references: []
    }
  ];

  const toggleExpand = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Animation variants
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
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Matrix rain con caracteres japoneses */}
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

        {/* Enhanced Hexagonal grid */}
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
                  transform={`translate(${(i * 200) % window.innerWidth}, ${Math.floor(i / 5) * 250 + 100})`}
                />
                <motion.circle
                  cx={50 + (i * 200) % window.innerWidth}
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

        {/* Ripple waves */}
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

      {/* Corner decorations */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-cyan-400/40" />
        <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-cyan-400/40" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-cyan-400/40" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-cyan-400/40" />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Header */}
        <motion.div className="mb-20 text-center" variants={itemVariants}>


          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white mb-6">
            <span className="text-purple-400 mr-2">&gt;</span>
            Experiencia
            <motion.span
              className="text-cyan-400 ml-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              █
            </motion.span>
          </h2>

          <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
            Mi trayectoria profesional construyendo experiencias digitales
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 rounded-full opacity-30"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                variants={itemVariants}
                custom={index}
              >
                {/* Enhanced Timeline dot */}
                <motion.div
                  className="absolute left-3 w-6 h-6 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center"
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

                {/* Enhanced Content Card */}
                <div className="ml-16">
                  <motion.div
                    className="group cursor-pointer relative"
                    variants={cardVariants}
                    whileHover="hover"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    {/* Glass card effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl group-hover:border-cyan-400/50 transition-all duration-500" />

                    {/* Card content */}
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-mono font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 mb-3">
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-400 font-semibold font-mono">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm font-mono">{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm font-mono">{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Status badge */}
                          {exp.status === 'current' && (
                            <motion.div
                              className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 px-4 py-2 rounded-xl text-xs font-mono font-bold border border-emerald-500/30 backdrop-blur-sm"
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

                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-gray-300 leading-relaxed font-mono text-sm">
                          {exp.description}
                        </p>
                      </div>

                      {/* Technologies preview */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.slice(0, 4).map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-gray-300 text-xs rounded-full border border-gray-600/50 font-mono backdrop-blur-sm"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: 'rgba(16, 185, 129, 0.1)',
                              borderColor: 'rgba(16, 185, 129, 0.3)',
                              color: '#10b981'
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {exp.technologies.length > 4 && (
                          <span className="px-3 py-1 text-cyan-400 text-xs rounded-full font-mono">
                            +{exp.technologies.length - 4} más
                          </span>
                        )}
                      </div>

                      {/* Expand button */}
                      <motion.button
                        className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-mono font-medium transition-colors group/btn"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm">
                          {expandedCard === exp.id ? 'Ocultar detalles' : 'Ver detalles completos'}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedCard === exp.id ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronRight className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </motion.div>
                      </motion.button>

                      {/* Expandable content */}
                      <AnimatePresence>
                        {expandedCard === exp.id && (
                          <motion.div
                            className="mt-8 space-y-8"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            {/* Separator */}
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

                            {/* Key Achievements */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <h4 className="text-white font-bold mb-4 flex items-center gap-3 font-mono">
                                <Target className="w-5 h-5 text-cyan-400" />
                                Logros Principales
                              </h4>
                              <div className="grid gap-3">
                                {exp.keyAchievements.map((achievement, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex items-start gap-3 text-gray-300 text-sm group/achievement"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 + 0.2 }}
                                  >
                                    <motion.div
                                      className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"
                                      whileHover={{ scale: 1.5 }}
                                    />
                                    <span className="font-mono leading-relaxed group-hover/achievement:text-white transition-colors">
                                      {achievement}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>

                            {/* Technologies */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <h4 className="text-white font-bold mb-4 flex items-center gap-3 font-mono">
                                <Code className="w-5 h-5 text-cyan-400" />
                                Stack Tecnológico
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {exp.technologies.map((tech, idx) => (
                                  <motion.span
                                    key={idx}
                                    className="px-4 py-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-gray-300 text-sm rounded-lg border border-gray-600/50 font-mono backdrop-blur-sm cursor-pointer"
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
                            </motion.div>

                            {/* References */}
                            {exp.references.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                <h4 className="text-white font-bold mb-4 flex items-center gap-3 font-mono">
                                  <Users className="w-5 h-5 text-cyan-400" />
                                  Referencias Profesionales
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                  {exp.references.map((ref, idx) => (
                                    <motion.div
                                      key={idx}
                                      className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: idx * 0.1 + 0.4 }}
                                      whileHover={{ y: -4, scale: 1.02 }}
                                    >
                                      <div className="mb-4">
                                        <p className="text-white font-bold font-mono text-lg mb-1">{ref.name}</p>
                                        <p className="text-gray-400 text-sm font-mono">{ref.role}</p>
                                      </div>
                                      <div className="flex flex-col gap-3">
                                        <motion.a
                                          href={`tel:${ref.phone}`}
                                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-mono transition-colors"
                                          whileHover={{ x: 4 }}
                                        >
                                          <Phone className="w-4 h-4" />
                                          {ref.phone}
                                        </motion.a>
                                        <motion.a
                                          href={ref.linkedin}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-mono transition-colors"
                                          whileHover={{ x: 4 }}
                                        >
                                          <ExternalLink className="w-4 h-4" />
                                          LinkedIn Profile
                                        </motion.a>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
       
      </motion.div>
    </section>
  );
};

export default ExperienceSection;