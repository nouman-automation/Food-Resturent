'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Do you offer delivery?',
      answer: 'Yes, we offer fast delivery across the city. Most orders arrive within 15-30 minutes depending on your location. We use reliable delivery partners to ensure your food arrives hot and fresh.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Average delivery time is 15-20 minutes for CBD areas and 20-30 minutes for outer suburbs. You can check exact delivery time for your address during checkout.',
    },
    {
      question: 'Do you offer catering?',
      answer: 'Absolutely! We provide premium catering services for events, parties, and corporate functions. Contact us directly for custom catering packages and pricing.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and cash on delivery. All transactions are secure and encrypted.',
    },
    {
      question: 'Are your ingredients fresh?',
      answer: 'Yes, 100% fresh! We source all our ingredients daily from local Australian suppliers. All ingredients are prepared fresh to order, never frozen.',
    },
  ];

  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-premium text-4xl md:text-5xl text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg">
            Everything you need to know about our service.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full glass-hover rounded-xl p-6 text-left border border-gold/20 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-gold transition-colors flex-grow">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={24} className="text-gold" />
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="glass rounded-b-xl p-6 border border-t-0 border-gold/20 bg-white/3">
                      <p className="text-white/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">
            Didn't find your answer?
          </p>
          <button className="px-10 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-dark-bg transition-all duration-300 text-lg">
            Contact Our Support Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
