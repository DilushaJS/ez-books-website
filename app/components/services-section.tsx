'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  RotateCcw,
  FileText,
  TrendingUp,
  PieChart,
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: 'Monthly Bookkeeping',
      description:
        'Stay on top of your finances with accurate, up-to-date records and clear monthly reporting.',
      icon: BookOpen,
    },
    {
      title: 'Backlog Cleanup',
      description:
        'Behind on your books? We catch you up quickly and organize everything properly.',
      icon: RotateCcw,
    },
    {
      title: 'Financial Reconstruction',
      description:
        'We rebuild incomplete or inconsistent financials into clear, accurate reports.',
      icon: FileText,
    },
    {
      title: 'Lender-Ready Financials',
      description:
        "We prepare clean Profit & Loss Statements and Balance Sheets so you're ready for loans, funding, and financial opportunities.",
      icon: TrendingUp,
    },
    {
      title: 'Business Financial Forecasting',
      description:
        'Strategic financial projections and forecasting to support lending decisions and business growth planning.',
      icon: PieChart,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive bookkeeping solutions tailored to your needs
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-amber-200 transition-all duration-300"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 20px 40px rgba(251, 146, 60, 0.1), 0 0 0 1px rgba(251, 146, 60, 0.2)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-7 h-7 text-amber-600" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
