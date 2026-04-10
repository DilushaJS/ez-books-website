'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

import { CalEmbedModal } from './cal-embed-modal';
import { useCalEmbed } from './use-cal-embed';

export function CTASection() {
  const { embedUrl, isLoading, isOpen, open, close, markLoaded } =
    useCalEmbed();

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
    <>
      <section
        id="contact"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[url('/images/clean-up-books-bg.svg')] bg-cover bg-center bg-no-repeat"
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
              className="text-4xl sm:text-5xl font-bold tracking-[0.35px] text-black"
            >
              Ready to Clean Up Your Books?
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-normal -tracking-[0.45px] text-[#364153]"
            >
              Let's get your financials accurate, organized, and ready for your next opportunity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <motion.button
                type="button"
                onClick={open}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FEE685] to-[#FFD230] text-lg text-black font-semibold -tracking-[0.44px] hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Call
                <Send className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="#contact-us"
                className="inline-flex items-center justify-center gap-2 px-12 py-4 rounded-xl bg-white border-2 border-[#D1D5DC] text-lg text-black font-semibold -tracking-[0.44px] hover:border-gray-400 hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CalEmbedModal
        isOpen={isOpen}
        isLoading={isLoading}
        embedUrl={embedUrl}
        onClose={close}
        onLoad={markLoaded}
      />
    </>
  );
}