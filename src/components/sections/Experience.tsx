import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Code, Briefcase, ChevronRight, Award, TrendingUp, Target, Zap } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'Front End Developer',
      company: 'Oppers',
      period: 'Oct. 2024 - Ago. 2025',
     
      location: 'Buenos Aires, Argentina',
      type: 'Frontend Specialist',
      status: 'current',
      companySize: 'Startup',
      description: 'Proyecto GesDev (Sistema de Gestión). Diseñé y construí la arquitectura y la lógica desde cero para un sistema de gestión modular, centrado en la escalabilidad y las buenas prácticas de código. Implementé funcionalidades clave como gestión de roles, facturación, geolocalización, y la creación de contratos, servicios y clientes. Utilicé componentes, hooks personalizados y servicios para una gestión de estado eficiente y un código limpio.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'State Management'],
      color: 'cyan'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Grava Digital',
      period: 'Ago. 2021 - Sept. 2024',
     
      location: 'Buenos Aires, Argentina',
      type: 'Frontend Developer',
      status: 'completed',
      companySize: 'Empresa',
      description: 'Proyecto SIMU (Sistema Integral Municipal Unificado). Lideré la implementación del frontend, diseñando la arquitectura de un sistema que procesa miles de reportes diarios. Desarrollé la interfaz de usuario con Next.js, React.js y TypeScript, lo que simplificó la gestión de reclamos y mejoró la eficiencia del personal municipal.',
      technologies: ['Next.js', 'React.js', 'TypeScript', 'UI/UX Design', 'Performance Optimization'],
      color: 'purple'
    },
   
  ];

  const toggleExpand = (cardId: React.SetStateAction<null>) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  type ColorKey = 'cyan' | 'purple' | 'green' | 'blue';
  const getColorClasses = (color: ColorKey) => {
    const colors: Record<ColorKey, string> = {
      cyan: 'border-cyan-400/30 hover:border-cyan-400/60 text-cyan-400',
      purple: 'border-purple-400/30 hover:border-purple-400/60 text-purple-400',
      green: 'border-green-400/30 hover:border-green-400/60 text-green-400',
      blue: 'border-blue-400/30 hover:border-blue-400/60 text-blue-400'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-5xl mx-auto">
        {/* Fondo tecnológico */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
          
          {/* Matriz de código para experiencia */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            {Array.from({ length: 15 }, (_, i) => {
              const expCodeSnippets = [
                'experience', 'career', 'developer', 'frontend', 'backend',
                'projects', 'skills', 'growth', 'leadership', 'teamwork',
                'agile', 'scrum', 'architecture', 'scalable', 'performance',
                'react', 'typescript', 'nextjs', 'nodejs', 'express',
                'mongodb', 'postgresql', 'php', 'wordpress', 'seo',
                'mentoring', 'freelance', 'startup', 'enterprise'
              ];
              
              return (
                <div
                  key={i}
                  className="absolute text-green-400 font-mono text-xs whitespace-pre-line leading-4 opacity-30"
                  style={{
                    left: `${i * 6}%`,
                    top: '-100px',
                    animation: `matrix-rain ${25 + Math.random() * 20}s linear infinite`,
                    animationDelay: `${Math.random() * 25}s`
                  }}
                >
                  {Array.from({ length: 20 }, () => 
                    expCodeSnippets[Math.floor(Math.random() * expCodeSnippets.length)]
                  ).join('\n')}
                </div>
              );
            })}
          </div>

          {/* Líneas de conexión verticales */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:0}} />
                  <stop offset="50%" style={{stopColor:"#00ffff", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#00ffff", stopOpacity:0}} />
                </linearGradient>
              </defs>
              <line
                x1="100"
                y1="0"
                x2="100"
                y2="100%"
                stroke="url(#timelineGradient)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Decoraciones de esquinas */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-cyan-400/40" />
          <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-cyan-400/40" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-cyan-400/40" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-cyan-400/40" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-mono font-bold text-white mb-6 relative flex items-center justify-center gap-4">
              <Briefcase className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400">Experiencia</span>
            </h2>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent max-w-32" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent max-w-32" />
            </div>
          </div>

          {/* Timeline de experiencias */}
          <div className="relative">
            {/* Línea temporal central */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-green-400/50"></div>

            {/* Experiencias */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Punto en la línea temporal */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-gray-900 z-10 ${getColorClasses(exp.color as ColorKey).split(' ')[2]} bg-black`} 
                       style={{ top: '24px' }}></div>

                  {/* Contenido de la experiencia */}
                  <div className="ml-16">
                    <div className={`group bg-gray-900/80 backdrop-blur-sm border-2 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-500 transform hover:-translate-y-1 cursor-pointer ${getColorClasses(exp.color as ColorKey)}`}>
                      
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-3 mb-2">
                            <p className={`text-lg font-semibold ${getColorClasses(exp.color as ColorKey).split(' ')[2]}`}>
                              {exp.company}
                            </p>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400 text-sm">{exp.companySize}</span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-mono">
                            <span>{exp.period}</span>
                            {exp.status === 'current' && (
                              <span className="px-2 py-1 bg-green-400/20 text-green-400 rounded-md text-xs font-medium">
                                ACTUAL
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                        {exp.description}
                      </p>

                      {/* Tecnologías */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`inline-block bg-${exp.color}-400/10 border border-${exp.color}-400/30 text-${exp.color}-400 text-xs px-3 py-1 rounded-full font-mono hover:bg-${exp.color}-400/20 transition-colors duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Indicador de conexión */}
                      <div className="absolute -left-2 top-6 w-6 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats finales */}
          
        </div>

        <style>{`
          @keyframes matrix-rain {
            0% { transform: translateY(-100vh); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ExperienceSection;