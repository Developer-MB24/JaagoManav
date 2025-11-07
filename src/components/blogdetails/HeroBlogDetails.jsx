import { motion } from "framer-motion";
import React from "react";

export default function HeroBlogDetails() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden z-10">
      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FF9933] to-transparent opacity-20"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#138808] to-transparent opacity-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Animated floating shapes */}
      <motion.div
        className="absolute top-16 left-24 w-32 h-32 rounded-full bg-white opacity-10"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />
      {/* Add more shapes as needed for artistic effect */}

      {/* Image Background */}
      <img
        src="/images/about-two-img-2.jpg"
        alt=""
        className="absolute inset-0 object-cover w-full h-full z-[-1] brightness-[0.6] pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
        aria-hidden="true"
      />

      {/* Hero Text */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Blog Details
        </h1>
        <nav className="flex items-center justify-center gap-2 text-lg text-white/80">
          <span>Home</span>
          <span>›</span>
          <span>Blog Details</span>
        </nav>
      </motion.div>
    </section>
  );
}
