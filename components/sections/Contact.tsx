'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(02) 9999 9999',
      link: 'tel:+61299999999',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@premium-restaurant.com',
      link: 'mailto:hello@premium-restaurant.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Premium St, Sydney NSW 2000',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Daily 11am - 11pm',
      link: '#',
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

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
            Get In Touch
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Contact us anytime.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  className="glass-hover rounded-xl p-6 border border-gold/20 flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/40 transition-all duration-300">
                    <Icon className="text-gold" size={24} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-white text-lg group-hover:text-gold transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Opening Hours */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 border border-gold/20"
            >
              <h3 className="font-serif font-bold text-lg text-white mb-4">Opening Hours</h3>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-gold">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="text-gold">11:00 AM - 12:00 AM</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10">
                  <span>Public Holidays</span>
                  <span className="text-gold">12:00 PM - 11:00 PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300"
                placeholder="(02) 9999 9999"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-gold text-dark-bg font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 text-lg"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gold text-center text-sm"
              >
                Thank you! We'll get back to you shortly.
              </motion.p>
            )}
          </motion.form>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden glass border-2 border-gold/30 h-80"
        >
          <div className="w-full h-full bg-gradient-to-br from-gold/20 via-dark-bg to-dark-bg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gold mx-auto mb-3" />
              <p className="text-gold font-serif font-bold text-lg">Google Map Integration</p>
              <p className="text-white/50 text-sm">123 Premium St, Sydney NSW 2000</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
