import "./styles.css";
import { WorkCardType } from "../../typescript/WorkCardType";
import Button from "../Button";

function WorkCard({ source, alt, title, story }: WorkCardType) {
   return (
      <article className="work-card-container">
         <img src={source} alt={alt} />
         <div className="work-card-content">
            <h3>{title}</h3>
            <p className="little-lines">{story}</p>
            <div className="work-card-btn-container">
               <Button content="LEARN MORE" />
            </div>
         </div>
      </article>
   );
}

export default WorkCard;
