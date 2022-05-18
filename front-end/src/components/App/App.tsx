import "./App.scss";

import React from "react";

// React Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import CallPage from "../../pages/CallPage";
import SignupPage from "../../pages/SignupPage";
import LoginPage from "../../pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CallPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
