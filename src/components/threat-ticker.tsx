"use client"

import { motion } from "framer-motion"

export function ThreatTicker() {
  const threatItems = [
    "SYSTEM SECURED",
    "ZERO TRUST ARCHITECTURE",
    "PENETRATION TESTING",
    "VULNERABILITY RESEARCH",
    "✦",
    "SYSTEM SECURED",
    "ZERO TRUST ARCHITECTURE",
    "PENETRATION TESTING",
    "VULNERABILITY RESEARCH",
    "✦"
  ]

  return (
    <div className="w-full bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900 overflow-hidden py-4">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex space-x-12 px-4"
        >
          {[...threatItems, ...threatItems].map((item, i) => (
            <div key={i} className="flex items-center space-x-4">
              <span className="text-cyan-600 dark:text-cyan-500/80 font-mono text-sm tracking-widest font-bold">
                {item}
              </span>
              {i % 5 !== 4 && (
                <span className="text-zinc-300 dark:text-zinc-800 text-xs">//</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
