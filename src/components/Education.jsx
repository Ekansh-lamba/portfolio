import { motion } from 'framer-motion';
import '../styles/footer.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionVariants}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>

          <div className="glass-card education-card">
            <div className="education-header">
              <h3 className="education-degree">B.Tech in Computer Science & Engineering</h3>
              <span className="education-period">Expected May 2027</span>
            </div>
            <p className="education-school">SRM Institute of Science and Technology, Chennai</p>
            <div className="education-gpa">
              ★ CGPA: 8.57
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
