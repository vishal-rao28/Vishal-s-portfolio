import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroComponent from './components/IntroComponent';
import AboutMe from './components/AboutMe';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Experience from './components/Experience';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className="container" style={{ flex: 1 }}>
        <IntroComponent />
        <AboutMe />
        <SkillSet />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}
