'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <Image
              src="/images/your-financials.svg"
              alt="Team collaboration"
              width={600}
              height={291}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.35px] leading-[1.2] text-black"
            >
              Your Financials,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E17100] to-[#FE9A00]">
                Done Right
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl -tracking-[0.45px] font-normal text-[#364153] leading-[1.4] mt-6"
            >
              We provide professional bookkeeping services to keep your records accurate, 
              organized, and up to date. From maintaining your day-to-day books to cleaning 
              up messy or incomplete records, we ensure your financials are always reliable and ready when you need them most.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
