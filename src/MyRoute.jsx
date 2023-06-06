import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./First";
import { Show } from "./Test";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Show />} />
        <Route path="test" element={<First />} />
      </Routes>
    </Router>
  );
};

export default MyRoute;
