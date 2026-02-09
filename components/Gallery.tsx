'use client';

import { motion } from 'framer-motion';

const images = [
  {
    title: 'Amlou Traditionnel',
    emoji: '🥜',
    description: 'La texture onctueuse parfaite'
  },
  {
    title: 'Sur Pain Frais',
    emoji: '🥖',
    description: 'Délicieux au petit-déjeuner'
  },
  {
    title: 'Avec des Crêpes',
    emoji: '🥞',
    description: 'Un régal pour toute la famille'
  },
  {
    title: 'Ingrédients Naturels',
    emoji: '🌰',
    description: 'Amandes, argan et miel'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Comment Déguster l'Amlou
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mille et une façons de savourer cette merveille marocaine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform">
                    {image.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl shadow-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              💡 Conseil du Chef
            </h3>
            <p className="text-lg">
              Pour une expérience optimale, conservez votre Amlou à température ambiante et 
              dégustez-le sur du pain frais, des crêpes, ou même avec des fruits. 
              Parfait aussi pour accompagner le thé à la menthe traditionnel!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
