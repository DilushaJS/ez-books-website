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
            className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-transparent" />
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=700&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZWVlZWVlIi8+PC9zdmc+"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>

          {/* Right - Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-black"
            >
              Your Financials,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Done Right
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We provide professional bookkeeping services to keep your records
              accurate, organized, and up to date. From maintaining your
              day-to-day books to cleaning up messy or incomplete records, we
              ensure your financials are always reliable and ready when you need
              them most.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <motion.a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-amber-600 border-2 border-amber-200 hover:bg-amber-50 transition-all duration-200"
                whileHover={{ x: 4 }}
              >
                Learn More →
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
