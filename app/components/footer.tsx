'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#FEE685] to-[#FFD230]">
              <BookOpen className="w-5 h-5 text-black" strokeWidth={2} />
            </div>
            <span className="text-xl sm:text-2xl font-semibold tracking-[0.07px] text-white">EZBooks</span>
          </Link>

          {/* Tagline */}
          <p className="font-light text-base sm:text-lg tracking-tight text-[#FEE685]">Bookkeeping & Lender-Ready Financials</p>

          {/* Copyright */}
          <div className="pt-4 border-t border-[#1E2939] w-full max-w-[1250px]">
            <p className="font-normal text-sm -tracking-[0.15px] text-[#99A1AF]">
              © 2025 EZBooks. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
