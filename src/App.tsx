/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  Code2, 
  Github, 
  Linkedin, 
  Mail
} from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import JsonLd from "./components/JsonLd";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <JsonLd />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-t-0 border-x-0 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-mono font-bold text-lg tracking-tighter">
            GRAZIANO<span className="text-neon-cyan">.APP</span>
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="https://github.com/michelgr95" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/michele-graziano-420236171/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono mb-6">
              <Zap size={12} /> AVAILABLE FOR AI & DATA PLATFORM PROJECTS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
              Architecting <span className="text-white">AI Systems</span> <br />
              & <span className="text-slate-500">Data Platforms.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
              I'm Michele Graziano, a Data & Software Engineer based in Zürich. 
              I build scalable infrastructure for Computer Vision and Enterprise Data, 
              bridging the gap between low-level firmware and high-level AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:info@graziano.app" className="px-6 py-3 rounded-lg bg-white text-black font-bold hover:bg-neon-cyan transition-colors flex items-center gap-2">
                <Mail size={18} /> Get in touch
              </a>
              <div className="flex gap-2">
                <a href="https://github.com/michelgr95" className="p-3 rounded-lg glass-card hover:border-neon-cyan transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/michele-graziano-420236171/" className="p-3 rounded-lg glass-card hover:border-neon-cyan transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Work</h2>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="CheerClip"
              description="AI video analytics mobile app. Features an 'autocut' pipeline using fine-tuned YOLO and MediaPipe for high-velocity feature extraction in cheerleading."
              tags={["React Native", "Python", "AWS Lambda", "YOLO", "Terraform"]}
              link="https://cheerclip.com"
            />
            <ProjectCard 
              title="AMZ Driverless"
              description="Directed a team of 15 engineers as CTO. Architected a real-time CV pipeline for autonomous racing, increasing detection range from 12m to 30m."
              tags={["C++", "Python", "ROS", "LiDAR", "Sensor Fusion"]}
              link="https://www.amzracing.ch/en"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-slate-900 text-center">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
            &copy; {new Date().getFullYear()} GRAZIANO.APP // CRAFTED WITH VIBE CODE
          </p>
        </footer>
      </main>
    </div>
  );
}
