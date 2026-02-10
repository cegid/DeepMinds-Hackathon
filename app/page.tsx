'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ProductInfo from '@/components/ProductInfo';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import OrderSection from '@/components/OrderSection';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';

export default function Home() {
  const [cartItems, setCartItems] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (quantity: number) => {
    setCartItems(prev => prev + quantity);
    setIsCartOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-secondary">🥜 amlou 1950</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-primary transition">Accueil</a>
              <a href="#produit" className="text-gray-700 hover:text-primary transition">Produit</a>
              <a href="#bienfaits" className="text-gray-700 hover:text-primary transition">Bienfaits</a>
              <a href="#temoignages" className="text-gray-700 hover:text-primary transition">Témoignages</a>
              <a href="#commander" className="text-gray-700 hover:text-primary transition">Commander</a>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-primary transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div id="accueil">
        <Hero />
      </div>
      <div id="produit">
        <ProductInfo />
      </div>
      <div id="bienfaits">
        <Features />
      </div>
      <Gallery />
      <div id="temoignages">
        <Testimonials />
      </div>
      <div id="commander">
        <OrderSection onAddToCart={handleAddToCart} />
      </div>
      <Footer />

      {/* Cart Sidebar */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        itemCount={cartItems}
        onUpdateCart={setCartItems}
      />
    </main>
  );
}
