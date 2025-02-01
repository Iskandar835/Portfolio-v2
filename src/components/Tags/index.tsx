import { TagsType } from "../../typescript/TagsType";
import "./styles.css";

function Tags({ href, content }: TagsType) {
   return (
      <>
         <a className="contact-links" target="_blank" href={href}>
            {content}
         </a>
      </>
   );
}

export default Tags;
