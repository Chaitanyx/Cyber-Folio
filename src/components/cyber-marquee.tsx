"use client"

import { motion } from "framer-motion"

export function CyberMarquee() {
  return (
    <div className="relative flex overflow-hidden py-4 select-none bg-zinc-950 border-y border-zinc-800/50">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 z-10 pointer-events-none" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
        style={{ width: "fit-content" }}
      >
        <span className="text-[10vw] font-black font-mono text-zinc-900/50 mr-4">
          SYSTEM_ARCHITECT • NETWORK_SECURITY • PENETRATION_TESTING • CRYPTOGRAPHY • ZERO_TRUST •
        </span>
        <span className="text-[10vw] font-black font-mono text-zinc-900/50 mr-4">
          SYSTEM_ARCHITECT • NETWORK_SECURITY • PENETRATION_TESTING • CRYPTOGRAPHY • ZERO_TRUST •
        </span>
      </motion.div>
    </div>
  )
}
