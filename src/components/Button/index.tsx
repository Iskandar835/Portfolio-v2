import { ButtonType } from "../../typescript/ButtonType";
import "./styles.css";

function Button({ className, onclick, content }: ButtonType) {
   return (
      <>
         <button className={`btn ${className}`} onClick={onclick}>
            {content}
         </button>
      </>
   );
}

export default Button;
