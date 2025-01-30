import { Link } from "react-router";
import "./styles.css";

function Header() {
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
               <Link className="header-link" to="/">
                  Accueil
               </Link>
               <Link className="header-link" to="/apropos">
                  À propos
               </Link>
               <Link className="header-link" to="#contact">
                  Contact
               </Link>
            </nav>
         </section>
      </header>
   );
}

export default Header;
