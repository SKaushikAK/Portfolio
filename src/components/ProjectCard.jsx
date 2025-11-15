import { motion } from "framer-motion";
import "@/styles/projectCard.css";

export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.03 }}
    >
      <h2>{title}</h2>
      <p className="desc">{desc}</p>

      <div className="tech-list">
        {tech.map((t, i) => (
          <span key={i} className="tech">{t}</span>
        ))}
      </div>

      <a href={link} target="_blank" className="view-btn">
        View Project →
      </a>
    </motion.div>
  );
}
