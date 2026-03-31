'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, X } from 'lucide-react';

export function CTASection() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;
  const [isCalOpen, setIsCalOpen] = useState(false);
  const [isCalLoading, setIsCalLoading] = useState(false);

  const calEmbedUrl = useMemo(() => {
    if (!calLink) {
      return '';
    }

    const separator = calLink.includes('?') ? '&' : '?';
    return `${calLink}${separator}embed=1`;
  }, [calLink]);

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

  const handleBookCall = () => {
    if (!calLink) {
      console.error('Cal link not configured:', { calLink });
      return;
    }

    setIsCalLoading(true);
    setIsCalOpen(true);
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
                onClick={handleBookCall}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FEE685] to-[#FFD230] text-lg text-black font-semibold -tracking-[0.44px] hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Call
                <Send className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="mailto:"
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

      {isCalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setIsCalOpen(false);
                setIsCalLoading(false);
              }}
              className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-black shadow"
              aria-label="Close scheduling modal"
            >
              <X className="h-4 w-4" />
            </button>
            {isCalLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-amber-200 border-t-amber-500" />
                  <p className="text-sm text-gray-600">Loading schedule…</p>
                </div>
              </div>
            )}
            {calEmbedUrl ? (
              <iframe
                title="Schedule a call"
                src={calEmbedUrl}
                className="h-[75vh] w-full border-0"
                onLoad={() => setIsCalLoading(false)}
                allow="camera; microphone; fullscreen; display-capture"
              />
            ) : (
              <div className="p-8 text-center text-sm text-gray-600">
                Cal link is not configured.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}