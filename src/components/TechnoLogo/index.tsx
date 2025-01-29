import { ImagesType } from "../../typescript/ImagesType";
import "./styles.css";

function TechnoLogo({ source }: ImagesType) {
   return (
      <div className="logo-container">
         <img src={source} alt="Logo de la technologie" />
      </div>
   );
}

export default TechnoLogo;
