import "./styles.css";
import { ProjectPropsType } from "../../../typescript/ProjectPropsType";
import { motion } from "motion/react";
import TextCard from "../../TextCard";
import { TechnosType } from "../../../typescript/TechnosType";
import TechnoLogo from "../../TechnoLogo";
import PurpleShadow from "../../PurpleShadow";
import ImageCard from "../../ImageCard";

function Project({
   indexIsEven,
   date,
   title,
   href,
   ariaLabel,
   story,
   technos,
   picture,
}: ProjectPropsType) {
   const isoToNiceDisplay = (date: string): string => {
      return new Date(date).toLocaleString(undefined, {
         dateStyle: "long",
      });
   };

   return (
      <motion.article
         initial={{ opacity: 0, scale: 0 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
         className={indexIsEven ? "project-article" : "project-article-odd"}
      >
         <section className="project-description">
            <div className="project-date-and-name">
               <p className="project-date">{isoToNiceDisplay(date)}</p>
               <h3 className="project-name">
                  {title}{" "}
                  <a
                     href={href}
                     target="_blank"
                     className="project-link"
                     aria-label={ariaLabel}
                  >
                     <i className="fa-solid fa-link"></i>
                  </a>
               </h3>
            </div>
            <TextCard text={story} />
            <div className="project-technos">
               {technos.map((techno: TechnosType) => (
                  <TechnoLogo
                     key={techno.id}
                     source={techno.picture}
                     alt={techno.alt}
                  />
               ))}
            </div>
         </section>
         <section className="project-shadow-and-image">
            <div className="project-shadows-container">
               <div>
                  <PurpleShadow isLargeVersion={true} />
               </div>
               <div>
                  <PurpleShadow isLargeVersion={true} />
               </div>
            </div>
            <ImageCard source={picture.source} alt={picture.alt} />
         </section>
      </motion.article>
   );
}

export default Project;
