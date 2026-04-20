import { motion } from 'framer-motion';
import {
  FiCode, FiMonitor, FiServer, FiCpu, FiDatabase, FiEye, FiTool,
} from 'react-icons/fi';
import '../styles/skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: <FiCode />,
    skills: ['Python', 'Java', 'C++', 'C', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: <FiMonitor />,
    skills: ['React.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: ['Spring Boot', 'REST APIs'],
  },
  {
    title: 'ML / AI',
    icon: <FiCpu />,
    skills: ['TensorFlow', 'Keras', 'CNNs', 'Reinforcement Learning'],
  },
  {
    title: 'Data',
    icon: <FiDatabase />,
    skills: ['Pandas', 'NumPy', 'Feature Engineering'],
  },
  {
    title: 'Computer Vision',
    icon: <FiEye />,
    skills: ['OpenCV', 'YOLO', 'OCR'],
  },
  {
    title: 'DevOps & Tools',
    icon: <FiTool />,
    skills: ['Git', 'GitHub', 'AWS', 'CI/CD', 'Docker', 'Maven', 'TensorBoard', 'Figma'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={cardVariants}>
            <span className="section-label">Skills</span>
            <h2 className="section-title">Technologies & Tools</h2>
            <p className="section-desc">
              A diverse toolkit spanning AI/ML, full stack development, and data engineering.
            </p>
          </motion.div>

          <div className="skills-grid">
            {SKILL_CATEGORIES.map((cat) => (
              <motion.div key={cat.title} className="glass-card skill-card" variants={cardVariants}>
                <div className="skill-card-header">
                  <div className="skill-card-icon">{cat.icon}</div>
                  <div className="skill-card-title">{cat.title}</div>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
