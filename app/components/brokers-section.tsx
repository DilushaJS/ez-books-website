'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function BrokersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="brokers"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden"
    >
      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left - Content */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/20 border border-amber-500/50 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-sm font-medium text-amber-200">
                Key Differentiator
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-white"
            >
              Built for Lending Brokers
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              We help you move deals forward by turning messy client books into
              clean, lender-ready financials—fast.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 w-fit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Partner with Us
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=700&fit=crop"
              alt="Lending Brokers Partnership"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZWVlZWVlIi8+PC9zdmc+"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
