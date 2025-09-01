import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito de compras, pagos integrados y panel administrativo.",
      image: "https://via.placeholder.com/400x250/3B82F6/ffffff?text=E-commerce",
      techs: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Manager App",
      description: "Aplicación de gestión de tareas con funcionalidades avanzadas como colaboración en equipo y notificaciones.",
      image: "https://via.placeholder.com/400x250/10B981/ffffff?text=Task+Manager",
      techs: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard interactivo del clima con gráficos en tiempo real y pronóstico extendido para múltiples ciudades.",
      image: "https://via.placeholder.com/400x250/8B5CF6/ffffff?text=Weather+App",
      techs: ["React", "Chart.js", "Weather API", "Tailwind"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Social Media App",
      description: "Red social minimalista con posts, likes, comentarios y sistema de seguimiento entre usuarios.",
      image: "https://via.placeholder.com/400x250/EF4444/ffffff?text=Social+App",
      techs: ["React Native", "Firebase", "Redux", "Expo"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Mis Proyectos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demoLink}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/tuusuario"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            Ver más proyectos en GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;