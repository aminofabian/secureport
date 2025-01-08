'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ShieldAlert, UserX, Laptop, Building, DollarSign, AlignVerticalDistributeStart } from 'lucide-react';

const problems = [
  {
    icon: ShieldAlert,
    title: "Data Breaches",
    description: "Organizations face increasing risks of data breaches, potentially exposing sensitive customer information and intellectual property.",
    impact: "60% of small businesses close within 6 months of a cyber attack",
    solution: "Implement multi-layered security protocols and encryption",
    image: "/6.jpg",
    imageAlt: "Data Breach Visualization",
  },
  {
    icon: AlignVerticalDistributeStart,
    title: "Ransomware Attacks",
    description: "Malicdsomware damage costs exceed $20 billion annually",
    solution: "Regular backups and comprehensive disaster recovery planning",
    image: "/2.jpg",
    imageAlt: "Ransomware Attack Illustration",
  },
  {
    icon: UserX,
    title: "Social Engineering",
    description: "Cybercriminals exploit human psychology through phishing and social engineering attacks.",
    impact: "95% of cybersecurity breaches are caused by human error",
    solution: "Regular security awareness training for all employees",
    image: "/8.jpg",
    imageAlt: "Phishing Attack Diagram",
  },
  {
    icon: Laptop,
    title: "Remote Work Vulnerabilities",
    description: "The shift to remote work has created new security challenges for organizations.",
    impact: "Remote work has increased the average cost of a data breach by $137,000",
    solution: "Secure remote access solutions and endpoint protection",
    image: "/6.jpg",
    imageAlt: "Remote Work Security",
  },
  {
    icon: Building,
    title: "Infrastructure Threats",
    description: "Critical infrastructure faces increasing cyber threats from state-sponsored actors.",
    impact: "54% of industrial systems reported attempted cyber attacks",
    solution: "Advanced threat detection and response systems",
    image: "/4.png",
    imageAlt: "Infrastructure Security",
  },
  {
    icon: DollarSign,
    title: "Financial Fraud",
    description: "Sophisticated cyber attacks targeting financial systems and cryptocurrency platforms.",
    impact: "Cybercrime costs organizations $17.5M on average per year",
    solution: "Real-time monitoring and fraud detection systems",
    image: "/5.jpg",
    imageAlt: "Financial Fraud Prevention",
  },
];

export default function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-black">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute w-[400px] h-[400px] bg-emerald-800/10 rounded-full blur-3xl animate-blob animation-delay-2000 right-0" />
          <div className="absolute w-[300px] h-[300px] bg-emerald-700/10 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-0" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Glowing Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-emerald-500/20 via-emerald-900/20 to-emerald-500/20 opacity-50" />
          <h2 className="text-5xl font-bold text-emerald-900 dark:text-white relative">
            Security
            <span className="relative inline-block ml-3">
              Challenges
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-900 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-emerald-800/80 dark:text-emerald-300/80 max-w-2xl mx-auto mt-6 relative">
            Identifying and understanding modern cyber threats is crucial for effective protection.
          </p>
        </motion.div>

        {/* Problems Grid with 3D Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="group relative perspective"
            >
              <div 
                className="relative rounded-2xl overflow-hidden transform-gpu transition-transform duration-500 ease-out
                          hover:shadow-2xl hover:shadow-emerald-900/20 dark:hover:shadow-emerald-400/20
                          bg-white dark:bg-black/40 border border-emerald-900/10 dark:border-emerald-400/10"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {/* Card Header with Icon */}
                <div className="p-6 relative">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-900/10 dark:bg-emerald-400/10 
                                  flex items-center justify-center group-hover:scale-110 transition-transform">
                      <problem.icon className="w-6 h-6 text-emerald-900 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900 dark:text-white">
                      {problem.title}
                    </h3>
                  </div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      className="w-6 h-6 rounded-full bg-emerald-900/10 dark:bg-emerald-400/10
                                flex items-center justify-center"
                    >
                      <span className="text-emerald-900 dark:text-emerald-400 text-xs">+</span>
                    </motion.div>
                  </div>
                </div>

                {/* Card Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-4">
                        {/* Image with Overlay */}
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent z-10" />
                          <Image
                            src={problem.image}
                            alt={problem.imageAlt}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        <p className="text-emerald-800/70 dark:text-emerald-300/70">
                          {problem.description}
                        </p>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 
                                        border border-red-100 dark:border-red-900/20
                                        transform hover:-translate-y-1 transition-transform">
                            <h4 className="font-semibold text-red-900 dark:text-red-400 text-sm mb-1">Impact</h4>
                            <p className="text-red-800/70 dark:text-red-300/70 text-sm">{problem.impact}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 
                                        border border-emerald-100 dark:border-emerald-900/20
                                        transform hover:-translate-y-1 transition-transform">
                            <h4 className="font-semibold text-emerald-900 dark:text-emerald-400 text-sm mb-1">Solution</h4>
                            <p className="text-emerald-800/70 dark:text-emerald-300/70 text-sm">{problem.solution}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 