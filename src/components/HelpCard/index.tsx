import "./styles.css";
import { HelpCardType } from "../../typescript/HelpCardType";
import Button from "../Button";

function HelpCard({ source, alt, title, story }: HelpCardType) {
   return (
      <article className="help-card-container">
         <img src={source} alt={alt} />
         <div className="help-card-content">
            <h3>{title}</h3>
            <p className="little-lines">{story}</p>
            <div className="help-card-btn-container">
               <Button content="ME CONTACTER" />
            </div>
         </div>
      </article>
   );
}

export default HelpCard;
