import { FiArrowUp } from 'react-icons/fi';
import '../styles/footer.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Ekansh Lamba. Crafted with purpose.
        </p>
        <button className="footer-to-top" onClick={scrollToTop} aria-label="Back to top">
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}
