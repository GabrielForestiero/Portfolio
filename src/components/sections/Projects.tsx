import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Zap, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [glitchIndex, setGlitchIndex] = useState(-1);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras, pagos integrados y panel administrativo.",
      image: "",
      techs: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://funtasticdepot.com/",
      
      icon: Globe,
      status: "DEPLOYED",
      lines: "~15,000"
    },
    {
      title: "Task Manager App",
      description: "Aplicación de gestión de tareas con funcionalidades avanzadas como colaboración en equipo y notificaciones.",
      image: "",
      techs: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      demoLink: "#",
      codeLink: "#",
      icon: Code,
      status: "BETA",
      lines: "~8,500"
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchIndex(Math.floor(Math.random() * projects.length));
        setTimeout(() => setGlitchIndex(-1), 200);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'text-green-400';
      case 'LIVE': return 'text-cyan-400';
      case 'BETA': return 'text-yellow-400';
      case 'DEV': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
     
      <div className="absolute inset-0">
       
        <div className="absolute inset-0 overflow-hidden opacity-3">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/20 font-mono text-xs whitespace-pre"
              style={{ left: `${i * 7}%` }}
              animate={{
                y: ['0vh', '150vh']
              }}
              transition={{
                duration: 20 + Math.random() * 10,
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

     
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.g key={i}>
                <motion.path
                  d={`M0,${100 + i * 150} L200,${100 + i * 150} L300,${50 + i * 150} L500,${50 + i * 150}`}
                  stroke="#00ffff"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.3 }}
                />
                <motion.circle
                  cx={200 + i * 100}
                  cy={75 + i * 150}
                  r="3"
                  fill="#00ffff"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              </motion.g>
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
      
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="mb-6">
          
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white mb-4">
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 20px rgba(0, 255, 255, 0.5)',
                    '0 0 40px rgba(0, 255, 255, 0.8)',
                    '0 0 20px rgba(0, 255, 255, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MIS PROYECTOS
              </motion.span>
            </h2>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center gap-6 mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-px bg-cyan-400 w-24"></div>
          
            <div className="h-px bg-cyan-400 w-24"></div>
          </motion.div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </motion.div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 rounded-xl overflow-hidden hover:border-cyan-400/60 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-600">
                    <motion.div
                      className={`w-2 h-2 rounded-full ${getStatusColor(project.status).replace('text-', 'bg-')}`}
                      animate={{
                        opacity: [1, 0.3, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className={`text-xs font-mono ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

               
                <div className="relative h-48 bg-black/80 border-b border-gray-700/60 overflow-hidden">
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: hoveredProject === index ? 360 : 0,
                        scale: hoveredProject === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      <IconComponent className="w-16 h-16 text-cyan-400/60" />
                    </motion.div>
                  </div>
                  
                 
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <motion.path
                      d="M0,96 L48,96 L64,80 L128,80 L144,96 L192,96"
                      stroke="#00ffff"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.path
                      d="M96,0 L96,48 L112,64 L112,128 L96,144 L96,192"
                      stroke="#00ffff"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </svg>

                 
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.demoLink}
                      className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-mono font-bold hover:bg-cyan-300 transition-colors duration-200 flex items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      DEMO
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-mono font-bold hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      CODE
                    </motion.a>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  
                  <div className="flex items-center justify-between mb-3">
                    <motion.h3 
                      className="text-xl font-mono font-bold text-white"
                      animate={{
                        x: glitchIndex === index ? [-2, 2, -1, 1, 0] : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-xs font-mono text-gray-400 bg-gray-800/60 px-2 py-1 rounded">
                      {project.lines} lines
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                    {project.description}
                  </p>
                  
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="bg-slate-700/80 border border-cyan-400/30 text-cyan-400 text-xs px-3 py-1 rounded-full font-mono"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(0, 255, 255, 0.1)'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                
                <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-cyan-400/60" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-cyan-400/60" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-cyan-400/60" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-cyan-400/60" />
                </div>
              </motion.div>
            );
          })}
        </div>

        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-cyan-400/30 w-16"></div>
              <Zap className="w-5 h-5 text-cyan-400" />
              <div className="h-px bg-cyan-400/30 w-16"></div>
            </div>
          </motion.div>
          
          <motion.a
            href="https://github.com/tuusuario"
            className="group inline-flex items-center gap-3 text-cyan-400 hover:text-white font-mono text-lg border-2 border-cyan-400/60 hover:border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>VER_MAS_PROYECTOS.sh</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;