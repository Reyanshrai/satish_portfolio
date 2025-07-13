"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(data);
      if (data.success) setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setResult({ success: false, error: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

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
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-background"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-background"
          value={form.email}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="bg-background"
          value={form.message}
          onChange={handleChange}
        />
        <Button type="submit" size="lg" className="mt-2" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
        {result && result.success && (
          <div className="text-green-600 mt-2 text-center">Thank you! Your message has been sent.</div>
        )}
        {result && !result.success && (
          <div className="text-red-600 mt-2 text-center">{result.error || "Failed to send message."}</div>
        )}
      </motion.form>
    </section>
  );
} 