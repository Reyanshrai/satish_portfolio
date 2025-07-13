"use client";

import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 flex flex-col items-center justify-center gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
      >
        Contact
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-lg bg-card p-8 rounded-lg shadow flex flex-col gap-4 border border-border"
        onSubmit={e => e.preventDefault()}
      >
        <Input type="text" placeholder="Your Name" required className="bg-background" />
        <Input type="email" placeholder="Your Email" required className="bg-background" />
        <Textarea placeholder="Your Message" rows={5} required className="bg-background" />
        <Button type="submit" size="lg" className="mt-2">Send Message</Button>
      </motion.form>
    </section>
  );
} 