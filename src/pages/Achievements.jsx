import React from 'react'
import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Achievements() {

  const impact = [
    {
      title: "Built Intelligence-first Financial Behavior Models",
      detail: "Designed predictive logic for transaction-level behavioral understanding beyond surface analytics."
    },
    {
      title: "Created AI Workflow System Architecture",
      detail: "Structured layered productivity intelligence through system-thinking rather than tool stacking."
    }
  ]

  const learning = [
    {
      title: "Advanced Database System Thinking",
      detail: "Moved from schema usage → to relational reasoning & entity logic understanding."
    },
    {
      title: "Deep Algorithmic Analysis",
      detail: "Shifted from implementation mindset → to performance reasoning mindset."
    }
  ]

  const applied = [
    {
      title: "Resume Intelligence Parser",
      detail: "Developed semantic extraction logic instead of keyword matching systems."
    },
    {
      title: "Transaction Flow Predictor",
      detail: "Modeled behavioral financial signals rather than numeric-only trends."
    }
  ]

  const recognition = [
    {
      title: "Kaggle Exploration Work",
      detail: "Applied real-world datasets to structured experimentation pipelines."
    },
    {
      title: "Independent Research Builds",
      detail: "Self-initiated system experiments across ML, data, and workflow intelligence."
    }
  ]

  const breakthroughs = [
    {
      title: "System Thinking Over Tool Thinking",
      detail: "Transitioned from using technologies → to designing intelligence layers."
    },
    {
      title: "Pattern-first Learning Approach",
      detail: "Shifted from memorization → to behavioral and structural reasoning."
    }
  ]

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Sparkles className="text-neutral-900" size={22} />
          <p className="text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 uppercase">
            Achievements
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-6">
          Capability Milestones
        </h1>

        <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mb-12 sm:mb-16 md:mb-20">
          A reflection of meaningful progress — not trophies, but shifts in thinking,
          building ability and applied intelligence.
        </p>

        {/* IMPACT */}
        <Section title="Impact Highlights" items={impact} />

        {/* LEARNING */}
        <Section title="Research & Learning Milestones" items={learning} />

        {/* APPLIED */}
        <Section title="Applied Intelligence Work" items={applied} />

        {/* RECOGNITION */}
        <Section title="External Validation" items={recognition} />

        {/* BREAKTHROUGHS */}
        <Section title="Personal Breakthroughs" items={breakthroughs} />

        {/* HOME LINK */}
        <div className="mt-16 sm:mt-20 md:mt-28 pt-8 sm:pt-10 border-t border-neutral-200">
          <Link 
            to="/"
            className="text-xs sm:text-sm tracking-wide text-neutral-500 hover:text-neutral-900 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  )
}


function Section({ title, items }) {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20">

      <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-4 sm:mb-6">
        {title}
      </p>

      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {items.map((item, i) => (
          <div key={i} className="border-l border-neutral-200 pl-4 sm:pl-6">

            <h3 className="text-lg sm:text-xl font-light text-neutral-900">
              {item.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-500 mt-2 max-w-2xl">
              {item.detail}
            </p>

          </div>
        ))}
      </div>

    </div>
  )
}
