'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Flame } from 'lucide-react';

export default function FeaturedMenu() {
  const featuredItems = [
    {
      id: 1,
      name: 'Arcade Smash Burger',
      category: 'Burgers',
      description: 'Signature smash burger with house special sauce',
      price: '$18',
    },
    {
      id: 2,
      name: 'Chicken & Spinach Gozleme',
      category: 'Gozleme',
      description: 'Premium Turkish flatbread with chicken and spinach',
      price: '$18',
    },
    {
      id: 3,
      name: 'Chicken Kebab',
      category: 'Kebabs',
      description: 'Grilled marinated chicken with fresh herbs',
      price: '$15',
    },
    {
      id: 4,
      name: 'Supreme Pizza',
      category: 'Pizza',
      description: 'Premium loaded pizza with mixed toppings',
      price: '$18',
    },
    {
      id: 5,
      name: 'Chicken Cheese Pide',
      category: 'Pide',
      description: 'Turkish boat bread with chicken and cheese',
      price: '$18',
    },
    {
      id: 6,
      name: 'Chicken Salad',
      category: 'Salads',
      description: 'Fresh premium salad with grilled chicken',
      price: '$23',
    },
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="menu" className="py-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-premium text-4xl md:text-5xl text-white mb-4">
            Customer Favourites
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Most loved meals chosen by our customers every day. Freshly prepared using premium ingredients.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-hover h-full rounded-2xl overflow-hidden p-6 flex flex-col hover:shadow-2xl hover:shadow-gold/30">
                {/* Image Area - Premium Placeholder */}
                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mb-6 overflow-hidden relative border border-gold/20">
                  <div className="text-center">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🖼️</div>
                    <p className="text-gold text-xs font-semibold tracking-widest">COMING SOON</p>
                    <p className="text-white/40 text-xs">Food Image Placeholder</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {/* Category Badge */}
                  <div className="inline-block mb-3">
                    <span className="px-3 py-1 text-xs font-bold text-gold bg-gold/10 rounded-full border border-gold/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-2xl font-bold text-gold">
                    ${item.price}
                  </span>
                  <button className="p-3 rounded-lg bg-gold/20 hover:bg-gold text-gold hover:text-dark-bg transition-all duration-300 hover-lift">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-dark-bg transition-all duration-300 text-lg hover-lift flex items-center gap-2 mx-auto">
            <Flame size={20} />
            View Complete Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
