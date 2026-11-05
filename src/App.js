import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroComponent from './components/IntroComponent';
import AboutMe from './components/AboutMe';
import SkillSet from './components/SkillSet';
import Projects from './components/Projects';
import Experience from './components/Experience';
import FloatingGestureThemeDock, { useTheme } from './components/GestureThemeController';

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header theme={theme} setTheme={setTheme} />
      <main className="container" style={{ flex: 1 }}>
        <IntroComponent />
        <AboutMe />
        <SkillSet />
        <Projects />
        <Experience />
        <Footer />
      </main>
      <FloatingGestureThemeDock theme={theme} setTheme={setTheme} />
    </div>
  );
}
