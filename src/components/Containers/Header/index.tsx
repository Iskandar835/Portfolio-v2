import "./styles.css";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Pellet from "../../Pellet";
import { scrollToSection } from "../../../utils/scrollToSection";

function Header() {
   const { pathname } = useLocation();
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 35) {
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
               <Link className="header-link" to="/">
                  Accueil
                  {pathname === "/" && <Pellet />}
               </Link>
               <Link className="header-link" to="/about">
                  À propos
                  {pathname === "/about" && <Pellet />}
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
