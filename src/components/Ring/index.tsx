import { RingType } from "../../typescript/RingType";
import "./styles.css";

function Ring({ className }: RingType) {
   return (
      <>
         <div className={`ring ${className}`}></div>
      </>
   );
}

export default Ring;
