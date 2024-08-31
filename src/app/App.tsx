import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Autorization from "../pages/Autorization/Autorization";

function App() {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Main />} />
      <Route path="/autorization" element={<Autorization />} />
    </Routes>
  );
}

export default App;
