import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border neon-border w-full max-w-[100vw]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="https://horizons-cdn.hostinger.com/094e267a-6acd-4343-9c63-c69bf96ca48c/b108e5e4c46168c63794a29b3640be1d.png" 
                alt="MR Infoprodutos"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-semibold transition-all duration-200 active:scale-[0.98]"
            >
              <a href="#produtos">Comprar Agora</a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-200 p-2 -mr-2"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border w-full">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-2"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <Button 
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow font-semibold transition-all duration-200"
              >
                <a href="#produtos" onClick={() => setMobileMenuOpen(false)}>Comprar Agora</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;