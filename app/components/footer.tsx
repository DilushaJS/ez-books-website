'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
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
            <Image
              src="/images/logo.svg"
              alt="EZBooks Logo"
              width={214.2}
              height={37.24}
              sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 214px"
              className="w-[140px] sm:w-[180px] lg:w-[214px] h-auto"
            />
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
