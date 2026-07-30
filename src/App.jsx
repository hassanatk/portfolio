import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollProgress />

      <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[180px] opacity-20 -z-10"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-20 -z-10"></div>

        <Navbar />

        <Hero data={portfolioData} />

        <About data={portfolioData} />

        <Journey />

        <Skills skills={portfolioData.skills} />

        <Projects projects={portfolioData.projects} />

        <Contact />

        <Footer />

        <BackToTop />

      </div>
    </>
  );
}

export default App;