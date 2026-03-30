'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '98%', label: 'Success Rate' },
    { number: '24hr', label: 'Turnaround' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-sm font-medium text-gray-700">
                Professional Bookkeeping Services
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-black">
                Clean Books.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Fundable Financials.
                </span>
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-md"
            >
              We handle your bookkeeping, clear backlog, and prepare
              lender-ready financials—so you can stay organized and secure
              funding with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white border-2 border-gray-200 text-black font-semibold hover:border-gray-300 hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-amber-600">
                    {stat.number}
                  </span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Area */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 sm:h-[500px] lg:h-[600px]"
          >
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-amber-100/10 blur-3xl rounded-3xl" />

            {/* Main Image Card */}
            <motion.div
              className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=600&h=700&fit=crop"
                alt="Dashboard Preview"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZWVlZWVlIi8+PC9zdmc+"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Lender Ready</p>
                  <p className="text-sm text-gray-600">In 24 Hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
