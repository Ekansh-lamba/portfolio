import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiBarChart2, FiEye, FiDownload } from 'react-icons/fi';
import '../styles/resumes.css';

const RESUMES = [
  {
    id: 'ai-ml',
    title: 'AI / ML',
    icon: <FiCpu size={24} />,
    iconClass: 'ai',
    desc: 'For ML engineering, research, and AI-focused roles. Highlights RL, CNNs, and computer vision projects.',
    file: import.meta.env.BASE_URL + 'resumes/Ekansh_Lamba_AI_ML.pdf',
  },
  {
    id: 'fullstack',
    title: 'Full Stack',
    icon: <FiCode size={24} />,
    iconClass: 'fullstack',
    desc: 'For full stack developer and SWE roles. Emphasizes Spring Boot, React, REST APIs, and system design.',
    file: import.meta.env.BASE_URL + 'resumes/Ekansh_Lamba_FullStack.pdf',
  },
  {
    id: 'data',
    title: 'Data Analyst',
    icon: <FiBarChart2 size={24} />,
    iconClass: 'data',
    desc: 'For data analysis and business intelligence roles. Focuses on Pandas, feature engineering, and insights.',
    file: import.meta.env.BASE_URL + 'resumes/Ekansh_Lamba_DataAnalyst.pdf',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Resumes() {
  const [selected, setSelected] = useState('ai-ml');

  return (
    <section id="resumes" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={cardVariants}>
            <span className="section-label">Resumes</span>
            <h2 className="section-title">Download My Resume</h2>
            <p className="section-desc">
              Three tailored resumes for different career tracks. Pick the one that fits the role.
            </p>
          </motion.div>

          <div className="resumes-grid">
            {RESUMES.map((resume) => (
              <motion.div
                key={resume.id}
                className={`glass-card resume-card ${selected === resume.id ? 'selected' : ''}`}
                onClick={() => setSelected(resume.id)}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className={`resume-icon ${resume.iconClass}`}>
                  {resume.icon}
                </div>
                <h3 className="resume-card-title">{resume.title}</h3>
                <p className="resume-card-desc">{resume.desc}</p>
                <div className="resume-actions">
                  <a
                    className="resume-btn resume-btn-preview"
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiEye size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    Preview
                  </a>
                  <a
                    className="resume-btn resume-btn-download"
                    href={resume.file}
                    download
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiDownload size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
