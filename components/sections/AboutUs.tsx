'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-premium text-4xl md:text-5xl text-white mb-6">
                Our Story
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Founded in 2010, our restaurant has been a cornerstone of the local community, serving premium quality meals with passion and dedication. We believe in the power of fresh, locally sourced ingredients prepared with meticulous care.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Every dish that leaves our kitchen is a testament to our commitment to excellence, craftsmanship, and the Australian culinary tradition.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-gold mb-2">15+</div>
                <p className="text-white/60 text-sm">Years of Excellence</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-gold mb-2">100%</div>
                <p className="text-white/60 text-sm">Fresh Ingredients</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-gold mb-2">50+</div>
                <p className="text-white/60 text-sm">Expert Chefs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-3xl font-bold text-gold mb-2">99%</div>
                <p className="text-white/60 text-sm">Customer Satisfaction</p>
              </motion.div>
            </div>

            {/* Values */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <span className="text-white/80">Committed to local community support and sourcing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <span className="text-white/80">Premium quality guaranteed in every preparation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <span className="text-white/80">Customer satisfaction is our highest priority</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full min-h-96"
          >
            {/* Accent */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            {/* Image Container */}
            <div className="relative h-full rounded-2xl overflow-hidden glass border-2 border-gold/30">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-dark-bg/50 to-dark-bg z-10" />

              {/* Restaurant interior placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gold/25 to-gold/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <p className="text-gold text-lg font-serif">Premium Restaurant</p>
                  <p className="text-white/50 text-sm">Interior & Atmosphere</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-xl border border-gold/30 z-20 max-w-xs"
            >
              <p className="text-gold font-serif font-bold text-lg mb-1">Est. 2010</p>
              <p className="text-white/70 text-sm">15 Years of Premium Service</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
