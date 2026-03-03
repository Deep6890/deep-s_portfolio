import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

export default function AboutLayer() {
    return (
        <section className="py-40 px-6 md:px-20 bg-neutral-50 border-t border-neutral-200">

            <div className="max-w-5xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-6xl md:text-7xl font-light text-neutral-900 tracking-tight">
                        Open Channel
                    </h2>

                    <p className="text-neutral-500 mt-6 text-lg max-w-xl">
                        Ideas, research, system design discussions —
                        I’m open to meaningful conversations.
                    </p>
                </motion.div>

                {/* INTERACTIVE LINKS */}
                <div className="space-y-8">

                    <ContactRow
                        icon={<Mail size={18} />}
                        label="Email"
                        value="yourmail@gmail.com"
                        link="mailto:yourmail@gmail.com"
                    />

                    <ContactRow
                        icon={<Github size={18} />}
                        label="GitHub"
                        value="github.com/Deep6890"
                        link="https://github.com/Deep6890"
                    />

                    <ContactRow
                        icon={<Linkedin size={18} />}
                        label="LinkedIn"
                        value="linkedin.com/in/yourprofile"
                        link="https://linkedin.com/in/yourprofile"
                    />

                </div>

            </div>
        </section>
    )
}

function ContactRow({ icon, label, value, link }) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 8 }}
            className="group flex items-center justify-between border-b border-neutral-300 py-6 transition"
        >
            <div className="flex items-center gap-4 text-neutral-700">
                {icon}
                <span className="text-sm uppercase tracking-widest text-neutral-400">
                    {label}
                </span>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-neutral-900 text-lg font-light">
                    {value}
                </span>
                <ArrowUpRight
                    size={18}
                    className="text-neutral-400 group-hover:text-neutral-900 transition"
                />
            </div>
        </motion.a>
    )
}
