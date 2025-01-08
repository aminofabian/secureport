'use client';

import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { Shield, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-emerald-900/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
              <Shield className="w-8 h-8 absolute top-0.5 left-0.5 text-emerald-900/20 dark:text-emerald-400/20 group-hover:text-emerald-700/20 dark:group-hover:text-emerald-300/20 transition-colors" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                SecurePort
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Cybersecurity Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-1">
            <NavLink href="#welcome">HOME</NavLink>
            <NavLink href="#awareness">ABOUT</NavLink>
            <NavLink href="#services">SERVICES</NavLink>
            <NavLink href="#blogs">BLOG</NavLink>
            <NavLink href="#podcasts">PODCASTS</NavLink>
            <NavLink href="#contact">CONTACT</NavLink>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <MobileNavLink href="#welcome">HOME</MobileNavLink>
            <MobileNavLink href="#awareness">ABOUT</MobileNavLink>
            <MobileNavLink href="#services">SERVICES</MobileNavLink>
            <MobileNavLink href="#blogs">BLOG</MobileNavLink>
            <MobileNavLink href="#podcasts">PODCASTS</MobileNavLink>
            <MobileNavLink href="#contact">CONTACT</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-sm font-mono text-gray-600 hover:text-emerald-900 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors duration-200 group"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 w-full h-full bg-emerald-900/0 group-hover:bg-emerald-900/5 dark:bg-emerald-600/0 dark:group-hover:bg-emerald-600/10 border border-transparent group-hover:border-emerald-900/20 dark:group-hover:border-emerald-600/30 rounded transition-all duration-200"></span>
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm font-mono text-gray-600 hover:text-blue-600 hover:bg-blue-500/5 dark:text-gray-300 dark:hover:text-emerald-400 dark:hover:bg-emerald-500/10 transition-all duration-200"
    >
      {children}
    </Link>
  );
}