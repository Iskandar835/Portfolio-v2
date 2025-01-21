import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./utils/global-styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" />
         </Routes>
      </Router>
   </StrictMode>
);
