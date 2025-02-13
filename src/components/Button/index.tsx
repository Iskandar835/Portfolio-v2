import { ButtonType } from "../../typescript/ButtonType";
import "./styles.css";

function Button({ className, content }: ButtonType) {
   return (
      <>
         <button className={`btn ${className}`}>{content}</button>
      </>
   );
}

export default Button;
