import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, github, link }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 rounded-xl transition-all hover:border-neon-cyan/50 group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
          {title}
        </h3>
        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
