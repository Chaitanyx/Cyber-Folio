"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Home, User, Code, FolderGit2, Award, Briefcase, Mail } from "lucide-react"

export function Nav() {
  const [activeTab, setActiveTab] = useState("about")
  const [isVisible, setIsVisible] = useState(false)

  const tabs = [
    { id: "about", label: "Home", icon: Home, href: "#about" },
    { id: "skills", label: "Skills", icon: Code, href: "#skills" },
    { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
    { id: "certifications", label: "Certificates", icon: Award, href: "#certifications" },
    { id: "timeline", label: "Experience", icon: Briefcase, href: "#timeline" },
    { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
  ]

  useEffect(() => {
    // Show nav after a small delay
    const timer = setTimeout(() => setIsVisible(true), 500)
    
    const handleScroll = () => {
      // Find the section that is currently most visible
      const sections = tabs.map(tab => {
        const element = document.querySelector(tab.href)
        if (!element) return { id: tab.id, visible: 0 }
        
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Calculate how much of the section is visible
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        return { 
          id: tab.id, 
          visible: Math.max(0, visibleHeight)
        }
      })

      // Sort by visibility and pick the top one
      const mostVisible = sections.sort((a, b) => b.visible - a.visible)[0]
      if (mostVisible && mostVisible.visible > 0) {
        setActiveTab(mostVisible.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -80 // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <div className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
    )}>
      <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white/10 dark:bg-black/20 backdrop-filter backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={tab.href}
            onClick={(e) => handleNavClick(e, tab.href)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-2",
              activeTab === tab.id 
                ? "text-zinc-800 dark:text-zinc-100" 
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/40 dark:bg-white/10 rounded-full shadow-sm backdrop-blur-sm"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            <span className="relative z-10 flex items-center gap-2">
              <tab.icon className={cn("w-4 h-4", activeTab === tab.id ? "text-cyan-600 dark:text-cyan-400" : "")} />
              <span className="hidden md:inline">{tab.label}</span>
            </span>
          </a>
        ))}
      </nav>
    </div>
  )
}
