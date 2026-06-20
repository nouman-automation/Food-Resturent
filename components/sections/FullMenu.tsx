'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, X } from 'lucide-react';
import { useState, useMemo } from 'react';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string | number;
  description?: string;
}

const menuData: Record<string, MenuItem[]> = {
  gozleme: [
    { id: 'goz1', name: 'Chicken & Spinach Gozleme', category: 'Gozleme', price: '$18', description: 'Premium Turkish flatbread with chicken and fresh spinach' },
    { id: 'goz2', name: 'Chicken Spinach & Veggie Gozleme', category: 'Gozleme', price: '$19', description: 'Chicken, spinach with garden vegetables' },
    { id: 'goz3', name: 'Doner Spinach Gozleme', category: 'Gozleme', price: '$18', description: 'Tender doner meat with fresh spinach' },
    { id: 'goz4', name: 'Doner & Spinach Veggie Gozleme', category: 'Gozleme', price: '$19', description: 'Doner, spinach with mixed vegetables' },
    { id: 'goz5', name: 'Mixed Gozleme', category: 'Gozleme', price: '$18', description: 'Premium blend of chicken and doner' },
    { id: 'goz6', name: 'Mixed with Vegetables', category: 'Gozleme', price: '$19', description: 'Mixed meat with fresh garden vegetables' },
    { id: 'goz7', name: 'Spinach Cheese Gozleme', category: 'Gozleme', price: '$16', description: 'Creamy cheese with spinach' },
    { id: 'goz8', name: 'Salami Cheese Gozleme', category: 'Gozleme', price: '$18', description: 'Premium salami with melted cheese' },
    { id: 'goz9', name: 'Salami Cheese & Veggie Gozleme', category: 'Gozleme', price: '$19', description: 'Salami, cheese with vegetables' },
    { id: 'goz10', name: 'Arcade Special Gozleme', category: 'Gozleme', price: '$20', description: 'House special with premium toppings' },
  ],
  burgers: [
    { id: 'burg1', name: 'Arcade Smash Burger', category: 'Burgers', price: '$18', description: 'Signature smash burger with house special sauce' },
    { id: 'burg2', name: 'Chicken Burger', category: 'Burgers', price: '$15', description: 'Crispy chicken with fresh toppings' },
    { id: 'burg3', name: 'Doner Burger', category: 'Burgers', price: '$15', description: 'Tender doner meat on premium bun' },
    { id: 'burg4', name: 'Mixed Burger (Chicken & Doner)', category: 'Burgers', price: '$16', description: 'Best of both - chicken and doner combo' },
  ],
  kebabs: [
    { id: 'keb1', name: 'Chicken Kebab', category: 'Kebabs', price: '$15', description: 'Grilled marinated chicken with herbs' },
    { id: 'keb2', name: 'Doner Kebab', category: 'Kebabs', price: '$15', description: 'Premium doner meat kebab' },
    { id: 'keb3', name: 'Mix Kebab', category: 'Kebabs', price: '$16', description: 'Chicken and doner combination' },
    { id: 'keb4', name: 'Fish Kebab', category: 'Kebabs', price: '$16', description: 'Fresh grilled fish kebab' },
    { id: 'keb5', name: 'Hawaiian Kebab', category: 'Kebabs', price: '$16', description: 'Tropical flavors with pineapple' },
    { id: 'keb6', name: 'Aussie Kebab', category: 'Kebabs', price: '$18', description: 'Premium Australian style' },
    { id: 'keb7', name: 'Arcade Burger Kebab', category: 'Kebabs', price: '$18', description: 'Burger-style kebab with special sauce' },
  ],
  meatbox: [
    { id: 'meat1', name: 'Chicken - Small', category: 'Meat Box', price: '$15', description: 'Grilled chicken meat box' },
    { id: 'meat2', name: 'Chicken - Regular', category: 'Meat Box', price: '$19', description: 'Regular portion grilled chicken' },
    { id: 'meat3', name: 'Chicken - Large', category: 'Meat Box', price: '$24', description: 'Large portion grilled chicken' },
    { id: 'meat4', name: 'Doner - Small', category: 'Meat Box', price: '$15', description: 'Premium doner meat box' },
    { id: 'meat5', name: 'Doner - Regular', category: 'Meat Box', price: '$19', description: 'Regular portion doner' },
    { id: 'meat6', name: 'Doner - Large', category: 'Meat Box', price: '$24', description: 'Large portion doner' },
    { id: 'meat7', name: 'Mix Meat - Small', category: 'Meat Box', price: '$15.50', description: 'Mixed chicken and doner small' },
    { id: 'meat8', name: 'Mix Meat - Regular', category: 'Meat Box', price: '$19.50', description: 'Mixed meat regular portion' },
    { id: 'meat9', name: 'Mix Meat - Large', category: 'Meat Box', price: '$24', description: 'Mixed meat large portion' },
  ],
  vegetarian: [
    { id: 'veg1', name: 'Veggie Kebab', category: 'Vegetarian', price: '$12', description: 'Fresh vegetable kebab' },
    { id: 'veg2', name: 'Hot Spicy Veggie Kebab', category: 'Vegetarian', price: '$15', description: 'Spicy vegetable kebab' },
    { id: 'veg3', name: 'Falafel Kebab', category: 'Vegetarian', price: '$14', description: 'Crispy falafel kebab' },
    { id: 'veg4', name: 'Vegetarian Gozleme', category: 'Vegetarian', price: '$17', description: 'Turkish flatbread with vegetables' },
    { id: 'veg5', name: 'Vegetarian Pide', category: 'Vegetarian', price: '$17', description: 'Turkish boat bread with vegetables' },
  ],
  pizza: [
    { id: 'piz1', name: 'Chicken Pizza - Medium', category: 'Pizza', price: '$15', description: 'Medium chicken pizza' },
    { id: 'piz2', name: 'Chicken Pizza - Large', category: 'Pizza', price: '$22', description: 'Large chicken pizza' },
    { id: 'piz3', name: 'Lamb & Beef Pizza - Medium', category: 'Pizza', price: '$15', description: 'Medium lamb and beef pizza' },
    { id: 'piz4', name: 'Lamb & Beef Pizza - Large', category: 'Pizza', price: '$22', description: 'Large lamb and beef pizza' },
    { id: 'piz5', name: 'Mixed Pizza - Medium', category: 'Pizza', price: '$15', description: 'Medium mixed pizza' },
    { id: 'piz6', name: 'Mixed Pizza - Large', category: 'Pizza', price: '$22', description: 'Large mixed pizza' },
    { id: 'piz7', name: 'Salami Pizza - Medium', category: 'Pizza', price: '$15', description: 'Medium salami pizza' },
    { id: 'piz8', name: 'Salami Pizza - Large', category: 'Pizza', price: '$22', description: 'Large salami pizza' },
    { id: 'piz9', name: 'Hawaiian Pizza - Medium', category: 'Pizza', price: '$15', description: 'Medium Hawaiian pizza' },
    { id: 'piz10', name: 'Hawaiian Pizza - Large', category: 'Pizza', price: '$22', description: 'Large Hawaiian pizza' },
    { id: 'piz11', name: 'Margarita Pizza - Medium', category: 'Pizza', price: '$14', description: 'Medium Margarita pizza' },
    { id: 'piz12', name: 'Margarita Pizza - Large', category: 'Pizza', price: '$20', description: 'Large Margarita pizza' },
    { id: 'piz13', name: 'Veggie Pizza - Medium', category: 'Pizza', price: '$14', description: 'Medium veggie pizza' },
    { id: 'piz14', name: 'Veggie Pizza - Large', category: 'Pizza', price: '$21', description: 'Large veggie pizza' },
    { id: 'piz15', name: 'Supreme Pizza - Medium', category: 'Pizza', price: '$18', description: 'Medium supreme pizza' },
    { id: 'piz16', name: 'Supreme Pizza - Large', category: 'Pizza', price: '$24', description: 'Large supreme pizza' },
    { id: 'piz17', name: 'Meat Lovers Pizza - Medium', category: 'Pizza', price: '$19', description: 'Medium meat lovers' },
    { id: 'piz18', name: 'Meat Lovers Pizza - Large', category: 'Pizza', price: '$25', description: 'Large meat lovers' },
    { id: 'piz19', name: 'Arcade Pizza - Medium', category: 'Pizza', price: '$19', description: 'Medium arcade special' },
    { id: 'piz20', name: 'Arcade Pizza - Large', category: 'Pizza', price: '$25', description: 'Large arcade special' },
    { id: 'piz21', name: 'Hot Spicy Veggie Pizza - Medium', category: 'Pizza', price: '$15', description: 'Medium spicy veggie' },
    { id: 'piz22', name: 'Hot Spicy Veggie Pizza - Large', category: 'Pizza', price: '$22', description: 'Large spicy veggie' },
    { id: 'piz23', name: 'Spicy Doner Pizza - Medium', category: 'Pizza', price: '$16', description: 'Medium spicy doner' },
    { id: 'piz24', name: 'Spicy Doner Pizza - Large', category: 'Pizza', price: '$23', description: 'Large spicy doner' },
    { id: 'piz25', name: 'BBQ Chicken Pizza - Medium', category: 'Pizza', price: '$15', description: 'Medium BBQ chicken' },
    { id: 'piz26', name: 'BBQ Chicken Pizza - Large', category: 'Pizza', price: '$22', description: 'Large BBQ chicken' },
  ],
  pide: [
    { id: 'pid1', name: 'Chicken Cheese Pide', category: 'Pide', price: '$18', description: 'Turkish boat with chicken and cheese' },
    { id: 'pid2', name: 'Chicken Veggie Pide', category: 'Pide', price: '$19', description: 'Chicken with fresh vegetables' },
    { id: 'pid3', name: 'Veggie Cheese Pide', category: 'Pide', price: '$16', description: 'Vegetables with melted cheese' },
    { id: 'pid4', name: 'Doner Cheese Pide', category: 'Pide', price: '$18', description: 'Doner meat with cheese' },
    { id: 'pid5', name: 'Doner Veggie Pide', category: 'Pide', price: '$19', description: 'Doner with vegetables' },
    { id: 'pid6', name: 'Salami Cheese Pide', category: 'Pide', price: '$18', description: 'Salami with cheese' },
    { id: 'pid7', name: 'Cheese Salami & Veggie Pide', category: 'Pide', price: '$19', description: 'Salami, cheese and vegetables' },
    { id: 'pid8', name: 'Mixed Pide', category: 'Pide', price: '$19', description: 'Mixed meat pide' },
    { id: 'pid9', name: 'Egg Cheese & Salami Pide', category: 'Pide', price: '$20', description: 'Egg, cheese and salami combo' },
    { id: 'pid10', name: 'Chicken Spinach Cheese Pide', category: 'Pide', price: '$20', description: 'Chicken, spinach and cheese' },
    { id: 'pid11', name: 'Kibassi Pide', category: 'Pide', price: '$19', description: 'Premium kibassi pide' },
    { id: 'pid12', name: 'Cheese Pide', category: 'Pide', price: '$15', description: 'Classic cheese pide' },
    { id: 'pid13', name: 'Spinach Cheese Pide', category: 'Pide', price: '$16', description: 'Spinach with melted cheese' },
  ],
  salads: [
    { id: 'sal1', name: 'Chicken Salad', category: 'Salads', price: '$23', description: 'Premium salad with grilled chicken' },
    { id: 'sal2', name: 'Doner Salad', category: 'Salads', price: '$23', description: 'Fresh salad with doner meat' },
    { id: 'sal3', name: 'Mix Meat Salad', category: 'Salads', price: '$24', description: 'Mixed chicken and doner salad' },
    { id: 'sal4', name: 'Falafel Salad', category: 'Salads', price: '$20', description: 'Crispy falafel salad' },
    { id: 'sal5', name: 'Fish Salad', category: 'Salads', price: '$23', description: 'Fresh grilled fish salad' },
  ],
  sides: [
    { id: 'sid1', name: 'Chips - Small', category: 'Sides', price: '$6', description: 'Small portion chips' },
    { id: 'sid2', name: 'Chips - Regular', category: 'Sides', price: '$9', description: 'Regular portion chips' },
    { id: 'sid3', name: 'Sweet Potato Fries - Small', category: 'Sides', price: '$7', description: 'Small sweet potato fries' },
    { id: 'sid4', name: 'Sweet Potato Fries - Regular', category: 'Sides', price: '$10', description: 'Regular sweet potato fries' },
    { id: 'sid5', name: 'Potato Gems - Small', category: 'Sides', price: '$7', description: 'Small potato gems' },
    { id: 'sid6', name: 'Potato Gems - Regular', category: 'Sides', price: '$10', description: 'Regular potato gems' },
    { id: 'sid7', name: 'Gravy Chips', category: 'Sides', price: '$10', description: 'Chips with gravy' },
    { id: 'sid8', name: 'Cheesy Chips', category: 'Sides', price: '$10', description: 'Chips with melted cheese' },
    { id: 'sid9', name: 'Nuggets & Chips', category: 'Sides', price: '$13', description: 'Chicken nuggets with chips' },
    { id: 'sid10', name: 'Fish & Chips', category: 'Sides', price: '$15', description: 'Fresh fish with chips' },
  ],
};

