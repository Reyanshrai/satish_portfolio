"use client";

import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Node.js"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 flex flex-col items-center justify-center gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl w-full"
      >
        {skills.map((skill) => (
          <Card key={skill} className="p-4 text-center text-foreground font-medium">
            {skill}
          </Card>
        ))}
      </motion.div>
    </section>
  );
} 