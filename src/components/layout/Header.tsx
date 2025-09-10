import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Bell, Terminal, Code2 } from 'lucide-react';
import logoImage from '../../assets/logonewx.png';

interface HeaderProps {
  logo?: string;
  title?: string;
  showNotifications?: boolean;
  showCart?: boolean;
  cartCount?: number;
  onLogin?: () => void;
  onCart?: () => void;
  menuItems?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
}

const Header: React.FC<HeaderProps> = ({
  logo = logoImage,
  title = "Gabriel Forestiero",
  showNotifications = false,
  showCart = false,
  cartCount = 0,
  onCart,
  menuItems = [
    { label: "home.init()", href: "#" },
    { label: "projects.exe", href: "#projects" },
    { label: "skills.json", href: "#skills" },
    { label: "contact.md", href: "#contact" }
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efecto glitch para el título
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl fixed top-0 z-50 w-full">
        {/* Línea superior sutil */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo y título */}
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center group cursor-pointer">
                {logo ? (
                  <img src={logo} alt={title} className="h-32 w-auto" />
                ) : (
                  <div className="relative">
                    <div className="h-10 w-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center border border-cyan-400/50 shadow-lg shadow-cyan-400/30">
                      <Terminal className="text-white w-5 h-5" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg animate-pulse opacity-30"></div>
                  </div>
                )}
                <div className="ml-3">
                  <span className={`text-xl font-mono font-bold text-white hidden sm:block transition-all duration-200 ${
                    glitchActive ? 'animate-pulse text-cyan-400' : ''
                  }`}>
                    {title}
                  </span>
                </div>
              </a>
            </div>

            {/* Navegación desktop y acciones a la derecha */}
            <div className="flex items-center space-x-6">
              {/* Navegación desktop */}
              <nav className="hidden md:flex space-x-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={item.onClick}
                    className="group relative text-blue-200 hover:text-cyan-400 px-4 py-2 font-mono text-sm font-medium transition-all duration-300 border border-transparent hover:border-cyan-400/30 rounded-lg backdrop-blur-sm hover:bg-cyan-400/5"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      {item.label}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </a>
                ))}
              </nav>

              {/* Iconos de acción */}
              <div className="flex items-center space-x-3">
                {/* Notificaciones */}
                {showNotifications && (
                  <button className="p-2 text-blue-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300 relative border border-transparent hover:border-cyan-400/30 backdrop-blur-sm">
                    <Bell className="w-5 h-5" />
                    <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </button>
                )}

                {/* Carrito */}
                {showCart && (
                  <button 
                    onClick={onCart}
                    className="p-2 text-blue-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300 relative border border-transparent hover:border-cyan-400/30 backdrop-blur-sm"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs rounded-full flex items-center justify-center font-mono border border-cyan-400/50">
                        {cartCount > 99 ? '99+' : cartCount}
                      </span>
                    )}
                  </button>
                )}

                {/* Menú hamburguesa mobile */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden group p-2 text-blue-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300 border border-transparent hover:border-cyan-400/30 backdrop-blur-sm"
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menú mobile - Integrado con el header */}
      <div className={`md:hidden fixed left-0 right-0 top-20 z-40 transform transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        {/* Extensión del header sin separación */}
        <div className="bg-gradient-to-b from-gray-900/95 via-slate-900/95 to-black/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-xl">
          {/* Línea de conexión superior */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
          
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            {/* Items del menú mobile */}
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-300 ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                      setIsMenuOpen(false);
                    }}
                    className="group flex items-center gap-3 text-blue-200 hover:text-cyan-400 hover:bg-cyan-400/5 px-4 py-3 rounded-lg font-mono text-base font-medium transition-all duration-300 border border-transparent hover:border-cyan-400/30 backdrop-blur-sm"
                  >
                    <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="flex-1">{item.label}</span>
                    <span className="text-xs text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Línea inferior */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        </div>

        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm -z-10 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>

      {/* Estilos adicionales */}
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default Header;