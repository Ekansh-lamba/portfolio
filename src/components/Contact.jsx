import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import '../styles/contact.css';

const CONTACTS = [
  {
    label: 'Email',
    value: 'ekanshlamba6226@gmail.com',
    href: 'mailto:ekanshlamba6226@gmail.com',
    icon: <FiMail />,
  },
  {
    label: 'Phone',
    value: '+91 84230 92490',
    href: 'tel:+918423092490',
    icon: <FiPhone />,
  },
  {
    label: 'GitHub',
    value: 'github.com/Ekansh-lamba',
    href: 'https://github.com/Ekansh-lamba',
    icon: <FiGithub />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ekansh-lamba',
    href: 'https://linkedin.com/in/ekansh-lamba',
    icon: <FiLinkedin />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="contact-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={cardVariants}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-desc" style={{ margin: '0 auto 8px' }}>
              Open to AI/ML, Full Stack, and Data Analyst internship opportunities and collaborations.
            </p>
          </motion.div>

          <div className="contact-grid">
            {CONTACTS.map((c) => (
              <motion.a
                key={c.label}
                className="glass-card contact-card"
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={cardVariants}
                whileHover={{ y: -3 }}
              >
                <div className="contact-card-icon">{c.icon}</div>
                <div>
                  <div className="contact-card-label">{c.label}</div>
                  <div className="contact-card-value">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
