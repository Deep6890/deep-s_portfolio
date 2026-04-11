import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import PixelTransition from "../components/PixelTransition";

export default function Profile() {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white min-h-screen flex flex-col">

      <PageHeader />

      <div className="flex-grow px-2 xs:px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-10 xs:py-12 sm:py-16 md:py-20 lg:py-32 max-w-7xl mx-auto w-full">

        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-center mb-16 xs:mb-20 sm:mb-24 md:mb-32">

          {/* LEFT CONTENT */}
          <div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] mb-4 xs:mb-6 sm:mb-8">
              Deep Kayastha
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
              Building structured Machine Learning systems and scalable software architectures.
              Focused on engineering clarity, security intelligence and AI evaluation frameworks.
            </p>

            <div className="flex items-center gap-4 xs:gap-6 sm:gap-8 mt-6 xs:mt-8 sm:mt-10 text-xs xs:text-sm text-neutral-500 flex-wrap">
              <span className="flex items-center gap-1.5 xs:gap-2">
                <MapPin size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                Ahmedabad, India
              </span>

              <a
                href="/assets/Deep_Kayastha _ai_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition"
              >
                Resume ↗
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              {/* Ambient Glow */}
              <div className="absolute inset-0 -z-10 blur-3xl bg-neutral-200/40 dark:bg-neutral-800/40 rounded-full w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 translate-x-6 translate-y-6" />

              {/* Pixel Transition Image */}
              <div className="relative w-48 h-48 xs:w-60 xs:h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                <PixelTransition
                  firstContent={
                    <img
                      src="/assets/myMain.svg"
                      alt="Deep Kayastha"
                      className="w-full h-full object-cover grayscale"
                    />
                  }
                  secondContent={
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
                      <p className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white transform -rotate-12">
                        Hiii
                      </p>
                    </div>
                  }
                  gridSize={8}
                  pixelColor="#ffffff"
                  once={false}
                  animationStepDuration={0.4}
                  aspectRatio="100%"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

            </div>

          </div>

        </div>

        {/* ================= CURRENT DIRECTION ================= */}
        <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.4em] uppercase text-neutral-400">
            Current Direction
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12 mb-16 xs:mb-20 sm:mb-24 md:mb-32">

          <InfoBlock
            title="Security Intelligence"
            desc="Building ML-powered threat detection systems that analyze and respond to security patterns in real time."
          />

          <InfoBlock
            title="AI Evaluation"
            desc="Comparing model architectures with custom metrics and stability-focused validation."
          />

          <InfoBlock
            title="Scalable Architecture"
            desc="Designing backend systems that support analytical workloads and long-term maintainability."
          />

        </div>

        {/* ================= CONTACT ================= */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 xs:pt-8 sm:pt-10 md:pt-12 flex gap-6 xs:gap-8 sm:gap-10 text-neutral-500 flex-wrap">

          <ContactIcon href="mailto:deepkayastha6890@gmail.com">
            <Mail size={18} className="xs:w-5 xs:h-5" />
          </ContactIcon>

          <ContactIcon href="https://github.com/Deep6890">
            <Github size={18} className="xs:w-5 xs:h-5" />
          </ContactIcon>

          <ContactIcon href="https://www.linkedin.com/in/deep-kayastha-763514319/">
            <Linkedin size={18} className="xs:w-5 xs:h-5" />
          </ContactIcon>

        </div>

      </div>

      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */

function InfoBlock({ title, desc }) {
  return (
    <div>
      <h3 className="text-base xs:text-lg sm:text-xl font-medium mb-2 xs:mb-3 sm:mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-xs xs:text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function ContactIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-neutral-900 dark:hover:text-white transition duration-300"
    >
      {children}
    </a>
  );
}
