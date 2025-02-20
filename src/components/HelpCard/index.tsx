import "./styles.css";
import { HelpCardType } from "../../typescript/HelpCardType";
import data from "../../data/database.json";
import Button from "../Button";

function HelpCard({ source, alt, title, story }: HelpCardType) {
   const sendEmail = () => {
      window.location.href = data.contact[1].href;
   };

   return (
      <article className="help-card-container">
         <img src={source} alt={alt} />
         <div className="help-card-content">
            <h3>{title}</h3>
            <p className="little-lines">{story}</p>
            <div className="help-card-btn-container">
               <Button content="ME CONTACTER" onclick={sendEmail} />
            </div>
         </div>
      </article>
   );
}

export default HelpCard;
