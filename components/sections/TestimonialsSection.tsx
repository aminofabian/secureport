'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Chen",
    role: "CTO",
    company: "TechCorp Solutions",
    avatar: "/images/testimonials/david.jpg",
    content: "The cybersecurity solutions provided have significantly enhanced our security posture. The team's expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "Security Director",
    company: "Global Finance Inc",
    avatar: "/images/testimonials/emily.jpg",
    content: "Outstanding service and proactive threat detection. They've helped us prevent several potential security breaches.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "IT Manager",
    company: "Healthcare Systems",
    avatar: "/images/testimonials/michael.jpg",
    content: "Their security assessment revealed critical vulnerabilities we weren't aware of. The implementation of solutions was smooth and effective.",
    rating: 5,
  },
];

interface TestimonialsSectionProps {
  isEnabled?: boolean;
}

export default function TestimonialsSection({ isEnabled = false }: TestimonialsSectionProps) {
  if (!isEnabled) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-emerald-900/10 dark:bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-1/4 h-1/4 bg-emerald-800/10 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 dark:text-white">
            Client Success Stories
          </h2>
          <p className="text-emerald-800/80 dark:text-emerald-300/80 max-w-2xl mx-auto">
            See what our clients say about our cybersecurity solutions and services
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg 
                           bg-emerald-900 dark:bg-emerald-600 text-white font-medium 
                           hover:bg-emerald-800 dark:hover:bg-emerald-700 transition-colors">
            <span>View More Success Stories</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-white dark:bg-black/40 
                 border border-emerald-900/10 dark:border-emerald-400/10
                 hover:border-emerald-900/20 dark:hover:border-emerald-400/20
                 transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-emerald-900/10 dark:text-emerald-400/10">
        <Quote className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Rating */}
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star 
              key={i} 
              className="w-5 h-5 text-emerald-500 dark:text-emerald-400 fill-current" 
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-emerald-800/80 dark:text-emerald-300/80">
          "{testimonial.content}"
        </p>

        {/* Author Info */}
        <div className="flex items-center space-x-4 pt-4 border-t border-emerald-900/10 dark:border-emerald-400/10">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-emerald-900 dark:text-white">
              {testimonial.name}
            </h4>
            <p className="text-sm text-emerald-800/60 dark:text-emerald-300/60">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 