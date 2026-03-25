"use client"

import { motion } from "framer-motion"
import { ExternalLink, FolderLock } from "lucide-react"
import { resumeData } from "@/data/resume"

export function ProjectVault() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-4">
      {resumeData.projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group relative bg-zinc-950 border border-zinc-900 overflow-hidden hover:border-cyan-500/50 transition-colors rounded-xl flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between bg-zinc-900/50 px-4 py-2 border-b border-zinc-900 z-20 relative">
            <div className="flex items-center gap-2">
              <FolderLock className="w-4 h-4 text-cyan-500" />
              <span className="text-xs font-mono text-zinc-400">PRJ-{String(i + 1).padStart(3, '0')}</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/20" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
              <div className="w-2 h-2 rounded-full bg-green-500/20" />
            </div>
          </div>

          <div className="p-6 relative z-10 flex flex-col flex-grow">
            <div className="mb-4">
              <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${project.color || 'text-cyan-500'}`}>
                //{project.focus}
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors font-mono">
                {project.title}
              </h3>
            </div>
              
            <p className="text-zinc-400 text-sm leading-relaxed font-mono mb-6">
              {project.description}
            </p>

            {/* Technical Extract Box */}
            <div className="mt-auto mb-6 p-4 bg-zinc-900/40 border-l-2 border-zinc-700/50 backdrop-blur-sm rounded-r-lg">
              <span className="text-[10px] text-zinc-500 font-mono block mb-2 uppercase tracking-wider">
                {('extractTitle' in project) ? project.extractTitle : 'TECHNICAL EXTRACT'}
              </span>
              <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                {('extract' in project) ? project.extract : ''}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, j) => (
                <span 
                  key={j} 
                  className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 transition-colors group/link font-mono mt-auto"
            >
              <span>ACCESS_REPOSITORY</span>
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Large Graphical Illustration (Watermark) */}
          {('icon' in project) && (
            <div className={`absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none rotate-12 z-0 ${project.color || 'text-zinc-500'}`}>
              <project.icon size={240} strokeWidth={1} />
            </div>
          )}

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none z-0" />
          
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[2px] w-full -translate-y-full group-hover:animate-scan pointer-events-none z-20" style={{ animationDuration: '2s' }} />
        </motion.div>
      ))}
    </div>
  )
}
