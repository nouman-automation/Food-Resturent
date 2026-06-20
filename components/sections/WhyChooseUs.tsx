'use client';

import { motion } from 'framer-motion';
import { Leaf, Zap, Shield, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: 'Fresh Australian Ingredients',
      description: 'Locally sourced, premium quality ingredients delivered fresh daily from trusted Australian suppliers.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick preparation and reliable delivery to your door within 15 minutes on average.',
    },
    {
      icon: Shield,
      title: 'Premium Quality Guaranteed',
      description: 'Every dish prepared by our expert chefs with strict quality control standards.',
    },
    {
      icon: Heart,
      title: 'Local Customer Favourite',
      description: 'Trusted by thousands of satisfied customers in our community with consistent excellence.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

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
            Quality. Service. Always.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We're committed to excellence in every aspect of your dining experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-hover h-full rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-gold/30">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/40 transition-all duration-300">
                    <Icon className="text-gold" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
