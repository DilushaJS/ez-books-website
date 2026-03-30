'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Wrench, BarChart3, HeadphonesIcon } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'We assess your books',
      icon: MessageSquare,
    },
    {
      number: 2,
      title: 'Cleanup or Setup',
      description: 'We organize and fix your financials',
      icon: Wrench,
    },
    {
      number: 3,
      title: 'Reporting',
      description: 'We deliver clear, accurate statements',
      icon: BarChart3,
    },
    {
      number: 4,
      title: 'Ongoing Support',
      description: 'We keep your books clean and ready',
      icon: HeadphonesIcon,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            <span className="text-black">Simple. Efficient. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Reliable.
            </span>
          </h2>
        </motion.div>

        {/* Process Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:border-amber-200 transition-all duration-300"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(251, 146, 60, 0.1)',
                }}
              >
                {/* Step Number */}
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-lg font-bold text-white">
                    {step.number}
                  </span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-lg bg-amber-50 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-7 h-7 text-amber-600" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
