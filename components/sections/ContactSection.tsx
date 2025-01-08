'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormData {
  name: string;
  email: string;
  comments: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  comments?: string;
  captcha?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    comments: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required';
    }

    if (!captchaValue) {
      newErrors.captcha = 'Please complete the CAPTCHA';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken: captchaValue,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', comments: '' });
        setCaptchaValue(null);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 dark:from-black dark:to-emerald-950/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3 bg-emerald-900/10 dark:bg-emerald-400/10 rounded-full blur-3xl" />
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
            Get in Touch
          </h2>
          <p className="text-emerald-800/80 dark:text-emerald-300/80 max-w-2xl mx-auto">
            Have questions about our cybersecurity solutions? We're here to help.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium text-emerald-900 dark:text-emerald-300 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 
                           border ${errors.name 
                             ? 'border-red-500 dark:border-red-400' 
                             : 'border-emerald-900/10 dark:border-emerald-400/10'
                           } focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium text-emerald-900 dark:text-emerald-300 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 
                           border ${errors.email 
                             ? 'border-red-500 dark:border-red-400' 
                             : 'border-emerald-900/10 dark:border-emerald-400/10'
                           } focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Comments Field */}
            <div>
              <label 
                htmlFor="comments"
                className="block text-sm font-medium text-emerald-900 dark:text-emerald-300 mb-2"
              >
                Comments *
              </label>
              <textarea
                id="comments"
                rows={5}
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-black/40 
                           border ${errors.comments 
                             ? 'border-red-500 dark:border-red-400' 
                             : 'border-emerald-900/10 dark:border-emerald-400/10'
                           } focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                placeholder="Your message..."
              />
              {errors.comments && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.comments}</p>
              )}
            </div>

            {/* ReCAPTCHA */}
            <div>
              {recaptchaSiteKey ? (
                <ReCAPTCHA
                  sitekey={recaptchaSiteKey}
                  onChange={(value: string | null) => setCaptchaValue(value)}
                />
              ) : (
                <p className="text-red-500 dark:text-red-400">
                  reCAPTCHA configuration is missing
                </p>
              )}
              {errors.captcha && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.captcha}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-emerald-900 dark:bg-emerald-600 
                       text-white font-medium hover:bg-emerald-800 dark:hover:bg-emerald-700 
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>

            {/* Status Messages */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                } flex items-center space-x-2`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again.</span>
                  </>
                )}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
} 