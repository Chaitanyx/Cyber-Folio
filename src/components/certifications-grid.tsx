"use client"

import { motion } from "framer-motion"
import { resumeData } from "@/data/resume"

export function CertificationsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {resumeData.certifications.map((cert, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative flex items-center space-x-4 p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/50 transition-all cursor-crosshair group overflow-hidden"
            >
                <div className={`p-4 rounded-full bg-zinc-950 border border-zinc-800 ${cert.color} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <cert.icon size={32} strokeWidth={1.5} />
                </div>
                
                <div className="relative z-10 flex-1">
                    <h4 className={`font-bold font-mono text-lg ${cert.color}`}>{cert.name}</h4>
                    <p className="text-xs text-zinc-500 font-mono mb-1">{cert.issuer} // {cert.date}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">{cert.description}</p>
                </div>

                {/* Watermark Icon Illustration */}
                <cert.icon 
                    className={`absolute -right-4 -bottom-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 ${cert.color}`} 
                    strokeWidth={0.5} 
                />
            </motion.div>
        ))}
    </div>
  )
}
