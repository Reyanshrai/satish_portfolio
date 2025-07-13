"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full border-t border-border bg-background/80 backdrop-blur py-6 mt-12"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <span className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Satish. All rights reserved.</span>
        <div className="flex gap-4">
          {/* Social links placeholder */}
          <a href="#" className="hover:text-primary transition-colors text-foreground">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors text-foreground">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors text-foreground">GitHub</a>
        </div>
      </div>
    </motion.footer>
  );
} 