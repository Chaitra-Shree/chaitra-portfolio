import React from "react";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Work />
      {/* <Projects /> */}
      <Skills />
      <Contact />
    </main>
  )
}
