import { TextsType } from "../../typescript/TextsType";
import "./styles.css";

function TextCard({ text }: TextsType) {
   return (
      <div className="text-card-container">
         <p>{text}</p>
      </div>
   );
}

export default TextCard;
