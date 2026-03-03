import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full border-t border-neutral-100 dark:border-neutral-800 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">

                <span>
                    © {new Date().getFullYear()} Deep Kayastha
                </span>

                <span className="text-neutral-400 dark:text-neutral-500">
                    Built with clarity & precision
                </span>

            </div>
        </footer>
    )
}
