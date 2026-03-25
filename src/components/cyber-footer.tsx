"use client"

import Link from "next/link"
import { GitGraph, Mail, Globe, Bug, Flag } from "lucide-react"
import { resumeData } from "@/data/resume"

export function CyberFooter() {
  return (
    <footer className="relative py-12 px-4 max-w-7xl mx-auto">
      <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative backdrop-blur-sm">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20 relative z-10">
            
            {/* Left Content: Bio & Social Icons */}
            <div className="max-w-md space-y-8">
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                    Hi, I am <span className="text-zinc-900 dark:text-zinc-100 font-bold">{resumeData.bio.name}</span>, a {resumeData.bio.role} building <span className="text-zinc-900 dark:text-zinc-100 italic">resilient systems</span> and digital experiences across security, code, and infrastructure.
                </p>

                <div className="flex gap-4">
                    <Link href="https://www.linkedin.com/in/chaitanyx13/" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-cyan-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all group">
                         <span className="font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-cyan-500 transition-colors">in</span>
                    </Link>
                    <Link href="https://github.com/Chaitanyx" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-cyan-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all group">
                        <GitGraph className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-cyan-500 transition-colors" />
                    </Link>
                    <Link href="https://tryhackme.com/p/chaitanyx13" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all group" title="TryHackMe Profile">
                        <Flag className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                    </Link>
                    <Link href="https://hackerone.com/chaitanyx" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-orange-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all group" title="HackerOne Profile">
                        <Bug className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-orange-500 transition-colors" />
                    </Link>
                </div>
            </div>

            {/* Right Columns: Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:min-w-[500px]">
                <div className="space-y-6">
                    <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Navigate</h4>
                    <ul className="space-y-4 font-sans text-sm">
                        <li><Link href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 transition-colors block py-1">Work</Link></li>
                        <li><Link href="#skills" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 transition-colors block py-1">Skills</Link></li>
                        <li><Link href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 transition-colors block py-1">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Selected Work</h4>
                    <ul className="space-y-4 font-sans text-sm">
                        {(resumeData.projects || []).slice(0, 2).map((project, i) => (
                            <li key={i}>
                                <Link href={project.link} className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 transition-colors block py-1">
                                    {project.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6 col-span-2 md:col-span-1 border-t md:border-t-0 border-zinc-200 dark:border-zinc-800 pt-8 md:pt-0">
                     <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">Elsewhere</h4>
                     <ul className="space-y-4 font-sans text-sm">
                        <li><Link href="https://www.linkedin.com/in/chaitanyx13/" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 transition-colors block py-1">LinkedIn</Link></li>
                        <li><Link href="https://github.com/Chaitanyx" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 transition-colors block py-1">GitHub</Link></li>
                        <li><Link href="https://tryhackme.com/p/chaitanyx13" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors block py-1">TryHackMe</Link></li>
                        <li><Link href="https://hackerone.com/chaitanyx" className="text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors block py-1">HackerOne</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-zinc-200 dark:border-zinc-800 gap-4 relative z-10">
            <p className="text-sm text-zinc-500 dark:text-zinc-500 font-mono">
                © {new Date().getFullYear()} {resumeData.bio.name}. All rights reserved.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                 <a href="mailto:hello@chaitanyalade.me" className="text-sm text-zinc-500 dark:text-zinc-500 hover:text-cyan-500 transition-colors font-mono hover:underline decoration-cyan-500/30 underline-offset-4">
                    hello@chaitanyalade.me
                 </a>
                 <span className="hidden md:inline h-3 w-px bg-zinc-300 dark:bg-zinc-700" />
                 <span className="text-sm text-zinc-400 dark:text-zinc-600 font-mono">Let's connect</span>
            </div>
        </div>

        {/* Ambient Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </footer>
  )
}
