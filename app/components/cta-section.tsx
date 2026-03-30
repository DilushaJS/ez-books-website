'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
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
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black"
          >
            Ready to Clean Up Your Books?
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Let's get your financials accurate, organized, and ready for your
            next opportunity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              href="tel:"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white border-2 border-gray-300 text-black font-semibold hover:border-gray-400 hover:shadow-md transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
