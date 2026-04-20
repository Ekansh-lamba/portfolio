import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import '../styles/projects.css';

const PROJECTS = [
  {
    title: 'TRAFFIQ — RL Traffic Signal Optimizer',
    badge: 'Reinforcement Learning',
    flagship: true,
    desc: 'Built a reinforcement learning system that dynamically optimizes traffic signal timing using real-time vehicle detection. Integrates PPO-trained RL agent with computer vision pipeline for intelligent intersection management.',
    metric: '86% reduction in wait time (17.82s → 2.47s)',
    features: [
      'PPO-based RL agent for adaptive signal control',
      'YOLOv8 + OpenCV real-time vehicle detection',
      'SUMO traffic simulation integration',
    ],
    tech: ['Python', 'Stable-Baselines3', 'PPO', 'SUMO', 'OpenCV', 'YOLOv8'],
  },
  {
    title: 'Wheelify — Vehicle Rental Platform',
    badge: 'Full Stack',
    flagship: false,
    desc: 'Engineered a full-stack vehicle rental application with secure REST APIs, responsive UI, and normalized relational database for users, vehicles, bookings, and payments.',
    features: [
      'JWT-secured Spring Boot REST API endpoints',
      'Responsive React.js booking interface',
      'Normalized MySQL schema with role-based access',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
  },
  {
    title: 'Fashion Trend Analyzer',
    badge: 'ML / Data',
    flagship: false,
    desc: 'Developed an image-based trend prediction system using transfer learning and similarity search to identify and forecast fashion trends from visual data.',
    features: [
      'MobileNetV2 feature extraction pipeline',
      'Logistic regression trend classification',
      'Cosine similarity for visual search',
    ],
    tech: ['TensorFlow', 'MobileNetV2', 'Pandas', 'Streamlit'],
  },
  {
    title: 'OptiGlyph — CNN Digit Recognition',
    badge: 'Deep Learning',
    flagship: false,
    desc: 'Implemented a convolutional neural network from scratch achieving >98% validation accuracy on MNIST with automated preprocessing and augmentation pipelines.',
    metric: '~98% accuracy',
    features: [
      'Custom CNN with callbacks and early stopping',
      'Data augmentation for generalization',
      'Precision/recall evaluation metrics',
    ],
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'OCR'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={cardVariants}>
            <span className="section-label">Projects</span>
            <h2 className="section-title">What I've Built</h2>
            <p className="section-desc">
              From intelligent RL agents to production full stack platforms — each project tackles a real problem.
            </p>
          </motion.div>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <motion.article
                key={project.title}
                className={`glass-card project-card ${project.flagship ? 'flagship' : ''}`}
                variants={cardVariants}
              >
                <span className="project-badge">{project.badge}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                {project.metric && (
                  <div className="project-metric">
                    ↗ {project.metric}
                  </div>
                )}

                <div className="project-features">
                  {project.features.map((feat, i) => (
                    <div key={i} className="project-feature">
                      <FiChevronRight className="bullet" size={14} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
