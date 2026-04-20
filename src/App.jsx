import { useState, useCallback } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resumes from './components/Resumes';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={handleLoadComplete} />}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar />
        <Hero />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Resumes />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
