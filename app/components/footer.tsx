'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600">
              <span className="text-sm font-bold text-black">E</span>
            </div>
            <span className="text-lg font-bold">EZBooks</span>
          </div>

          {/* Tagline */}
          <p className="text-gray-400">Bookkeeping & Lender-Ready Financials</p>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-800 w-full">
            <p className="text-sm text-gray-500">
              © 2025 EZBooks. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
