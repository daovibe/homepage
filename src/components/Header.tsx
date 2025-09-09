import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
interface HeaderProps {
  className?: string;
}
const Header: React.FC<HeaderProps> = ({
  className
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          // Account for header height
          behavior: 'smooth'
        });
      }
    }
  };
  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm' : 'py-5 bg-transparent', className)}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-serif font-medium tracking-tight transition-all hover:opacity-80 text-[#212936]" style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' }}>다오바이브코딩단</NavLink>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} />
        </div>
        
        <button className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          <span className={cn("block w-6 transition-all duration-300", isMobileMenuOpen ? "opacity-0" : "opacity-100")}>
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-4 h-0.5 bg-foreground" />
          </span>
        </button>
      </div>
      
      {isMobileMenuOpen && ReactDOM.createPortal(
        <div 
          className="fixed inset-0 bg-white z-[99999]" 
          style={{ 
            backgroundColor: 'white',
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            width: '100vw',
            height: '100vh',
            zIndex: 99999
          }}
        >
          <div className="relative w-full h-full bg-white">
            <button 
              className="absolute top-5 right-5 p-2" 
              onClick={() => setIsMobileMenuOpen(false)} 
              aria-label="Close menu"
            >
              <span className="block w-6 h-0.5 bg-[#111111] transform rotate-45 translate-y-0.5" />
              <span className="block w-6 h-0.5 bg-[#111111] transform -rotate-45" />
            </button>
            
            <div className="pt-24 px-6 h-full overflow-y-auto bg-white">
              <nav className="flex flex-col space-y-6 text-lg">
          <NavLink to="/" className={({
          isActive
        }) => cn("text-[#111111] hover:text-primary transition-colors", isActive && "text-primary font-semibold")} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
            <button className="text-left text-[#111111] hover:text-primary transition-colors" onClick={() => {
          scrollToSection('about');
          setIsMobileMenuOpen(false);
        }}>
            비밀결사
          </button>
          <button className="text-left text-[#111111] hover:text-primary transition-colors" onClick={() => {
          scrollToSection('activities');
          setIsMobileMenuOpen(false);
        }}>
            혁명의 길
          </button>
          <button className="text-left text-[#111111] hover:text-primary transition-colors" onClick={() => {
          scrollToSection('history');
          setIsMobileMenuOpen(false);
        }}>
            걸어온 길
          </button>
          <a 
            href="https://modulabs.co.kr/community/momos/283" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-left text-[#111111] hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            입단하기
          </a>
              </nav>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>;
};
interface NavLinksProps {
  scrollToSection: (id: string) => void;
}
const NavLinks: React.FC<NavLinksProps> = ({
  scrollToSection
}) => <>
    <button className="text-sm font-medium hover:text-primary transition-colors" onClick={() => scrollToSection('home')}>
      Home
    </button>
    <button className="text-sm font-medium hover:text-primary transition-colors" onClick={() => scrollToSection('about')}>
      비밀결사
    </button>
    <button className="text-sm font-medium hover:text-primary transition-colors" onClick={() => scrollToSection('activities')}>
      혁명의 길
    </button>
    <button className="text-sm font-medium hover:text-primary transition-colors" onClick={() => scrollToSection('history')}>
      걸어온 길
    </button>
    <a 
      href="https://modulabs.co.kr/community/momos/283" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-sm font-medium hover:text-primary transition-colors"
    >
      입단하기
    </a>
  </>;
export default Header;