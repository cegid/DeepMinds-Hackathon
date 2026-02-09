'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Découvrez l'<span className="text-primary">Amlou</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Une pâte à tartiner traditionnelle marocaine, fabriquée avec des amandes grillées, 
              de l'huile d'argan pure et du miel naturel. Un trésor culinaire du Maroc.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#commander"
                className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Commander Maintenant
              </a>
              <a
                href="#produit"
                className="bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-full font-semibold transition-all border-2 border-secondary"
              >
                En Savoir Plus
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600">Naturel</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">Bio</p>
                <p className="text-sm text-gray-600">Certifié</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Clients Satisfaits</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4">🥜</div>
                  <p className="text-2xl font-bold text-white drop-shadow-lg">Amlou Artisanal</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg"
            >
              -20% Offre Limitée!
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">🌰</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-pulse">🍯</div>
    </section>
  );
}
