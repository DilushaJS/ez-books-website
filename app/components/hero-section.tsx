'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Check } from 'lucide-react';
import Image from 'next/image';

const heroStyles = `
  @layer components {
    .hero-section-bg {
      background: linear-gradient(90deg, #FBBF240A 0.05%, #00000000 0.05%),
        linear-gradient(180deg, #FBBF240A 0.1%, #00000000 0.1%);
    }

    .image-frame {
      width: 592px;
      height: 406.6640625px;
      opacity: 1;
      border-radius: 24px;
      border: 2px solid #FFFFFF;
      padding-top: 18px;
      padding-right: 18px;
      padding-bottom: 18px;
      padding-left: 18px;
      background: #FFFFFF;
      box-shadow: 0px 25px 50px -12px #00000040;
      overflow: hidden;
    }

    .image-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }

    .fundable-gradient {
      background: linear-gradient(90deg, #E17100 0%, #FE9A00 50%, #D08700 100%),
        linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    }

    .get-started-btn {
      background: linear-gradient(90deg, #E17100 0%, #FE9A00 100%);
      box-shadow: 0px 8px 10px -6px #FE9A0033, 0px 20px 25px -5px #FE9A0033;
      font-weight: 600;
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.44px;
      text-align: center;
      color: #FFFFFF;
    }

    .image-flare {
      width: 128px;
      height: 128px;
      opacity: 1;
      border-radius: 16777200px;
      background: linear-gradient(135deg, #FFD23033 0%, #FFB90033 100%);
      filter: blur(60px);
    }
  }
`;

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
    <>
      <style>{heroStyles}</style>
      <section className="min-h-screen hero-section-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEF3C6] border border-[#FEE685] w-fit"
            >
              <TrendingUp className="w-4 h-4 text-[#BB4D00]" />
              <span className="text-sm font-medium text-[#7B3306] leading-sm tracking-[0.0015em]">
                Professional Bookkeeping Services
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-[-0.024em] text-black">
                Clean Books.
                <span className="block text-transparent bg-clip-text fundable-gradient mt-4">
                  Fundable Financials.
                </span>
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-2xl text-[#364153] font-normal leading-[39px] tracking-[0.0029em] max-w-[499px]"
            >
              We handle your bookkeeping, clear backlog, and prepare lender-ready financials—so you can stay organized and secure funding with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                className="get-started-btn inline-flex items-center justify-center gap-2 px-4 py-4 rounded-[14px] transition-all duration-200 gap-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[18px] bg-[#FFFFFFCC] border-2 border-[#D1D5DC] font-medium leading-[28px] -tracking-[0.44px] text-black font-semibold hover:border-gray-300 hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0 max-w-[592px] px-8 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-4xl font-bold text-[#E17100] tracking-[0.37px]">
                    {stat.number}
                  </span>
                  <span className="font-normal text-sm -tracking-[0.15px] text-[#4A5565]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Area */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-amber-100/10 blur-3xl rounded-3xl" />

            {/* Flares */}
            <div className="absolute -top-6 -right-6 image-flare" />
            <div className="absolute left-[-24px] top-[302.66px] image-flare" />

            {/* Main Image Card */}
            <motion.div
              className="image-frame"
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero-image.svg"
                  alt="Dashboard Preview"
                  fill
                  sizes="(min-width: 1024px) 556px, (min-width: 640px) 70vw, 90vw"
                  className="rounded-[16px] object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-0 right-0 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 lg:translate-x-8 lg:translate-y-8 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border-2 border-[#FEE685] w-[200px] sm:w-[240px] lg:w-auto"
              animate={{ y: [8, -2, 8] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] bg-gradient-to-br from-[#FE9A00] to-[#E17100] flex items-center justify-center">
                  <div className="flex items-center w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] justify-center rounded-full border-[2px] border-white">
                    <Check className="w-4 h-4 sm:w-6 sm:h-2 text-white" strokeWidth={6} />
                  </div>
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold tracking-[0.07px] text-[#000000]">Lender Ready</p>
                  <p className="text-sm font-normal text-[#4A5565] -tracking-[0.15px]">In 24 Hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </section>
    </>
  );
}
