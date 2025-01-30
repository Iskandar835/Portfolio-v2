import { ImagesType } from "../../typescript/ImagesType";
import "./styles.css";

function TechnoLogo({ source, alt }: ImagesType) {
   return (
      <div className="logo-container">
         <img src={source} alt={alt} />
      </div>
   );
}

export default TechnoLogo;
