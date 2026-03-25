"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function TerminalHero({ onComplete }: { onComplete?: () => void }) {
  const [messages, setMessages] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)
  
  const textSequences = [
    { text: "> ssh root@chaitanyalade.me", delay: 0, color: "text-zinc-50" },
    { text: "Authenticating...", delay: 200, color: "text-zinc-500" },
    { text: "Access Granted.", delay: 500, color: "text-green-500" },
    { text: "Loading Cyber_Profile...", delay: 800, color: "text-cyan-500" },
    { text: "", delay: 1200, color: "text-transparent" } // end state
  ]

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = []
    
    // Clear and restart
    setMessages([])
    setIsComplete(false)
    
    textSequences.forEach(({ text, delay, color }, index) => {
      const id = setTimeout(() => {
        if (text) {
          setMessages(prev => [...prev, text])
        }
        if (index === textSequences.length - 1) {
            setIsComplete(true)
            if (onComplete) {
                setTimeout(onComplete, 1000)
            }
        }
      }, delay)
      timeoutIds.push(id)
    })

    return () => timeoutIds.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center font-mono">
      <div className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-2xl overflow-hidden ring-1 ring-zinc-900/5 dark:ring-white/5 transition-colors duration-300">
        <div className="flex items-center px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 transition-colors duration-300">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="flex-1 text-center text-xs text-zinc-400 dark:text-zinc-500">root@vfolio:~</div>
        </div>
        
        <div className="p-6 space-y-4 font-mono text-sm md:text-base">
          <AnimatePresence mode="popLayout">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`${
                  textSequences[index]?.color.replace("text-zinc-50", "text-zinc-900 dark:text-zinc-50")
                                             .replace("text-zinc-500", "text-zinc-500/80 dark:text-zinc-500") 
                                             || "text-zinc-900 dark:text-zinc-50"
                  }`}
              >
                  {index === 0 && <span className="mr-2 text-green-600 dark:text-green-500">➜</span>}
                  {index === 0 && <span className="mr-2 text-blue-600 dark:text-blue-500">~</span>}
                  <span>{msg}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="w-2.5 h-5 bg-cyan-600 dark:bg-cyan-500 inline-block align-middle ml-1"
          />
        </div>
      </div>

      {isComplete && (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-50 text-center w-full"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
            <span className="text-cyan-600/50 dark:text-cyan-500/50 text-xs font-mono tracking-widest animate-pulse">
                SCROLL_TO_INITIATE
            </span>
            <ArrowDown className="text-cyan-600 dark:text-cyan-500 w-5 h-5 animate-bounce" />
        </motion.div>
      )}
    </div>
  )
}
