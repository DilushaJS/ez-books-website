'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Handshake } from 'lucide-react';
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
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEE6851A] border border-[#FEE68533] w-fit"
            >
              <Handshake className="w-4 h-4 text-[#FEE685]" />
              <span className="text-xs sm:text-sm font-medium -tracking-[0.15px] text-[#FEE685]">
                Key Differentiator
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.35px] text-white"
            >
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE685] to-[#FFD230]">Lending Brokers</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#D1D5DC] -tracking-[0.45px]"
            >
              We help you move deals forward by turning messy client books into clean, lender-ready financials—fast.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#contact-us"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#FEE685] to-[#FFD230] text-black font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 w-fit"
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
          >
            <Image
              src="/images/brokers-partnership.svg"
              alt="Lending Brokers Partnership"
              width={600}
              height={339.52}
              className="w-full h-auto max-w-[600px] mx-auto rounded-[16px] border-2 border-[#FEE68533] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
