import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Category = 
  | "All" 
  | "Frontend" 
  | "Backend" 
  | "Data Engineering" 
  | "AI" 
  | "DevOps" 
  | "Daily Driver" 
  | "CheerClip" 
  | "AMZ Driverless";

interface Skill {
  name: string;
  categories: Exclude<Category, "All">[];
}

const skills: Skill[] = [
  // Frontend
  { name: "React / React Native", categories: ["Frontend", "CheerClip"] },
  { name: "TypeScript", categories: ["Frontend"] },
  
  // Backend
  { name: "Python / Flask", categories: ["Backend", "CheerClip"] },
  { name: "Node.js", categories: ["Backend"] },
  { name: "MySQL", categories: ["Backend", "Data Engineering"] },
  
  // Data Engineering
  { name: "Snowflake", categories: ["Data Engineering"] },
  { name: "dbt", categories: ["Data Engineering"] },
  { name: "Data Factory", categories: ["Data Engineering"] },
  { name: "Data Lake", categories: ["Data Engineering"] },
  { name: "Cortex", categories: ["Data Engineering"] },
  
  // AI
  { name: "LLM", categories: ["AI"] },
  { name: "PyTorch", categories: ["AI", "AMZ Driverless"] },
  { name: "TensorFlow", categories: ["AI", "CheerClip"] },
  { name: "YOLO / MediaPipe", categories: ["AI", "CheerClip", "AMZ Driverless"] },
  { name: "Sensor Fusion", categories: ["AI", "AMZ Driverless"] },
  { name: "CUDA Optimization", categories: ["AI", "AMZ Driverless"] },
  { name: "Computer Vision", categories: ["AI", "CheerClip", "AMZ Driverless"] },

  // DevOps
  { name: "Terraform", categories: ["DevOps", "CheerClip"] },
  { name: "AWS", categories: ["DevOps", "CheerClip"] },
  { name: "Azure", categories: ["DevOps"] },
  { name: "GitHub Actions", categories: ["DevOps"] },
  { name: "CI/CD", categories: ["DevOps"] },
  { name: "Docker", categories: ["DevOps"] },

  // Daily Driver
  { name: "Bash / Zsh", categories: ["Daily Driver"] },
  { name: "Conda", categories: ["Daily Driver"] },
  { name: "Git", categories: ["Daily Driver"] },
  { name: "Linux", categories: ["Daily Driver"] },
  { name: "C++", categories: ["Daily Driver", "AMZ Driverless"] },
  { name: "ROS", categories: ["Daily Driver", "AMZ Driverless"] },
];

const categories: Category[] = [
  "All", 
  "Frontend", 
  "Backend", 
  "Data Engineering", 
  "AI", 
  "DevOps", 
  "Daily Driver", 
  "CheerClip", 
  "AMZ Driverless"
];

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.categories.includes(activeCategory as Exclude<Category, "All">));

  return (
    <section id="skills" className="mb-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Skills Matrix</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-mono transition-all border ${
              activeCategory === category
                ? "bg-neon-cyan/10 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="glass-card p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-slate-200 group-hover:text-neon-cyan transition-colors">
                  {skill.name}
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skill.categories.map(cat => (
                    <span key={cat} className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
