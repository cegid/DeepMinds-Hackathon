'use client';

import { motion } from 'framer-motion';

export default function ProductInfo() {
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
            Qu'est-ce que l'Amlou?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'Amlou est une pâte onctueuse traditionnelle du Maroc, symbole de générosité et 
            de convivialité berbère.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Ingrédients Authentiques
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🌰</span>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary">Amandes Grillées</h4>
                    <p className="text-gray-600">
                      Amandes biologiques soigneusement sélectionnées et grillées à la perfection
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-3xl mr-4">🫒</span>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary">Huile d'Argan Pure</h4>
                    <p className="text-gray-600">
                      Huile d'argan alimentaire 100% pure, riche en vitamine E et antioxydants
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-3xl mr-4">🍯</span>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary">Miel Naturel</h4>
                    <p className="text-gray-600">
                      Miel pur provenant des ruches du Maroc, sans additifs ni conservateurs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nutritional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Valeurs Nutritionnelles
              </h3>
              <p className="text-sm text-gray-500 mb-6">Pour 100g</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Énergie</span>
                  <span className="font-semibold text-secondary">2850 kJ / 680 kcal</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Matières grasses</span>
                  <span className="font-semibold text-secondary">58g</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Glucides</span>
                  <span className="font-semibold text-secondary">28g</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Protéines</span>
                  <span className="font-semibold text-secondary">12g</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Fibres</span>
                  <span className="font-semibold text-secondary">8g</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Sans gluten</strong> • <strong>Sans lactose</strong> • <strong>Vegan</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
