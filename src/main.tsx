import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./utils/global-styles.css";
import Header from "./components/Containers/Header";
import Homepage from "./pages/Home";
import AboutPage from "./pages/About";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
         </Routes>
      </Router>
   </StrictMode>
);
