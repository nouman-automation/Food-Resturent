'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Premium Grilled Steak', category: 'Food', emoji: '🥩', size: 'lg' },
    { id: 2, title: 'Fresh Ingredients', category: 'Food', emoji: '🥗', size: 'sm' },
    { id: 3, title: 'Kitchen Excellence', category: 'Kitchen', emoji: '👨‍🍳', size: 'sm' },
    { id: 4, title: 'Signature Kebab', category: 'Food', emoji: '🍗', size: 'lg' },
    { id: 5, title: 'Restaurant Interior', category: 'Ambiance', emoji: '🏢', size: 'sm' },
    { id: 6, title: 'Customer Experience', category: 'Service', emoji: '👥', size: 'sm' },
    { id: 7, title: 'Seafood Masterpiece', category: 'Food', emoji: '🦐', size: 'lg' },
    { id: 8, title: 'Premium Plating', category: 'Food', emoji: '🍽️', size: 'sm' },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />

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
            Our Gallery
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore the beauty of premium cuisine, our restaurant atmosphere, and customer moments.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-max"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                item.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-64 w-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center overflow-hidden">
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex flex-col items-center justify-center gap-2">
                  <p className="text-white font-serif font-bold text-lg text-center">
                    {item.title}
                  </p>
                  <span className="px-3 py-1 bg-gold/30 text-gold text-xs rounded-full border border-gold/50">
                    {item.category}
                  </span>
                </div>

                {/* Emoji */}
                <div className="text-6xl md:text-8xl group-hover:scale-125 transition-transform duration-300">
                  {item.emoji}
                </div>
              </div>

              {/* Glass border effect */}
              <div className="absolute inset-0 border border-gold/20 group-hover:border-gold/50 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-dark-bg transition-all duration-300 text-lg">
            View Full Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
}
