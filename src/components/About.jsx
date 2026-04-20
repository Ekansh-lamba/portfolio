import { motion } from 'framer-motion';
import '../styles/about.css';

const STATS = [
  { value: '8.57', label: 'CGPA' },
  { value: '4+', label: 'Projects' },
  { value: '2', label: 'Leadership Roles' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={sectionVariants}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">Building at the intersection of AI & Software</h2>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={sectionVariants}>
              <p>
                I'm a Computer Science undergraduate at{' '}
                <span className="highlight">SRM Institute of Science and Technology</span>,
                driven by a passion for building intelligent systems that solve real-world problems.
              </p>
              <p>
                From reinforcement learning agents that{' '}
                <span className="highlight">reduced traffic wait times by 86%</span> to
                production-grade vehicle rental platforms with Spring Boot and React — I
                operate across the full spectrum of modern software engineering.
              </p>
              <p>
                My work spans Machine Learning, Full Stack Development, and Data Analysis.
                I'm equally comfortable training CNNs to 98% accuracy as I am designing
                normalized database schemas and responsive UIs.
              </p>
            </motion.div>

            <motion.div className="about-stats" variants={stagger}>
              {STATS.map((stat) => (
                <motion.div key={stat.label} className="glass-card about-stat" variants={sectionVariants}>
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
