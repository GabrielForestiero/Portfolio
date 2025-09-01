import React, { useState } from 'react';
import { Menu, X, User, ShoppingCart, Bell } from 'lucide-react';

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
  logo,
  title = "Mi App",
  showNotifications = false,
  showCart = false,
  cartCount = 0,
  onLogin,
  onCart,
  menuItems = [
    { label: "Inicio", href: "#" },
    { label: "Productos", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Contacto", href: "#" }
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {logo ? (
                <img src={logo} alt={title} className="h-8 w-auto" />
              ) : (
                <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {title.charAt(0)}
                  </span>
                </div>
              )}
              <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">
                {title}
              </span>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={item.onClick}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Iconos de acción */}
          <div className="flex items-center space-x-4">
            {/* Notificaciones */}
            {showNotifications && (
              <button className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
            )}

            {/* Carrito */}
            {showCart && (
              <button 
                onClick={onCart}
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
            )}

            {/* Usuario */}
            <button 
              onClick={onLogin}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Menú hamburguesa mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">            
            {/* Items del menú mobile */}
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;