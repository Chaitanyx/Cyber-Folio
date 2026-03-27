import { Terminal, Shield, Cpu, Globe, Lock, Server, Award, BadgeCheck, BookOpen, FileText, ShieldCheck, Activity, Database, Smartphone, Cloud, Code, Brain, Radio, ScanFace, Bug } from "lucide-react"

export const resumeData = {
  bio: {
    name: "Chaitanya Lade",
    role: "Cybersecurity Architect",
    location: "Global Network",
    status: "Active",
    clearance: "TOP_SECRET",
    description: "I am a cybersecurity specialist and full-stack engineer dedicated to building resilient systems. My work focuses on offensive security (Red Teaming), cryptographic protocols, and zero-trust network implementation.",
    yearsExp: "5+",
    secureCode: "100%"
  },
  skills: [
    {
      category: "Offensive Security",
      items: ["Penetration Testing", "Nmap", "Threat Modeling", "Web App Security", "Metasploit", "Burp Suite", "Kali Linux", "Wireshark"],
      icon: Shield,
      color: "text-red-500"
    },
    {
      category: "Defensive Security",
      items: ["SIEM Implementation", "Log Analysis", "SIEM Monitoring", "Endpoint Security", "Blue Teaming", "Threat Hunting", "Incident Response"],
      icon: Lock,
      color: "text-blue-500"
    },
    {
      category: "Infrastructure",
      items: ["AWS Security", "Docker", "Kubernetes", "Linux Hardening", "Linux Administration", "Cloud Security", "Virtualization"],
      icon: Server,
      color: "text-green-500"
    },
    {
      category: "Development",
      items: ["Python", "Rust", "TypeScript", "React", "Next.js", "Embedded C++", "Git", "Arduino", "SQL"],
      icon: Cpu,
      color: "text-cyan-500"
    },
    {
        category: "Auditing & GRC",
        items: ["ISO/IEC 27001", "Security Audits", "Risk Assessment"],
        icon: FileText,
        color: "text-yellow-500"
    }
  ],
  projects: [
    {
      title: "OpacGuard",
      focus: "Secure and Interpretable AI",
      description: "Developed a cloud-based credit risk prediction system using Machine Learning and Explainable AI (SHAP) to make black-box risk scores transparent and questionable.",
      extract: "Implemented secure storage, role-based access control (RBAC), and a web dashboard to ensure compliance, trust, and usability.",
      tech: ["Python", "Machine Learning", "SHAP", "Cloud Security"],
      link: "#",
      icon: Brain,
      color: "text-rose-500",
      extractTitle: "SECURITY EXTRACT"
    },
    {
      title: "VRSIOT Platform",
      focus: "IoT-Driven Vehicle Rental and Tracking",
      description: "Built a real-time vehicle tracking system using a Raspberry Pi 3B integrated with advanced GPS modules for efficient rental management.",
      extract: "Engineered the system to capture and display live car dashboard telemetry, including speed, fuel levels, and engine status.",
      tech: ["Raspberry Pi 3B", "Arduino", "GPS", "Embedded Systems"],
      link: "#",
      icon: Radio,
      color: "text-emerald-500",
      extractTitle: "HARDWARE EXTRACT"
    },
    {
      title: "AI Emotion & Sentiment Analysis",
      focus: "Computer Vision and NLP",
      description: "Developed an AI system capable of detecting and classifying human emotions through facial expression recognition techniques.",
      extract: "Implemented sentiment analysis to evaluate real-time interactions as positive, negative, or neutral, providing actionable insights for user engagement.",
      tech: ["Python", "Machine Learning", "NLP", "Computer Vision"],
      link: "#",
      icon: ScanFace,
      color: "text-violet-500",
      extractTitle: "DATA EXTRACT"
    },
    {
        title: "Bug Bounty Portfolio",
        focus: "Offensive Security & Bug Hunting",
        description: "Performed penetration testing on live systems, identifying critical flaws like SQL injection and network vulnerabilities using Nmap.",
        extract: "Utilized industry-standard tools like OWASP ZAP and Burp Suite to validate vulnerabilities and contribute to incident response documentation.",
        tech: ["Burp Suite", "OWASP ZAP", "Nmap", "Kali Linux"],
        link: "#",
        icon: Bug,
        color: "text-orange-500",
        extractTitle: "TOOLS EXTRACT"
      }
  ],
  certifications: [
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "Infosec",
      date: "2026",
      id: "Credential ID: 2175V8QL6RAK",
      icon: Award,
      color: "text-indigo-500",
      description: "Globally recognized certification validating expertise in risk management, information security, and security architecture."
    },
    {
      name: "ISO/IEC 27001 Lead Auditor",
      issuer: "MasterMind",
      date: "2023",
      id: "Credential ID: XXXXX",
      icon: ShieldCheck,
      color: "text-blue-500",
      description: "Expert-level credential for leading audits and managing Information Security Management Systems (ISMS)."
    },
    {
      name: "Blue Team Junior Analyst (SBT)",
      issuer: "Security Blue Team",
      date: "2023",
      id: "Credential ID: XXXXX",
      icon: Activity,
      color: "text-blue-400",
      description: "Validates operational skills in incident response, traffic analysis, and digital forensics."
    },
    {
      name: "Ethical Hacker",
      issuer: "Cisco",
      date: "2022",
      id: "Credential ID: XXXXX",
      icon: BadgeCheck,
      color: "text-amber-500",
      description: "Foundational mastery of network security principles and ethical hacking methodologies."
    },
    {
      name: "SQL Injection Attacks",
      issuer: "EC-Council",
      date: "2022",
      id: "Credential ID: XXXXX",
      icon: Database,
      color: "text-red-500",
      description: "Advanced training in identifying and exploiting database vulnerabilities to secure web applications."
    },
    {
      name: "Android Bug Bounty Hunting",
      issuer: "EC-Council",
      date: "2022",
      id: "Credential ID: XXXXX",
      icon: Smartphone,
      color: "text-orange-500",
      description: "Specialized skills in mobile application security testing and ecosystem vulnerability research."
    },
    {
      name: "Cloud Computing",
      issuer: "Saylor",
      date: "2021",
      id: "Credential ID: XXXXX",
      icon: Cloud,
      color: "text-violet-500",
      description: "Demonstrates proficiency in cloud security architecture and modern deployment models."
    },
     {
      name: "Python Bootcamp",
      issuer: "Udemy",
      date: "2021",
      id: "Credential ID: XXXXX",
      icon: Code,
      color: "text-cyan-500",
      description: "Mastery of Python for security automation, tool development, and data analysis."
    }
  ],
  timeline: [
    {
      year: "Jul 2025 - Present",
      title: "Cyber Security Intern",
      company: "NullClass (Remote)",
      description: "Identified risks via Bug Bounty & Pen Testing on live systems. Used OWASP ZAP/Burp Suite for threat modeling, audits & incident response docs."
    },
    {
      year: "May 2025 - Jul 2025",
      title: "Security Admin Associate L1",
      company: "Infotact Solutions",
      description: "Collaborated to deploy secure systems & patch infra vulnerabilities. Monitored logs/traffic for threats using industry standard tools."
    },
    {
      year: "Feb 2025 - May 2025",
      title: "Data Science Analyst",
      company: "Zidio Development",
      description: "Built AI Emotion/Sentiment systems. Applied ML/NLP to improve models & analysed data for actionable insights with cross-functional teams."
    },
    {
      year: "Feb 2025 - Mar 2025",
      title: "Cyber Security Intern",
      company: "Vaishnav Technologies",
      description: "Performed vulnerability assessments with Nmap. Identified SQL injection flaws in web apps as part of hands-on security practice."
    }
  ]
}
