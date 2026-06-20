'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', link: '#' },
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Twitter, label: 'Twitter', link: '#' },
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
  ];

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Blog', 'Press'],
    Support: ['Help Center', 'Contact', 'Feedback', 'FAQs'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookies', 'Disclaimer'],
    Social: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-dark-secondary border-t border-gold/10 relative">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        whileTap={{ y: 0 }}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gold text-dark-bg hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/30 z-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ArrowUp size={24} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold flex items-center justify-center">
                <span className="text-gold font-serif font-bold">P</span>
              </div>
              <span className="font-serif font-bold text-xl text-white">
                Premium
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Experience premium quality meals prepared fresh daily using locally sourced Australian ingredients.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-bg transition-all duration-300"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif font-bold text-white text-lg">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif font-bold text-white text-lg">Support</h3>
            <ul className="space-y-2">
              {footerLinks.Support.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif font-bold text-white text-lg">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.Legal.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-serif font-bold text-white text-lg">Newsletter</h3>
            <p className="text-white/60 text-sm">
              Subscribe for exclusive deals and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300 text-sm"
              />
              <button className="px-4 py-2 bg-gold text-dark-bg font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-white/60 text-sm text-center md:text-left">
            <p>
              &copy; {currentYear} Premium Australian Restaurant. All rights reserved.
            </p>
            <p className="mt-1">
              Handcrafted. Grilled. Legendary.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center md:justify-end">
            <a
              href="#"
              className="text-white/60 hover:text-gold transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a
              href="#"
              className="text-white/60 hover:text-gold transition-colors text-sm"
            >
              Terms of Service
            </a>
            <span className="text-white/20">•</span>
            <a
              href="#"
              className="text-white/60 hover:text-gold transition-colors text-sm"
            >
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
