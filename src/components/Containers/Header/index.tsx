import "./styles.css";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { scrollToSection } from "../../../utils/scrollToSection";

function Header() {
   const { pathname } = useLocation();
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 75) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
   }, []);

   return (
      <header className={isScrolled ? "scrolled" : ""}>
         <section className="header-section">
            <div className="header-img-container">
               <img
                  src="/assets/logo.png"
                  alt="Logo du portfolio de Sacha Vandermoeten"
               />
            </div>
            <nav className="header-link-container">
               <Link
                  className={
                     pathname === "/"
                        ? "header-link current-page"
                        : "header-link"
                  }
                  to="/"
               >
                  Accueil
               </Link>
               <Link
                  className={
                     pathname === "/about"
                        ? "header-link current-page"
                        : "header-link"
                  }
                  to="/about"
               >
                  À propos
               </Link>
               <a
                  className="header-link"
                  onClick={() => {
                     scrollToSection("contact");
                  }}
               >
                  Contact
               </a>
            </nav>
         </section>
      </header>
   );
}

export default Header;
