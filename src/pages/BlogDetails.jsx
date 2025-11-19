import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/blogdetails/Sidebar";
import BlogContent from "../components/blogdetails/BlogContent";
import HeroBlogDetails from "../components/blogdetails/HeroBlogDetails";
import CommentsSection from "../components/blogdetails/CommentsSection"; // <-- import the CommentsSection
import CallToAction from "../components/blogdetails/CallToAction";

export default function BlogDetails() {
  return (
    <>
      <HeroBlogDetails />

      <section className="py-8 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4  relative z-10">
        {/* Main Blog Content */}
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BlogContent />
          {/* Add Comments Section directly below */}
          <CommentsSection />
        </motion.div>

        {/* Sidebar */}
        <div className="md:col-span-4">
          <Sidebar />
        </div>
      </section>
      <CallToAction />
    </>
  );
}
