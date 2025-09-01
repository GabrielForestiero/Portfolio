import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  name?: string;
  email?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  name = "Tu Nombre",
  socialLinks = {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
    email: "mailto:tu@email.com"
  }
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Redes sociales */}
          <div className="flex space-x-6">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {socialLinks.email && (
              <a
                href={socialLinks.email}
                className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            )}
          </div>

          {/* Línea divisoria */}
          <div className="w-24 h-px bg-gray-700"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} {name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center justify-center text-gray-500 text-xs">
              <span>Hecho con</span>
              <Heart className="w-3 h-3 mx-1 text-red-500 fill-current" />
              <span>desde Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;