import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Code, ChevronRight,  Target } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Matrix rain sutil */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/30 font-mono text-xs whitespace-pre"
              style={{ left: `${i * 15}%` }}
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
              {Array.from({ length: 25 }, () => 
                Math.random() > 0.5 ? '1' : '0'
              ).join('\n')}
            </motion.div>
          ))}
        </div>

        {/* Conexiones hexagonales */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            {Array.from({ length: 4 }, (_, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2, delay: i * 0.5 }}
              >
                <polygon
                  points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5"
                  stroke="#00ffff"
                  strokeWidth="0.5"
                  fill="none"
                  transform={`translate(${i * 300 + 100}, ${(i % 2) * 300 + 150})`}
                />
              </motion.g>
            ))}
          </svg>
        </div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <motion.div 
              className="w-6 h-6 bg-emerald-500 rounded-sm"
              animate={{ 
                boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 20px rgba(16, 185, 129, 0.3)', '0 0 0 rgba(16, 185, 129, 0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Experiencia
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 w-6 h-6 bg-gray-600 rounded-full border-4 border-black z-10"
                  whileHover={{ 
                    backgroundColor: '#10b981',
                    scale: 1.2
                  }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Content */}
                <div className="ml-12">
                  <motion.div 
                    className="group cursor-pointer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-emerald-400 font-semibold">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                      
                      {exp.status === 'current' && (
                        <motion.span 
                          className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ACTUAL
                        </motion.span>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Expandable content */}
                    <motion.button
                      onClick={() => toggleExpand(exp.id)}
                      className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium mb-4 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <span>Ver detalles</span>
                      <motion.div
                        animate={{ rotate: expandedCard === exp.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedCard === exp.id && (
                        <motion.div 
                          className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-6"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Key Achievements */}
                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Target className="w-4 h-4 text-emerald-400" />
                              Logros principales
                            </h4>
                            <ul className="space-y-2">
                              {exp.keyAchievements.map((achievement, idx) => (
                                <motion.li 
                                  key={idx}
                                  className="flex items-start gap-2 text-gray-300 text-sm"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Code className="w-4 h-4 text-emerald-400" />
                              Tecnologías utilizadas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <motion.span 
                                  key={idx}
                                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{ 
                                    backgroundColor: 'rgb(16, 185, 129, 0.2)',
                                    borderColor: 'rgb(16, 185, 129, 0.5)',
                                    color: '#10b981'
                                  }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* References */}
                          {exp.references.length > 0 && (
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4 text-emerald-400" />
                                Referencias
                              </h4>
                              <div className="grid gap-4">
                                {exp.references.map((ref, idx) => (
                                  <motion.div 
                                    key={idx}
                                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                  >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                      <div>
                                        <p className="text-white font-medium text-sm">{ref.name}</p>
                                        <p className="text-gray-400 text-xs">{ref.role}</p>
                                      </div>
                                      <div className="flex flex-col sm:items-end gap-1">
                                        <a 
                                          href={`tel:${ref.phone}`}
                                          className="text-emerald-400 text-xs hover:text-emerald-300 transition-colors"
                                        >
                                          {ref.phone}
                                        </a>
                                        <a 
                                          href={ref.linkedin}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-400 text-xs hover:text-blue-300 transition-colors"
                                        >
                                          LinkedIn
                                        </a>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
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