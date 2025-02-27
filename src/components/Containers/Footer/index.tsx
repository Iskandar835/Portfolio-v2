import "./styles.css";
import data from "../../../data/database.json";
import { ContactType } from "../../../typescript/ContactType";

function Footer() {
   return (
      <footer>
         <div className="footer-lines"></div>
         <h3 className="section-titles">CONTACT</h3>
         <div className="footer-text">
            <p>
               Chaque ligne de code est une opportunité de développer, d’innover
               et d’améliorer l’expérience utilisateur. Je m’efforce de
               concevoir des projets alliant performance, accessibilité et
               esthétisme.
            </p>
            <p>Un projet en tête ? Écrivons la première ligne ensemble !</p>
         </div>
         <div className="contact-container" id="contact">
            {data.contact.map((item: ContactType) => (
               <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  aria-label={item.name}
               >
                  <i className={item.class}></i>
               </a>
            ))}
         </div>
      </footer>
   );
}

export default Footer;
