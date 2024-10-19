import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import favicon from '/home/gustavo/Desktop/Site/my-website/src/components/img/favicon.ico';

const navigation = [
  { name: 'Skills', href: '/skills', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Função para alternar entre abrir e fechar o menu
  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const openMenu = () => {
    const menu = menuRef.current;
    menu.style.display = 'block';
    menu.style.height = '0px';
    let height = 0;
    const animate = () => {
      height += 10;
      menu.style.height = `${height}px`;
      if (height < menu.scrollHeight) {
        requestAnimationFrame(animate);
      } else {
        menu.style.height = 'auto';
      }
    };
    requestAnimationFrame(animate);
  };

  const closeMenu = () => {
    const menu = menuRef.current;
    let height = menu.scrollHeight;
    const animate = () => {
      height -= 10;
      menu.style.height = `${height}px`;
      if (height > 0) {
        requestAnimationFrame(animate);
      } else {
        menu.style.display = 'none';
      }
    };
    requestAnimationFrame(animate);
  };

  // Fechar o menu quando clicares num item no mobile
  const handleLinkClick = () => {
    if (isMenuOpen) {
      closeMenu();
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botão com ícone */}
          <div className="flex items-center">
            {/* Link para a página inicial */}
            <Link to="/" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all duration-300 ease-in-out">
              <img alt="Gustavo Zacarias" src={favicon} className="h-9 w-auto" />
            </Link>
          </div>

          {/* Botão de menu mobile com animação de hambúrguer para cruz */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all duration-300 ease-in-out"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <span className="line top-line"></span>
                <span className="line middle-line"></span>
                <span className="line bottom-line"></span>
              </div>
            </button>
          </div>

          {/* Menus para telas grandes */}
          <div className="hidden sm:ml-auto sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:opacity-80',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                onClick={handleLinkClick} // Fecha o menu no clique
              >
                {item.name === 'Contact' ? (
                  <span className="flex items-center">
                    {item.name}
                    <EnvelopeIcon className="h-5 w-5 ml-2" aria-hidden="true" aria-label="Contact Icon" />
                  </span>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu mobile com transição controlada por JavaScript */}
      <div ref={menuRef} className="sm:hidden" style={{ display: 'none' }}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:opacity-80',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
              onClick={handleLinkClick} // Fecha o menu no clique
            >
              {item.name === 'Contact' ? (
                <span className="flex items-center">
                  {item.name}
                  <EnvelopeIcon className="h-5 w-5 ml-2" aria-hidden="true" aria-label="Contact Icon" />
                </span>
              ) : (
                item.name
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
