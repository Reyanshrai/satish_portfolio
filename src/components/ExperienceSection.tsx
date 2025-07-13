"use client";

import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const experiences = [
  { role: "Frontend Developer", company: "Tech Co.", period: "2022 - Present", description: "Building modern UIs with React and Next.js." },
  { role: "Web Developer", company: "Web Studio", period: "2020 - 2022", description: "Developed responsive websites and web apps." },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 flex flex-col items-center justify-center gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
      >
        Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="flex flex-col gap-6 max-w-2xl w-full"
      >
        {experiences.map((exp, idx) => (
          <Card key={idx} className="p-6 text-left text-foreground border-l-4 border-primary">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-lg">{exp.role}</span>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <div className="text-sm text-muted-foreground mb-1">{exp.company}</div>
            <div>{exp.description}</div>
          </Card>
        ))}
      </motion.div>
    </section>
  );
} 