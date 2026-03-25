"use client"

import { motion } from "framer-motion"
import { Terminal, Shield, Code, Server, Network } from "lucide-react"

export function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Orb 1: Cyan Glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[120px] mix-blend-screen"
        animate={{
          x: ["0%", "20%", "0%"],
          y: ["0%", "10%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ top: "-20%", left: "-10%" }}
      />
      
      {/* Orb 2: Purple Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[100px] mix-blend-screen"
        animate={{
          x: ["0%", "-10%", "0%"],
          y: ["0%", "20%", "0%"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "10%", right: "-10%" }}
      />
      
      {/* Orb 3: Green Hue */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[90px] mix-blend-screen"
        animate={{
          x: ["0%", "15%", "0%"],
          y: ["0%", "-15%", "0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ top: "40%", left: "40%" }}
      />
    </div>
  )
}

export function FloatingElement({ children, delay = 0, xOffset = 20, yOffset = 20 }: { children: React.ReactNode, delay?: number, xOffset?: number, yOffset?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
        x: [0, xOffset/2, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute z-10 hidden lg:block"
    >
      {children}
    </motion.div>
  )
}

export function FloatingIcons() {
    return (
        <>
            <FloatingElement delay={0} xOffset={-20} yOffset={30}>
                 <div className="absolute top-32 right-[15%] p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md shadow-2xl rotate-6 hover:scale-110 transition-transform cursor-crosshair">
                    <Terminal className="text-cyan-500 w-8 h-8 opacity-80" />
                 </div>
            </FloatingElement>

             <FloatingElement delay={2} xOffset={10} yOffset={25}>
                 <div className="absolute top-[60%] right-[8%] p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm -rotate-12">
                    <Code className="text-violet-500 w-6 h-6 opacity-60" />
                 </div>
            </FloatingElement>
        </>
    )
}