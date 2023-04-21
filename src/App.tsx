import React from "react";
import "./App.css";
import {
  Header,
  Home,
  About,
  Projects,
  Contact,
  Footer,
} from "./components/Index";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
