import React from 'react';
import WelcomeSection from '@/components/sections/WelcomeSection';
import AwarenessSection from '@/components/sections/AwarenessSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BlogsSection from '@/components/sections/BlogsSection';
import PodcastsSection from '@/components/sections/PodcastsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen dark:bg-gray-900 dark:text-white">
        {/* Section 1: Welcome */}
        <section id="welcome">
          <WelcomeSection />
        </section>

        {/* Section 2: Awareness */}
        <section id="awareness">
          <AwarenessSection />
        </section>

        {/* Section 3: Problem Identification */}
        <section id="problems">
          <ProblemSection />
        </section>

        {/* Section 4: Services */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Section 5: Blogs */}
        <section id="blogs">
          <BlogsSection />
        </section>

        {/* Section 6: Podcasts */}
        <section id="podcasts">
          <PodcastsSection />
        </section>

        {/* Section 7: Testimonials (Hidden by default) */}
        <section id="testimonials">
          <TestimonialsSection isEnabled={false} />
        </section>

        {/* Section 8: Contact Form */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
