'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, Wifi, Server, Cloud } from 'lucide-react';

export default function AwarenessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50 dark:from-black dark:to-emerald-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-bold text-emerald-900 dark:text-white">
            Cyber Security Awareness
          </h2>
          <p className="text-emerald-800/80 dark:text-emerald-300/80 max-w-2xl mx-auto">
            Understanding the digital threats and implementing proper security measures 
            is crucial in today's interconnected world.
          </p>
        </motion.div>

        {/* Infographics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AwarenessCard
            icon={Shield}
            title="Threat Prevention"
            description="Proactive measures to prevent cyber attacks before they happen"
            stats={[
              { label: 'Attacks Blocked', value: '10M+' },
              { label: 'Success Rate', value: '99.9%' },
            ]}
            index={0}
          />

          <AwarenessCard
            icon={Lock}
            title="Data Protection"
            description="Secure your sensitive information with enterprise-grade encryption"
            stats={[
              { label: 'Data Protected', value: '500TB+' },
              { label: 'Encryption', value: 'AES-256' },
            ]}
            index={1}
          />

          <AwarenessCard
            icon={AlertTriangle}
            title="Vulnerability Assessment"
            description="Regular security audits to identify and fix potential vulnerabilities"
            stats={[
              { label: 'Scans/Day', value: '1000+' },
              { label: 'Coverage', value: '100%' },
            ]}
            index={2}
          />

          <AwarenessCard
            icon={Wifi}
            title="Network Security"
            description="Comprehensive protection for your entire network infrastructure"
            stats={[
              { label: 'Uptime', value: '99.99%' },
              { label: 'Monitoring', value: '24/7' },
            ]}
            index={3}
          />

          <AwarenessCard
            icon={Server}
            title="Infrastructure Security"
            description="Protect your servers and infrastructure from unauthorized access"
            stats={[
              { label: 'Servers Protected', value: '5000+' },
              { label: 'Response Time', value: '<1ms' },
            ]}
            index={4}
          />

          <AwarenessCard
            icon={Cloud}
            title="Cloud Security"
            description="Secure cloud solutions with advanced threat detection"
            stats={[
              { label: 'Cloud Platforms', value: 'All' },
              { label: 'Compliance', value: 'ISO 27001' },
            ]}
            index={5}
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 rounded-lg bg-emerald-900 dark:bg-emerald-600 
                           text-white font-medium hover:bg-emerald-800 
                           dark:hover:bg-emerald-700 transition-colors
                           shadow-lg shadow-emerald-900/20 dark:shadow-emerald-900/40">
            Learn More About Security
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function AwarenessCard({ 
  icon: Icon, 
  title, 
  description, 
  stats, 
  index 
}: { 
  icon: any;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-white dark:bg-black/40 
                 border border-emerald-900/10 dark:border-emerald-400/10
                 hover:border-emerald-900/20 dark:hover:border-emerald-400/20
                 shadow-lg shadow-emerald-900/5 dark:shadow-emerald-900/5
                 transition-all duration-300"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                     from-emerald-900/[0.02] to-emerald-900/[0.08]
                     dark:from-emerald-400/[0.02] dark:to-emerald-400/[0.08]
                     opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <div className="relative space-y-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-900/10 dark:bg-emerald-400/10 
                       flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-900 dark:text-emerald-400" />
        </div>

        <h3 className="text-xl font-semibold text-emerald-900 dark:text-white">
          {title}
        </h3>

        <p className="text-emerald-800/70 dark:text-emerald-300/70">
          {description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-lg font-mono font-bold text-emerald-900 dark:text-emerald-400">
                {stat.value}
              </div>
              <div className="text-sm text-emerald-800/60 dark:text-emerald-300/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 