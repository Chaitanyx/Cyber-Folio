"use client"

import { useState } from "react"
import { TerminalHero } from "@/components/terminal-hero"
import { ThreatTicker } from "@/components/threat-ticker"
import { SkillsGrid } from "@/components/skills-grid"
import { ProjectVault } from "@/components/project-vault"
import { Timeline } from "@/components/timeline"
import { CyberFooter } from "@/components/cyber-footer"
import { SystemLog } from "@/components/system-log"
import { BackgroundOrbs, FloatingIcons } from "@/components/background-elements"
import { CyberMarquee } from "@/components/cyber-marquee"
import { CertificationsGrid } from "@/components/certifications-grid"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden relative transition-colors duration-300 font-sans">
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] dark:opacity-20 pointer-events-none z-50 mix-blend-overlay"></div>
      
      {/* Dynamic Background Elements */}
      <BackgroundOrbs />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
            <motion.div
                key="splash"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zinc-950"
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <TerminalHero onComplete={() => setShowSplash(false)} />
            </motion.div>
        ) : (
            <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Hero Section */}
                <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-4 pt-32 pb-20 relative overflow-hidden">
                    <FloatingIcons />
                    
                    <div className="relative z-10 max-w-5xl mx-auto w-full">
                        <SystemLog />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full opacity-50 pointer-events-none rotate-0 origin-bottom-left">
                        <CyberMarquee />
                    </div>
                </section>

                <div className="relative z-20 bg-transparent mb-24">
                     <ThreatTicker />
                </div>

                <section id="skills" className="py-32 relative z-10 bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent">
                    <div className="container mx-auto px-4 mb-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-black font-mono text-cyan-600 dark:text-cyan-500 mb-6 inline-block relative group">
                            <span className="opacity-50 text-xl font-thin absolute -left-12 top-0 rotate-12 text-zinc-500">//01</span>
                            TECHNICAL_ARSENAL
                            <div className="absolute -bottom-4 left-0 w-1/3 h-1 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
                        </h2>
                    </div>
                    <SkillsGrid />
                </section>

                <section id="projects" className="py-32 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm border-y border-zinc-200 dark:border-zinc-800/30 z-10 relative">
                    <div className="container mx-auto px-4 mb-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-black font-mono text-red-600 dark:text-red-500 mb-6 inline-block relative group">
                            <span className="opacity-50 text-xl font-thin absolute -right-12 top-0 -rotate-12 text-zinc-500">//02</span>
                            CLASSIFIED_PROJECTS
                            <div className="absolute -bottom-4 right-0 w-1/3 h-1 bg-red-500 transition-all duration-500 group-hover:w-full" />
                        </h2>
                    </div>
                    <ProjectVault />
                </section>

                <section id="certifications" className="py-32 bg-zinc-950/20 relative z-10 transition-colors duration-300">
                    <div className="container mx-auto px-4 mb-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-black font-mono text-emerald-600 dark:text-emerald-500 mb-6 inline-block relative group">
                            <span className="opacity-50 text-xl font-thin absolute -left-12 top-0 rotate-12 text-zinc-500">//03</span>
                            CERTIFIED_AUTHORITY
                            <div className="absolute -bottom-4 left-0 w-1/3 h-1 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                        </h2>
                    </div>
                    <CertificationsGrid />
                </section>

                <section id="timeline" className="py-32 relative z-10">
                    <div className="container mx-auto px-4 mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-black font-mono text-blue-600 dark:text-blue-500 mb-6 inline-block relative group">
                            <span className="opacity-50 text-xl font-thin absolute -right-12 top-0 -rotate-12 text-zinc-500">//04</span>
                            OPERATIONAL_WORKFLOW
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-blue-500 transition-all duration-500 group-hover:w-3/4" />
                        </h2>
                    </div>
                    <Timeline />
                </section>

                <section id="contact" className="py-20 bg-zinc-950 border-t border-zinc-900">
                    <CyberFooter />
                </section>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

