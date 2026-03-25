"use client"

import { motion } from "framer-motion"
import { Calendar, Building2, ChevronRight, Activity } from "lucide-react"
import { resumeData } from "@/data/resume"

export function Timeline() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 lg:px-0">
      <div className="space-y-12 relative pb-12">
        {/* Central Vertical Line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-zinc-200 dark:bg-zinc-800" />

        {resumeData.timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-8 group relative"
          >
             {/* Timeline Node */}
             <div className="flex-none relative h-full pt-1 z-10"> 
               <div className="w-14 h-14 rounded-full bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300">
                 <span className="font-mono text-sm font-bold text-zinc-400 group-hover:text-cyan-500 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                 </span>
               </div>
             </div>

             {/* Content Card */}
             <div className="flex-1 p-6 md:p-8 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 font-mono mb-2 group-hover:text-cyan-500 transition-colors">
                            {item.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                            <Building2 className="w-3 h-3 text-cyan-500/70" />
                            <span>{item.company}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 w-fit">
                        <Calendar className="w-3 h-3 text-cyan-500" />
                        <span className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-300">
                            {item.year}
                        </span>
                    </div>
                </div>

                <div className="relative pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 group-hover:border-cyan-500/30 transition-colors">
                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                       {item.description}
                    </p>
                    <ChevronRight className="absolute -left-[9px] top-0 w-4 h-4 text-zinc-300 dark:text-zinc-700 bg-zinc-50 dark:bg-zinc-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
