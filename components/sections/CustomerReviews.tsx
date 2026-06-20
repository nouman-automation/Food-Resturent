'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Food Enthusiast',
      rating: 5,
      text: 'Absolutely phenomenal! The quality of ingredients is unmatched. Every bite is pure excellence. This is now my go-to restaurant for special occasions.',
      avatar: '👩‍🍳',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Customer',
      rating: 5,
      text: 'Consistent perfection. The grilled steaks are absolutely divine, and the service is impeccable. Worth every penny and more.',
      avatar: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Local Resident',
      rating: 5,
      text: 'Finally found my favorite restaurant! Premium quality, fast delivery, and amazing customer service. Highly recommended!',
      avatar: '👩‍🦰',
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'Business Owner',
      rating: 5,
      text: 'We order here weekly for our team. Never disappointed. The kebabs are legendary and delivery is always on time.',
      avatar: '👨‍🍳',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none" />

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
            What Our Customers Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who experience premium quality every day.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 border-2 border-gold/30 relative">
            {/* Quote Mark */}
            <div className="absolute top-6 left-6 text-gold/20 text-6xl font-serif">"</div>

            {/* Review Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: currentReview.rating }).map((_, i) => (
                  <Star key={i} size={24} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-2xl text-white font-light leading-relaxed mb-8 italic">
                {currentReview.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/30 flex items-center justify-center text-3xl">
                  {currentReview.avatar}
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-lg">
                    {currentReview.name}
                  </p>
                  <p className="text-gold text-sm">
                    {currentReview.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 gap-4">
            {/* Progress dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-3 rounded-lg bg-gold/20 hover:bg-gold text-gold hover:text-dark-bg transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-lg bg-gold/20 hover:bg-gold text-gold hover:text-dark-bg transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="glass p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/70 text-sm line-clamp-3 mb-3">
                {review.text}
              </p>
              <div className="flex items-center gap-2">
                <div className="text-2xl">{review.avatar}</div>
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-gold text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
