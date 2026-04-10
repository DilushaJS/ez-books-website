'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'For Brokers', href: '#brokers' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-white/10'
          : 'bg-black'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.svg"
              alt="EZBooks Logo"
              width={214.2}
              height={37.24}
              loading="eager"
              priority
              sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 214px"
              className="w-[140px] sm:w-[180px] lg:w-[214px] h-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm sm:text-base font-normal -tracking-[0.31px] text-[#D1D5DC] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact-us"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-[8px] bg-gradient-to-r from-[#FEE685] to-[#FFD230] text-black font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
