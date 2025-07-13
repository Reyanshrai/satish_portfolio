"use client";

import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 flex flex-col items-center justify-center gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <Card className="max-w-xl mx-auto p-6 text-muted-foreground text-lg">
          Hi! I'm Satish, a passionate developer focused on building modern, beautiful, and performant web applications using the latest technologies.
        </Card>
      </motion.div>
    </section>
  );
} 