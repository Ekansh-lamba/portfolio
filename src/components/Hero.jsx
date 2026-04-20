import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import '../styles/hero.css';

const ROLES = ['AI / ML Engineer', 'Full Stack Developer', 'Data Analyst'];
const TYPING_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentRole.length) {
        return setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        // Finished typing — pause then delete
        return setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        return setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        // Finished deleting — move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        return setTimeout(() => {}, PAUSE_AFTER_DELETE);
      }
    }
  }, [displayText, roleIndex, isDeleting]);

  useEffect(() => {
    const timer = tick();
    return () => clearTimeout(timer);
  }, [tick]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="hero" role="region" aria-label="Introduction">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-eyebrow" variants={itemVariants}>
            <span className="dot" />
            Available for Opportunities
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Hi, I'm <span className="accent">Ekansh Lamba</span>.
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            <span className="typed">{displayText}</span>
          </motion.div>

          <motion.p className="hero-desc" variants={itemVariants}>
            Computer Science student building intelligent systems — from RL agents
            that cut traffic delays by 86% to production-ready full stack platforms.
            Turning complex problems into working software.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a className="btn btn-primary" href="#projects">
              <FiArrowDown size={16} />
              View Projects
            </a>
            <a className="btn btn-outline" href="#resumes">
              Download Resume
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <a
              className="hero-social-link"
              href="https://github.com/Ekansh-lamba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              className="hero-social-link"
              href="https://linkedin.com/in/ekansh-lamba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-photo-ring">
            <img className="hero-photo" src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Ekansh Lamba" />
          </div>
          <div className="hero-photo-dots" aria-hidden="true">
            {[...Array(9)].map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
