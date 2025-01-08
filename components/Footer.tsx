'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: 'Security Assessment', href: '#' },
      { name: 'Managed Security', href: '#' },
      { name: 'Cloud Security', href: '#' },
      { name: 'Incident Response', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#blogs' },
      { name: 'Podcasts', href: '#podcasts' },
      { name: 'Documentation', href: '#' },
      { name: 'Security Guide', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-emerald-900 dark:text-white"
            >
              <Shield className="w-8 h-8" />
              <span className="text-xl font-bold">SecurePort</span>
            </Link>
            <p className="text-emerald-800/70 dark:text-emerald-300/70">
              Advanced cybersecurity solutions for modern digital infrastructure.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-emerald-900/5 dark:bg-emerald-100/5 
                           hover:bg-emerald-900/10 dark:hover:bg-emerald-100/10 
                           text-emerald-900 dark:text-emerald-400"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
            {/* Services */}
            <div>
              <h3 className="font-semibold text-emerald-900 dark:text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {links.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-emerald-800/70 dark:text-emerald-300/70 
                               hover:text-emerald-900 dark:hover:text-emerald-300 
                               transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-emerald-900 dark:text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {links.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-emerald-800/70 dark:text-emerald-300/70 
                               hover:text-emerald-900 dark:hover:text-emerald-300 
                               transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-emerald-900 dark:text-white mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-emerald-800/70 dark:text-emerald-300/70 
                               hover:text-emerald-900 dark:hover:text-emerald-300 
                               transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-900/10 dark:border-emerald-400/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-emerald-800/60 dark:text-emerald-300/60 text-sm">
              © {currentYear} SecurePort. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-emerald-800/60 dark:text-emerald-300/60 
                         hover:text-emerald-900 dark:hover:text-emerald-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-emerald-800/60 dark:text-emerald-300/60 
                         hover:text-emerald-900 dark:hover:text-emerald-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-emerald-800/60 dark:text-emerald-300/60 
                         hover:text-emerald-900 dark:hover:text-emerald-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 