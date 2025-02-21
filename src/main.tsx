import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./utils/global-styles.css";
import BeOnTop from "./utils/BeOnTop";
import Header from "./components/Containers/Header";
import Homepage from "./pages/Home";
import AboutPage from "./pages/About";
import Footer from "./components/Containers/Footer";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Router>
         <BeOnTop />
         <Header />
         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
         </Routes>
         <Footer />
      </Router>
   </StrictMode>
);
