'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, Clock, User } from 'lucide-react';
import { getImageUrl } from '@/utils/imageUtils';

const blogs = [
  {
    id: 1,
    title: "The Rise of AI in Cybersecurity",
    excerpt: "Exploring how artificial intelligence is revolutionizing threat detection and response in cybersecurity.",
    image: '/5.jpg',
    author: "John Smith",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "Zero Trust Security Model",
    excerpt: "Understanding the principles and implementation of zero trust architecture in modern organizations.",
    image: "/4.png",
    author: "Sarah Johnson",
    date: "Mar 12, 2024",
    readTime: "7 min read",
    category: "Security Architecture",
  },
  {
    id: 3,
    title: "Cloud Security Best Practices",
    excerpt: "Essential security measures and strategies for protecting your cloud infrastructure.",
    image: "/8.jpg",
    author: "Mike Wilson",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    category: "Cloud Computing",
  },
  {
    id: 4,
    title: "Ransomware Prevention Guide",
    excerpt: "Comprehensive guide to protecting your organization from ransomware attacks.",
    image: "/7.jpg",
    author: "Emma Davis",
    date: "Mar 8, 2024",
    readTime: "8 min read",
    category: "Threat Prevention",
  },
];

export default function BlogsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + blogs.length) % blogs.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 dark:text-white">
            Latest Insights
          </h2>
          <p className="text-emerald-800/80 dark:text-emerald-300/80 max-w-2xl mx-auto">
            Stay informed about the latest trends and developments in cybersecurity
          </p>
        </motion.div>

        {/* Blog Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                <BlogCard blog={blogs[currentIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={() => paginate(-1)}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white 
                         hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white 
                         hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 flex justify-center gap-4">
            {blogs.map((blog, index) => (
              <button
                key={blog.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`relative w-20 h-20 rounded-lg overflow-hidden 
                           ${index === currentIndex ? 'ring-2 ring-emerald-500' : 'opacity-50'}`}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog }: { blog: typeof blogs[0] }) {
  return (
    <div className="relative w-full h-full group">
      {/* Background Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        className="object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/20 text-emerald-300 
                           backdrop-blur-sm border border-emerald-500/20">
              {blog.category}
            </span>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            {blog.title}
          </h3>
          
          <p className="text-gray-300 mb-6">
            {blog.excerpt}
          </p>

          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 