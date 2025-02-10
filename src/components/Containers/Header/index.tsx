import "./styles.css";
import { useLocation } from "react-router";
import { Link } from "react-router";
import { scrollToSection } from "../../../utils/scrollToSection";

function Header() {
   const { pathname } = useLocation();

   return (
      <header>
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
                     pathname === "/apropos"
                        ? "header-link current-page"
                        : "header-link"
                  }
                  to="/apropos"
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
