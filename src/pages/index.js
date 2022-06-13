import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import People from "./People";
import NoMatch from "./Nomatch";

const Index = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default Index;
