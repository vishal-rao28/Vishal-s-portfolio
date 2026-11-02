import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import IntroComponent from "./components/IntroComponent";
import AboutMe from "./components/AboutMe";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="">
      <Header />
      <div className="backgroundDiv">
        <div className="container">
          <IntroComponent />
          <AboutMe />
          <SkillSet />
          <Projects />
          <Experience />
          <Footer />
        </div>
      </div>
    </div>
  );
}
