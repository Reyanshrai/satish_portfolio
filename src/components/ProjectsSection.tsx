"use client";

import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const projects = [
  { title: "Modern Portfolio", description: "A beautiful portfolio built with Next.js, shadcn/ui, and Framer Motion." },
  { title: "E-commerce App", description: "A full-featured e-commerce platform with modern UI." },
  { title: "Blog Platform", description: "A fast, SEO-friendly blog platform." },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 flex flex-col items-center justify-center gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full"
      >
        {projects.map((project) => (
          <Card key={project.title} className="p-6 text-left text-foreground">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </Card>
        ))}
      </motion.div>
    </section>
  );
} 