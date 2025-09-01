import { Code, Database, Globe, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend', icon: <Code className="w-6 h-6" />, techs: ['React', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: <Database className="w-6 h-6" />, techs: ['Node.js', 'Python', 'PostgreSQL'] },
    { name: 'Web', icon: <Globe className="w-6 h-6" />, techs: ['Next.js', 'REST APIs', 'GraphQL'] },
    { name: 'Mobile', icon: <Smartphone className="w-6 h-6" />, techs: ['React Native', 'Flutter'] }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desarrollador con +3 años de experiencia creando aplicaciones web y móviles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mi Historia</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Comenzé mi carrera como desarrollador hace 3 años, especializándome en tecnologías web modernas. 
                Me apasiona crear soluciones elegantes y funcionales que generen impacto real.
              </p>
              <p>
                He trabajado en proyectos diversos, desde aplicaciones web empresariales hasta plataformas de e-commerce, 
                siempre enfocándome en la calidad del código y la experiencia del usuario.
              </p>
              <p>
                Cuando no estoy programando, disfruto aprender nuevas tecnologías, contribuir a proyectos open source 
                y compartir conocimiento con la comunidad de desarrolladores.
              </p>
            </div>
          </div>

          {/* Imagen placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Tu foto aquí</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Skills & Tecnologías</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-4 text-blue-600">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{skill.name}</h4>
                <div className="space-y-1">
                  {skill.techs.map((tech, techIndex) => (
                    <span key={techIndex} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;