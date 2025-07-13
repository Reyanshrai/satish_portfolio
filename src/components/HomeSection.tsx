"use client";

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold text-primary"
      >
        Hi, I'm Satish
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-lg md:text-2xl text-muted-foreground max-w-2xl"
      >
        I build modern, attractive web experiences with Next.js, shadcn/ui, and Framer Motion.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      >
        <Button asChild size="lg" className="text-lg px-8 py-4">
          <a href="#about">Learn more about me</a>
        </Button>
      </motion.div>
    </section>
  );
} 