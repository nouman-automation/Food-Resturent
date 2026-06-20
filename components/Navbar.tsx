'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Deals', href: '#deals' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark-bg/80 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold flex items-center justify-center">
                <span className="text-gold font-serif font-bold">P</span>
              </div>
              <span className="hidden sm:inline font-serif font-bold text-xl text-white">
                Premium
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+61299999999" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors">
              <Phone size={18} />
              <span className="text-sm">(02) 9999 9999</span>
            </a>
            <button className="px-6 py-2 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 hover-lift">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gold/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-white/80 hover:text-gold transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-3 flex gap-2">
              <a href="tel:+61299999999" className="flex-1 text-center py-2 border border-gold/30 text-gold rounded-lg text-sm">
                (02) 9999 9999
              </a>
              <button className="flex-1 px-4 py-2 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-all text-sm">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
