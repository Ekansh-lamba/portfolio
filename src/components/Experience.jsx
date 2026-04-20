import { motion } from 'framer-motion';
import '../styles/experience.css';

const EXPERIENCES = [
  {
    role: 'Creative Team Lead — FUTURIX',
    period: '2025 – Present',
    desc: 'Leading a design team to produce visuals for technical events and workshops. Mentoring juniors on UI/UX principles and design tooling with Figma.',
  },
  {
    role: 'Senior Marketing Manager — AIESEC Chennai',
    period: '2024 – 2025',
    desc: 'Led marketing campaigns for 4+ events, managing content strategy and outreach that boosted student attendance by ~25%.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={itemVariants}>
            <span className="section-label">Experience</span>
            <h2 className="section-title">Leadership & Impact</h2>
          </motion.div>

          <div className="experience-timeline">
            {EXPERIENCES.map((exp) => (
              <motion.article key={exp.role} className="glass-card experience-item" variants={itemVariants}>
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-desc">{exp.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
