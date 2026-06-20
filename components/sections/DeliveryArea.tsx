'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Zap } from 'lucide-react';

export default function DeliveryArea() {
  const deliveryZones = [
    { name: 'CBD', time: '10-15 min', distance: '2-5 km' },
    { name: 'Eastern Suburbs', time: '15-20 min', distance: '5-8 km' },
    { name: 'Western Suburbs', time: '15-25 min', distance: '5-10 km' },
    { name: 'Northern Areas', time: '20-30 min', distance: '10-15 km' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-premium text-4xl md:text-5xl text-white mb-4">
            Fast Delivery Coverage
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We deliver across the city with consistent quality and speed. Check your area below.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden glass border-2 border-gold/30"
          >
            {/* Map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-dark-bg to-dark-bg">
              {/* Animated map elements */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" className="text-gold/20" strokeWidth="2" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" className="text-gold/30" strokeWidth="2" />
                <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" className="text-gold/40" strokeWidth="2" />
                <circle cx="200" cy="200" r="8" fill="currentColor" className="text-gold" />
              </svg>

              {/* Pulsing center */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full"
              />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="text-gold font-serif font-bold text-lg">Service Areas</p>
                <p className="text-white/50 text-sm">Fast Delivery Zones</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Delivery Zones */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {deliveryZones.map((zone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-hover rounded-xl p-6 border border-gold/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif font-bold text-lg text-white">
                    {zone.name}
                  </h3>
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-bold rounded-full border border-gold/30">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gold" />
                    <div>
                      <p className="text-xs text-white/60">Estimated Time</p>
                      <p className="text-sm text-white font-semibold">{zone.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-gold" />
                    <div>
                      <p className="text-xs text-white/60">Distance</p>
                      <p className="text-sm text-white font-semibold">{zone.distance}</p>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-gold to-gold/50"
                  />
                </div>
              </motion.div>
            ))}

            {/* Check Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <input
                type="text"
                placeholder="Enter your postcode to check delivery"
                className="w-full px-6 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300"
              />
              <button className="w-full mt-3 px-6 py-3 bg-gold text-dark-bg font-bold rounded-lg hover:bg-gold/90 transition-all duration-300">
                Check Delivery
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
