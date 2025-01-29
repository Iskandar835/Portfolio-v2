import "./styles.css";
import TextCard from "../../TextCard";
import PurpleShadow from "../../PurpleShadow";
import ImageCard from "../../ImageCard";
import TechnoLogo from "../../TechnoLogo";
import { TechnosType } from "../../../typescript/TechnosType";

type ProjectType = {
   project: string | number;
};

function Project({ project }: ProjectType) {
   return (
      <article className="project-article">
         <section>
            <div className="project-date-name">
               <p className="project-date">{project.date}</p>
               <h3 className="project-name">{project.name}</h3>
            </div>
            <TextCard text={project.story} />
            <div className="project-technos">
               {project.technos.map((techno: TechnosType) => (
                  <TechnoLogo key={techno.id} source={techno.picture} />
               ))}
            </div>
         </section>
         <section className="project-shadow-image">
            <div className="project-shadows-container">
               <div>
                  <PurpleShadow isLargeVersion={true} />
               </div>
               <div>
                  <PurpleShadow isLargeVersion={true} />
               </div>
            </div>
            <ImageCard
               source={project.picture.path}
               alt={project.picture.alt}
            />
         </section>
      </article>
   );
}

export default Project;
