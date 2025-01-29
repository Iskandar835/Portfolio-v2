import { ImagesType } from "../../typescript/ImagesType";
import "./styles.css";

function ImageCard({ source, alt }: ImagesType) {
   return (
      <div className="image-card-container">
         <img src={source} alt={alt} />
      </div>
   );
}

export default ImageCard;