const categories = [
  { id: 'all', label: 'All Menu', icon: '📋' },
  { id: 'gozleme', label: 'Gozleme', icon: '🌯' },
  { id: 'burgers', label: 'Burgers', icon: '🍔' },
  { id: 'kebabs', label: 'Kebabs', icon: '🍗' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'pide', label: 'Pide', icon: '🍞' },
  { id: 'meatbox', label: 'Meat Box', icon: '📦' },
  { id: 'salads', label: 'Salads', icon: '🥗' },
  { id: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
  { id: 'sides', label: 'Sides', icon: '🍟' },
];

export default function FullMenu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allItems = useMemo(() => Object.values(menuData).flat(), []);

  const filteredItems = useMemo(() => {
    let items = selectedCategory === 'all' ? allItems : menuData[selectedCategory] || [];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    return items;
  }, [selectedCategory, searchQuery, allItems]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden" id="full-menu">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-premium text-4xl md:text-5xl text-white mb-4">
            Complete Menu
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Browse our full selection of premium dishes, fresh ingredients, and house specials.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 relative z-20"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60 pointer-events-none" size={20} />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-dark-secondary border border-gold/30 text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div className="flex gap-2 min-w-min sm:flex-wrap sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap text-sm transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-gold text-dark-bg shadow-lg shadow-gold/50'
                    : 'bg-dark-secondary border border-gold/20 text-white hover:border-gold/60 hover:bg-gold/10'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <p className="text-white/60 text-sm">
            Showing <span className="text-gold font-semibold">{filteredItems.length}</span> item{filteredItems.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key="items"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="glass-hover rounded-xl overflow-hidden p-4 h-full flex flex-col hover:shadow-2xl hover:shadow-gold/20 transition-all">
                    {/* Image Placeholder */}
                    <div className="w-full h-32 rounded-lg bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center mb-4 border border-gold/20 relative overflow-hidden">
                      <div className="text-center">
                        <p className="text-gold text-xs font-semibold tracking-widest">COMING SOON</p>
                        <p className="text-white/40 text-xs mt-1">Food Image</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-serif font-bold text-lg text-white mb-1 line-clamp-2 group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-white/50 text-xs mb-2 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-3">
                      <span className="text-xl font-bold text-gold">
                        {typeof item.price === 'number' ? `$${item.price}` : item.price}
                      </span>
                      <button className="p-2 rounded-lg bg-gold/20 hover:bg-gold text-gold hover:text-dark-bg transition-all duration-300 hover-lift">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-16"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl text-white mb-2">No items found</h3>
              <p className="text-white/60">
                Try adjusting your search or select a different category
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
