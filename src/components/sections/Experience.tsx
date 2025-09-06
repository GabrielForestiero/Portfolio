import { useState } from 'react';
import { Calendar, MapPin, Users, Code, Briefcase, ChevronRight, Award, TrendingUp, Target } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      title: 'Desarrollador Frontend SSR',
      company: 'Oppers',
      period: 'Oct 2024 - Presente',
      duration: '3 meses',
      location: 'Buenos Aires, Argentina',
      type: 'Frontend Specialist',
      typeColor: 'bg-purple-100 text-purple-800',
      status: 'current',
      companySize: 'Startup',
      summary: 'Especialización en desarrollo Frontend con React y TypeScript, enfocado en arquitectura escalable y sistemas de componentes.',
      keyAchievements: [
        {
          icon: Target,
          text: 'Especialización completa en desarrollo Front-End con React y TypeScript',
          impact: 'Transición exitosa de FullStack a Frontend Specialist'
        },
        {
          icon: Code,
          text: 'Diseñé e implementé sistemas de componentes modulares',
          impact: 'Estandarización de UI en toda la organización'
        },
        {
          icon: TrendingUp,
          text: 'Optimicé rendimiento mediante gestión eficiente de estado',
          impact: 'Mejora en performance y UX de aplicaciones'
        }
      ],
      technologies: {
        primary: ['React', 'TypeScript', 'Next.js'],
        secondary: ['Component Libraries', 'Performance Optimization', 'State Management']
      },
      responsibilities: [
        'Desarrollo de interfaces de usuario escalables y mantenibles',
        'Implementación de patrones de diseño y arquitectura Frontend',
        'Optimización de performance y experiencia de usuario',
        'Colaboración con equipos de diseño y backend'
      ]
    },
    {
      id: 2,
      title: 'Desarrollador FullStack',
      company: 'Grava Digital',
      period: 'Ago 2021 - Sep 2024',
      duration: '3 años 1 mes',
      location: 'Buenos Aires, Argentina',
      type: 'FullStack & Team Lead',
      typeColor: 'bg-blue-100 text-blue-800',
      status: 'completed',
      companySize: 'Agencia Digital',
      summary: 'Desarrollo FullStack y liderazgo técnico en múltiples proyectos, con enfoque en metodologías ágiles y mentoring.',
      keyAchievements: [
        {
          icon: Award,
          text: 'Participé en más de 10 proyectos exitosos',
          impact: 'Experiencia diversa en diferentes industrias y tecnologías'
        },
        {
          icon: Users,
          text: 'Lideré un equipo de desarrollo mejorando la eficiencia',
          impact: 'Reducción de tiempos de entrega y mejor calidad de código'
        },
        {
          icon: TrendingUp,
          text: 'Implementé metodología Scrum y capacité developers junior',
          impact: 'Mejora en procesos y crecimiento del equipo'
        }
      ],
      technologies: {
        primary: ['React', 'Next.js', 'Node.js', 'Express'],
        secondary: ['Angular', 'MongoDB', 'MySQL', 'PostgreSQL', 'Scrum', 'Team Leadership']
      },
      responsibilities: [
        'Desarrollo full-stack de aplicaciones web complejas',
        'Liderazgo técnico y mentoring de desarrolladores junior',
        'Implementación de metodologías ágiles (Scrum)',
        'Arquitectura de soluciones escalables y mantenibles',
        'Coordinación con stakeholders y planificación de sprints'
      ]
    }
  ];

  const toggleExpand = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Experiencia Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Mi Trayectoria</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4+ años evolucionando desde FullStack hasta especialista Frontend, 
            con experiencia en liderazgo técnico y metodologías ágiles
          </p>
        </div>

        {/* Evolution Timeline */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-lg">
            <div className="flex items-center justify-between text-sm">
              <div className="text-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                <div className="font-medium text-gray-900">2021</div>
                <div className="text-gray-600">FullStack Start</div>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-4"></div>
              <div className="text-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
                <div className="font-medium text-gray-900">2024</div>
                <div className="text-gray-600">Frontend Specialist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300 z-0"></div>
              )}
              
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Status indicator */}
                {exp.status === 'current' && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-medium">
                    ACTUAL
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-3 mb-3">
                            <p className="text-xl font-semibold text-blue-600">{exp.company}</p>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-600">{exp.companySize}</span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-4 h-4 flex items-center justify-center">⏱</span>
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-start lg:items-end gap-3">
                          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${exp.typeColor}`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{exp.summary}</p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Logros Principales</h4>
                    <div className="grid gap-4">
                      {exp.keyAchievements.map((achievement, idx) => {
                        const IconComponent = achievement.icon;
                        return (
                          <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 mb-1">{achievement.text}</p>
                              <p className="text-sm text-gray-600">{achievement.impact}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Principales:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.primary.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Complementarias:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.secondary.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Responsibilities */}
                  <div>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4"
                    >
                      <span>Responsabilidades principales</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${expandedCard === exp.id ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {expandedCard === exp.id && (
                      <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600">Años de experiencia</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Proyectos completados</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-gray-600">Años especializándome</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
              <div className="text-gray-600">Equipo liderado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;