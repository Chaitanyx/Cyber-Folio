"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { TerminalSquare, CheckCircle } from "lucide-react"
import { resumeData } from "@/data/resume"

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4">
      {/* Skill Categories */}
      {resumeData.skills.map((skill, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-950 border border-zinc-900 p-6 min-h-[200px]",
            "hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:border-cyan-500/50 transition-all duration-300",
            i === 0 ? "md:col-span-2" : "md:col-span-1" // Make first skill category larger
          )}
        >
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className={`p-3 w-fit rounded-lg bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm ${skill.color}`}>
              <skill.icon className="w-6 h-6" />
            </div>
            
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-bold font-mono text-zinc-100">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                    <span key={j} className="text-xs font-mono px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {item}
                    </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <TerminalSquare size={150} strokeWidth={0.5} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
