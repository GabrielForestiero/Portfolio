import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({
  name = "Gabriel Forestiero",
  socialLinks = {
    github: "https://github.com/GabrielForestiero",
    linkedin: "https://www.linkedin.com/in/gabriel-forestiero-dev/",
    email: "mailto:gabyforestiero@gmail.com"
  }
}) => {
  const currentYear = new Date().getFullYear();

  const socialData = [
    {
      icon: Github,
      href: socialLinks.github,
      label: "GitHub",
      color: "text-purple-400",
      hoverColor: "hover:text-purple-300"
    },
    {
      icon: Linkedin,
      href: socialLinks.linkedin,
      label: "LinkedIn",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300"
    },
    {
      icon: Mail,
      href: socialLinks.email,
      label: "Email",
      color: "text-cyan-400",
      hoverColor: "hover:text-cyan-300"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 overflow-hidden">
      {/* Background effects similar al Hero */}
      <div className="absolute inset-0">
        {/* Subtle matrix rain */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/30 font-mono text-xs whitespace-pre"
              style={{ left: `${i * 16}%` }}
              animate={{
                y: ['0vh', '100vh']
              }}
              transition={{
                duration: 25 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 25
              }}
            >
              {Array.from({ length: 15 }, () => 
                Math.random() > 0.5 ? '1' : '0'
              ).join('\n')}
            </motion.div>
          ))}
        </div>

        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            {Array.from({ length: 4 }, (_, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 3, delay: i * 0.5 }}
              >
                <polygon
                  points="40,20 60,30 60,50 40,60 20,50 20,30"
                  stroke="#00ffff"
                  strokeWidth="0.3"
                  fill="none"
                  transform={`translate(${i * 300 + 50}, 40)`}
                />
              </motion.g>
            ))}
          </svg>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative line at top */}
          <motion.div 
            className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Social networks */}
          <motion.div 
            className="flex space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {socialData.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg transition-all duration-300 ${social.color} ${social.hoverColor} hover:border-cyan-400/50 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-400/20`}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.div>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Terminal-style divider */}
        

          {/* Copyright with cyberpunk style */}
          <motion.div 
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-400 text-sm font-mono">
              <span className="text-purple-400"></span> © {currentYear} {name}
              <span className="text-cyan-400 mx-2">|</span>
              <span className="text-gray-500">Todos los derechos reservados</span>
            </p>
            
         

            {/* Status indicator */}
            
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div 
            className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
        </motion.div>
      </div>

      {/* Corner decorations similar al Hero */}
    
    </footer>
  );
};

export default Footer;