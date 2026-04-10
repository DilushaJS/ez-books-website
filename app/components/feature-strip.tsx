'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function FeatureStrip() {
  const features = [
    'Accurate Bookkeeping',
    'Backlog Cleanup',
    'Lender-Ready Financials',
    'Fast Turnaround',
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8 border-[1px] border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white border-2 border-[#E17100] flex items-center justify-center">
                <Check className="w-3 h-3 text-[#E17100]" strokeWidth={3} />
              </div>
              <span className="text-base font-medium -tracking-[0.31px] text-[#364153]">
                {feature}
              </span>
              {index < features.length - 1 && (
                <div className="hidden sm:block w-px h-6 bg-[#D1D5DC] ml-3" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
