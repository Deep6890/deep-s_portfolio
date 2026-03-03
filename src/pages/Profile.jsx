import React from "react";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Profile() {
  return (
    <section className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white min-h-screen">
      <PageHeader />

      {/* ================= HEADER ================= */}
      <header className="px-8 md:px-24 pb-8 border-b border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
        <h1 className="text-sm tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400">
          Portfolio
        </h1>
        <span className="text-sm text-neutral-400 dark:text-neutral-500">
          Ahmedabad, India
        </span>
      </header>

      {/* ================= MAIN ================= */}
      <div className="px-8 md:px-24 py-20 max-w-6xl mx-auto">

        {/* NAME */}
        <h2 className="text-6xl md:text-7xl font-serif tracking-tight mb-8">
          Deep Kayastha
        </h2>

        {/* INFO PILLS */}
        <div className="flex flex-wrap gap-4 mb-14">

          <Pill icon={<MapPin size={14} />} text="Ahmedabad, India" />
          <Pill icon={<Mail size={14} />} text="deepkayastha6890@gmail.com" />
          <Pill text="Machine Learning Engineer" />
          <Pill text="Financial Systems Enthusiast" />

        </div>

        {/* ABOUT */}
        <div className="max-w-3xl text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-20">
          I design intelligent systems across machine learning and financial
          architecture. My focus is long-term structure, analytical clarity,
          and scalable design thinking. I build with precision and measure
          everything.
        </div>

        {/* HOBBIES */}
        <h3 className="text-xl font-medium mb-6">Interests</h3>
        <div className="flex flex-wrap gap-4 mb-20">
          <Pill text="Market Structure Research" />
          <Pill text="Risk Modeling" />
          <Pill text="System Design" />
          <Pill text="Quantitative Analysis" />
        </div>

        {/* BUILT WORK */}
        <h3 className="text-xl font-medium mb-10">Selected Work</h3>

        <div className="grid md:grid-cols-2 gap-16 mb-24">

          <WorkItem
            title="Financial Risk Prediction Engine"
            desc="End-to-end ML system predicting portfolio volatility using engineered financial indicators."
          />

          <WorkItem
            title="Scalable Transaction Pipeline"
            desc="Data pipeline architecture handling rolling aggregation, anomaly detection, and real-time scoring."
          />

          <WorkItem
            title="Market Structure Research Model"
            desc="Quantitative framework studying capital flows and structural behavior in equity markets."
          />

          <WorkItem
            title="Neural Network Evaluation Framework"
            desc="Custom model evaluation metrics comparing baseline vs deep models with stability testing."
          />

        </div>

        {/* CONTACT ICON PILLS */}
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-14">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <IconPill href="mailto:deepkayastha6890@gmail.com">
              <Mail size={18} />
            </IconPill>

            <IconPill href="https://github.com/Deep6890">
              <Github size={18} />
            </IconPill>

            <IconPill href="https://www.linkedin.com/in/deep-kayastha-763514319/">
              <Linkedin size={18} />
            </IconPill>

            <IconPill href="https://www.instagram.com/deep__kayastha/">
              <Instagram size={18} />
            </IconPill>

          </div>

        </div>

      </div>

    </section>
  );
}

/* ================= COMPONENTS ================= */

function Pill({ text, icon }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-full text-sm text-neutral-700 dark:text-neutral-300">
      {icon}
      {text}
    </div>
  );
}

function WorkItem({ title, desc }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-3">{title}</h4>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function IconPill({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center py-4 border border-neutral-300 dark:border-neutral-600 rounded-full hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition"
    >
      {children}
    </a>
  );
}
