'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Lock, Server } from 'lucide-react';
import { getImageUrl } from '@/utils/imageUtils';

const services = [
  {
    title: "Security Assessment",
    description: "Comprehensive evaluation of your digital infrastructure to identify vulnerabilities and security gaps.",
    features: [
      "Vulnerability Scanning",
      "Penetration Testing",
      "Risk Assessment",
      "Security Audit",
    ],
    icon: Shield,
    image: "/3.jpg",
    color: "from-emerald-900 to-emerald-700",
  },
  {
    title: "Managed Security",
    description: "24/7 monitoring and management of your security infrastructure to prevent and respond to threats.",
    features: [
      "Real-time Monitoring",
      "Threat Detection",
      "Incident Response",
      "Security Updates",
    ],
    icon: Lock,
    image: "/4.png",
    color: "from-emerald-800 to-emerald-600",
  },
  {
    title: "Cloud Security",
    description: "Secure your cloud infrastructure and applications with advanced protection measures.",
    features: [
      "Cloud Protection",
      "Data Encryption",
      "Access Control",
      "Compliance Management",
    ],
    icon: Server,
    image: "/2.jpg",
    color: "from-emerald-700 to-emerald-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50 dark:from-black dark:to-emerald-950/20">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-emerald-800/80 dark:text-emerald-300/80 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital assets
            and ensure business continuity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="group relative px-8 py-4 rounded-lg bg-emerald-900 dark:bg-emerald-600 
                         text-white font-medium overflow-hidden">
            <span className="relative z-10">Get Started with Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-600 
                          dark:from-emerald-500 dark:to-emerald-400 
                          translate-y-full group-hover:translate-y-0 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-white dark:bg-black/40 rounded-2xl overflow-hidden"
    >
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90 z-10`} />
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm 
                         flex items-center justify-center">
            <service.icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-emerald-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-emerald-800/70 dark:text-emerald-300/70">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.2) + (i * 0.1) }}
              className="flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-900 dark:bg-emerald-400" />
              <span className="text-emerald-800 dark:text-emerald-300">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Learn More Link */}
        <motion.a
          href="#"
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-emerald-900 dark:text-emerald-400 
                     font-medium hover:text-emerald-700 dark:hover:text-emerald-300"
        >
          Learn more
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-emerald-900/0 dark:border-emerald-400/0 
                    group-hover:border-emerald-900/20 dark:group-hover:border-emerald-400/20 
                    rounded-2xl transition-colors" />
    </motion.div>
  );
} 