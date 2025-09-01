import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí integrarías con tu servicio de email preferido
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¡Trabajemos Juntos!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ver cómo puedo ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contáctame Directamente</h3>
            
            <div className="space-y-6 mb-8">
              <a
                href="mailto:tu@email.com"
                className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p>tu@email.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/tuusuario"
                className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <p>linkedin.com/in/tuusuario</p>
                </div>
              </a>

              <a
                href="https://github.com/tuusuario"
                className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <p>github.com/tuusuario</p>
                </div>
              </a>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">¿Preferís una llamada?</h4>
              <p className="text-gray-600 text-sm">
                Disponible para reuniones virtuales de Lunes a Viernes, 9:00 - 18:00 (GMT-3)
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Contame sobre tu proyecto, presupuesto estimado, timeline, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;