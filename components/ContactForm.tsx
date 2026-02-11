'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { isValidEmail } from '@/lib/validation';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse e-mail est requise';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Format d\'adresse e-mail invalide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'L\'objet est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setSubmitMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Une erreur est survenue lors de l&apos;envoi du message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Erreur lors de l&apos;envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">
            Vous avez une question ? N&apos;hésitez pas à nous contacter
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-3"
            >
              <span className="text-2xl">✓</span>
              <span className="font-semibold">{submitMessage}</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 flex items-center gap-3"
            >
              <span className="text-2xl">⚠</span>
              <span className="font-semibold">{submitMessage}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary transition`}
                placeholder="Votre nom complet"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <span>⚠</span> {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse e-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary transition`}
                placeholder="votre.email@exemple.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Objet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary transition`}
                placeholder="L'objet de votre message"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <span>⚠</span> {errors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-primary transition resize-none`}
                placeholder="Écrivez votre message ici..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <span>⚠</span> {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-full font-bold text-lg transition-all transform ${
                isSubmitting
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-primary hover:bg-secondary text-white hover:scale-105'
              } shadow-lg`}
            >
              {isSubmitting ? '⏳ Envoi en cours...' : '📧 Envoyer le message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">
              Ou contactez-nous directement :
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <span>📧</span>
                <span>contact@amlou.ma</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📱</span>
                <span>+212 6XX XX XX XX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
