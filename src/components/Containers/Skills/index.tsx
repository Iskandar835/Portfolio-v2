import "./styles.css";
import data from "../../../data/database.json";
import TechnoLogo from "../../TechnoLogo";
import Matrix from "../Matrix";
import Ring from "../../Ring";
import PurpleShadow from "../../PurpleShadow";

function Skills() {
   return (
      <>
         <section className="title-and-skills">
            <h4>
               Je maîtrise les technologies modernes du{" "}
               <span className="span-color">développement web</span>.
            </h4>
            <p>
               Je les mets au service d’un écosystème front-end performant et
               accessible.
            </p>
            <div className="all-skills">
               {data.skills.map((skill) => (
                  <TechnoLogo
                     key={skill.id}
                     source={skill.picture}
                     alt={skill.alt}
                  />
               ))}
            </div>
         </section>
         <Matrix />
         <div className="saturn">
            <div className="logo-and-two-rings">
               <div className="sv-container">
                  <img
                     src="/assets/logo.png"
                     alt="Logo de Sacha Vandermoeten"
                  />
               </div>
               <Ring className="oval" />
               <Ring className="circle" />
            </div>
            <PurpleShadow isLargeVersion={false} />
            <Ring className="small" />
            <Ring className="medium" />
            <Ring className="large" />
         </div>
      </>
   );
}

export default Skills;
