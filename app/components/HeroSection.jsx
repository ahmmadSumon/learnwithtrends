"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from '../../public/456.gif';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 order-1">
        
        {/* Right Part: Image */}
       

        {/* Left Part: Text */}
        <div className="flex flex-col justify-center order-2 md:order-1"> {/* Change order for mobile */}
          <motion.p className="py-5 text-xl md:text-2xl font-semibold"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            LearnWithTrends — You Imagine, We Bring Out!
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold py-5 text-[#093E61]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Digital Solutions for Modern Businesses
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn with Trends is an Online Marketing Agency. The main goal of this site is to provide quality Digital Marketing Services. You can get tutorials, tips, courses, tools, and other resources that allow anyone to establish online and master digital marketing based on real case studies and deep research.
          </motion.p>
          <motion.button
            className="mt-6 max-w-sm bg-[#093E61] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#C8E0FB] hover:text-black transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </div>
        <motion.div
          className="flex justify-center items-center w-full rounded-full order-1 md:order-1" // Change order for mobile
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={hero}
            alt="Digital Services"
            loading="lazy"
            className="w-full max-w-sm md:max-w-xl overflow-hidden"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
