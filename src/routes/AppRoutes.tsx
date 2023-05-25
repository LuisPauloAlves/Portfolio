import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Projects, Contact, NotFound } from "../components/Index";
import { LinkedinIcon, GithubIcon } from "../components/icons/Icons";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/linkedin" element={<LinkedinIcon />} />
        <Route path="/github" element={<GithubIcon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
