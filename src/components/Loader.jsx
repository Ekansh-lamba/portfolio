import { useState, useEffect } from 'react';
import '../styles/loader.css';

const LINES = [
  { text: 'Initializing system...', delay: 0 },
  { text: 'Loading modules...', delay: 400 },
  { text: 'Compiling portfolio...', delay: 900 },
  { text: 'Mounting components...', delay: 1400 },
  { text: 'System ready.', delay: 1900 },
];

export default function Loader({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1);
        setProgress(((i + 1) / LINES.length) * 100);
      }, line.delay);
    });

    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onComplete(), 600);
    }, 2600);

    return () => clearTimeout(exitTimer);
  }, [onComplete]);

  return (
    <div className={`loader-wrapper ${exiting ? 'exit' : ''}`}>
      <div className="loader-grid" aria-hidden="true" />
      <div className="loader-scanline" aria-hidden="true" />

      <div className="loader-content">
        <div className="loader-logo">
          <div className="loader-logo-icon">EL</div>
          <div className="loader-logo-text">Ekansh Lamba</div>
        </div>

        <div className="loader-lines">
          {LINES.slice(0, visibleLines).map((line, i) => {
            const isLast = i === visibleLines - 1;
            const isDone = i < visibleLines - 1 || visibleLines === LINES.length;
            return (
              <div
                key={i}
                className={`loader-line ${isDone ? 'done' : 'active'}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="prefix">&gt;</span>
                {line.text}
                {isLast && visibleLines < LINES.length && <span className="cursor" />}
              </div>
            );
          })}
        </div>

        <div className="loader-progress">
          <div className="loader-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
