import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GoalPage from "./pages/GoalPage"; // ← you'll create this
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/goals" element={<GoalPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

