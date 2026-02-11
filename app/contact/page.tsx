'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-secondary cursor-pointer">🥜 Amlou</h1>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/#accueil" className="text-gray-700 hover:text-primary transition">
                Accueil
              </Link>
              <Link href="/#produit" className="text-gray-700 hover:text-primary transition">
                Produit
              </Link>
              <Link href="/#bienfaits" className="text-gray-700 hover:text-primary transition">
                Bienfaits
              </Link>
              <Link href="/#temoignages" className="text-gray-700 hover:text-primary transition">
                Témoignages
              </Link>
              <Link href="/#commander" className="text-gray-700 hover:text-primary transition">
                Commander
              </Link>
              <Link href="/contact" className="text-primary font-semibold transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
              Contactez-<span className="text-primary">nous</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une question ? Une suggestion ? Nous sommes là pour vous écouter !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Nos coordonnées
                </h2>
                <p className="text-gray-600 mb-8">
                  N&apos;hésitez pas à nous contacter par téléphone, e-mail ou via le formulaire. 
                  Notre équipe est disponible pour répondre à toutes vos questions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Email</h3>
                      <p className="text-gray-600">contact@amlou.ma</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Nous répondons sous 24h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Téléphone</h3>
                      <p className="text-gray-600">+212 6XX XX XX XX</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Lun - Ven : 9h - 18h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Adresse</h3>
                      <p className="text-gray-600">Casablanca, Maroc</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Visite sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                <h3 className="font-semibold text-secondary mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-3xl hover:scale-110 transition transform">📘</a>
                  <a href="#" className="text-3xl hover:scale-110 transition transform">📷</a>
                  <a href="#" className="text-3xl hover:scale-110 transition transform">🐦</a>
                  <a href="#" className="text-3xl hover:scale-110 transition transform">💼</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
