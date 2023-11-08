// import { useState } from "react";
import "./App.css";
import { Header } from "./sections/Header";
import { Tech } from "./sections/Tech";
import { Projects } from "./sections/Projects";

import { Footer } from "./sections/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <h1 className="projects">Featured Projects</h1>
      <Projects />

      <Footer />
    </>
  );
};
