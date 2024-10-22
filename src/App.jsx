import React from "react";
import { Route, Routes } from "react-router-dom";
import Chatting from "./pages/Chatting";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/chatting" element={<Chatting />} />
      </Route>
    </Routes>
  );
};

export default App;
