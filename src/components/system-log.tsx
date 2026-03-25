"use client"

import { motion } from "framer-motion"
import { Terminal, Scan, Shield, ArrowRight } from "lucide-react"
import { resumeData } from "@/data/resume"

export function SystemLog() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center space-y-12 py-20">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-700/50 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-sm font-mono text-cyan-400 tracking-wider">SYSTEM_STATUS: ONLINE</span>
        </motion.div>
        
        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-zinc-100 tracking-tighter leading-[0.9]"
        >
          {resumeData.bio.name.split(' ')[0]}<span className="text-zinc-700">.</span>
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed"
        >
          {resumeData.bio.role} based in the {resumeData.bio.location}.
          <span className="block mt-4 text-zinc-500">
            Exploiting vulnerabilities and securing digital fortresses.
          </span>
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
        >
            <span className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-sm hover:border-cyan-500/50 transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-500" />
                OFFENSIVE SECURITY
            </span>
            <span className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-sm hover:border-cyan-500/50 transition-colors flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-500" />
                ZERO TRUST
            </span>
             <span className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-sm hover:border-cyan-500/50 transition-colors flex items-center gap-2">
                <Scan className="w-4 h-4 text-violet-500" />
                Vulnerability Research
            </span>
        </motion.div>
    </div>
  )
}
