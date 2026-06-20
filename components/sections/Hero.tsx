'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Rating', value: '4.9', unit: '⭐' },
    { label: 'Delivery', value: '15', unit: 'Min' },
    { label: 'Fresh', value: '100%', unit: 'Ingredients' },
    { label: 'Customers', value: '3000+', unit: 'Happy' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-dark-bg relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                Australia's Premium Restaurant
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="heading-premium text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="text-white">Handcrafted.</span>
              <br />
              <span className="text-white">Grilled.</span>
              <br />
              <span className="text-gold">Legendary.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-lg max-w-lg leading-relaxed"
            >
              Premium quality meals prepared fresh daily using locally sourced Australian ingredients. Experience the perfect blend of taste, quality, and service.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-gold text-dark-bg font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 hover-lift flex items-center gap-2 group">
                Order Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-all duration-300">
                View Menu
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">
                    {stat.unit}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full min-h-96"
          >
            {/* Gold accent circle */}
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

            {/* Food image container */}
            <div className="relative h-full rounded-2xl overflow-hidden glass border-2 border-gold/30">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />

              {/* Premium placeholder image */}
              <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🍖</div>
                  <p className="text-gold text-lg font-serif">Premium Grilled</p>
                  <p className="text-white/50 text-sm">Masterpiece</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass p-6 rounded-xl border border-gold/30 z-20"
            >
              <div className="text-gold text-sm font-bold">⭐ 4.9 Stars</div>
              <div className="text-white/70 text-xs">3000+ Reviews</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/4 -right-4 glass p-6 rounded-xl border border-gold/30 z-20"
            >
              <div className="text-gold text-sm font-bold">🚚 15 Min</div>
              <div className="text-white/70 text-xs">Fast Delivery</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
