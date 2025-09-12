import { useState } from 'react';
import { Github, Linkedin, Mail, Send, MapPin, Code, Terminal, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Gabriel',
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        'service_374jeej',
        'template_00ugn7b',
        templateParams,
        'zjR8Vtrgn-KgwTl2U'
      );

      console.log('Email enviado exitosamente:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);


      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const handleChange = (e: { target: { name: any; value: any }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-black"></div>


        <div className="absolute inset-0 overflow-hidden opacity-3">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/20 font-mono text-xs whitespace-pre animate-pulse"
              style={{
                left: `${i * 12}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            >
              {Array.from({ length: 30 }, () =>
                Math.random() > 0.5 ? '1' : '0'
              ).join('\n')}
            </div>
          ))}
        </div>


        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            {Array.from({ length: 6 }, (_, i) => (
              <g
                key={i}
                style={{
                  opacity: 0.3,
                  animation: `fadeIn 2s ease-in-out ${i * 0.3}s both`
                }}
              >
                <polygon
                  points="60,30 90,45 90,75 60,90 30,75 30,45"
                  stroke="#00ffff"
                  strokeWidth="0.5"
                  fill="none"
                  transform={`translate(${i * 200 + 100}, ${(i % 2) * 300 + 150})`}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6"
            style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
            }}
          >
            <span className="text-white">&gt;</span>
            <span className="text-cyan-400 ml-2">CONTACTO</span>
          </h2>

          <div className="flex items-center justify-center gap-6 mb-6">
            <div
              className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-32"
              style={{
                animation: 'scaleX 1s ease-out 0.5s both',
                transformOrigin: 'center'
              }}
            />
            <div
              className="flex-1 h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent max-w-32"
              style={{
                animation: 'scaleX 1s ease-out 0.5s both',
                transformOrigin: 'center'
              }}
            />
          </div>
        </div>


        {submitStatus && (
          <div
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg border backdrop-blur-sm flex items-center gap-3 font-mono text-sm max-w-md transition-all duration-500 ${submitStatus === 'success'
                ? 'bg-green-900/80 border-green-400 text-green-400'
                : 'bg-red-900/80 border-red-400 text-red-400'
              }`}
            style={{
              animation: 'slideInRight 0.5s ease-out'
            }}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>
              {submitStatus === 'success'
                ? '¡Mensaje enviado! Te contactaré pronto.'
                : 'Error al enviar. Intenta de nuevo.'}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          <div className="flex flex-col items-center">
            <h3
              className="text-2xl font-mono font-bold text-white mb-8 text-center"
              style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
            >
              <span className="text-cyan-400">$</span> CONECTAR DIRECTAMENTE
            </h3>


            <div className="w-full max-w-md space-y-6 mb-8">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'gabyforestiero@gmail.com',
                  href: 'mailto:gabyforestiero@gmail.com',
                  color: 'cyan'
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/gabriel-forestiero-dev',
                  href: 'https://www.linkedin.com/in/gabriel-forestiero-dev/',
                  color: 'blue'
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: 'github.com/GabrielForestiero',
                  href: 'https://github.com/GabrielForestiero',
                  color: 'purple'
                },
                {
                  icon: MapPin,
                  label: 'Ubicación',
                  value: 'Buenos Aires, Argentina',
                  href: '#',
                  color: 'green'
                }
              ].map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group flex items-center gap-4 bg-gray-900/70 backdrop-blur-sm border border-gray-700/60 hover:border-cyan-400/60 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-[1.02] hover:translate-x-2"
                  style={{
                    opacity: 0,
                    animation: `slideInLeft 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div
                    className={`w-12 h-12 bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-gray-700 transition-all duration-300 group-hover:rotate-12`}
                  >
                    <contact.icon className={`w-6 h-6 text-cyan-400`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {contact.label}
                    </p>
                    <p className="text-sm text-gray-400 font-mono break-all">
                      {contact.value}
                    </p>
                  </div>
                  <div
                    className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>


          <div className="flex flex-col justify-center">
            <h3
              className="text-2xl font-mono font-bold text-white mb-8 text-center"
              style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
            >
              <span className="text-purple-400">{'>'}</span> ENVIAR MENSAJE
            </h3>


            <div className="space-y-6">
              <div
                style={{
                  opacity: 0,
                  animation: 'slideInUp 0.8s ease-out 0.1s both'
                }}
              >
                <label htmlFor="name" className="block text-sm font-mono font-medium text-cyan-400 mb-2">
                  <Code className="w-4 h-4 inline mr-2" />
                  NOMBRE *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white font-mono placeholder-gray-500 hover:border-gray-600 disabled:opacity-50"
                  placeholder="Tu nombre completo..."
                />
              </div>

              <div
                style={{
                  opacity: 0,
                  animation: 'slideInUp 0.8s ease-out 0.2s both'
                }}
              >
                <label htmlFor="email" className="block text-sm font-mono font-medium text-cyan-400 mb-2">
                  <Terminal className="w-4 h-4 inline mr-2" />
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white font-mono placeholder-gray-500 hover:border-gray-600 disabled:opacity-50"
                  placeholder="tu@email.com"
                />
              </div>

              <div
                style={{
                  opacity: 0,
                  animation: 'slideInUp 0.8s ease-out 0.3s both'
                }}
              >
                <label htmlFor="message" className="block text-sm font-mono font-medium text-cyan-400 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  MENSAJE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white font-mono placeholder-gray-500 resize-none hover:border-gray-600 disabled:opacity-50"
                  placeholder="Contame sobre tu proyecto, presupuesto, timeline, etc."
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 font-mono font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-cyan-400/60 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 disabled:cursor-not-allowed overflow-hidden hover:scale-[1.02] hover:-translate-y-0.5 disabled:hover:scale-100 disabled:hover:translate-y-0"
                style={{
                  opacity: 0,
                  animation: 'slideInUp 0.8s ease-out 0.4s both'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>ENVIANDO...</span>
                  </>
                ) : (
                  <>
                    <span>ENVIAR</span>
                    <div className="group-hover:rotate-12 group-hover:translate-x-0.5 transition-transform duration-300">
                      <Send className="w-5 h-5" />
                    </div>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.3; }
        }
        
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;