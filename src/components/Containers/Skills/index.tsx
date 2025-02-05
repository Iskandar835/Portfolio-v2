import "./styles.css";
import data from "../../../data/database.json";
import TechnoLogo from "../../TechnoLogo";
import Ring from "../../Ring";
import PurpleShadow from "../../PurpleShadow";

function Skills() {
   return (
      <>
         <section className="title-and-skills">
            <h4>
               I'm currently looking to join a{" "}
               <span className="span-color">cross-functional</span> team
            </h4>
            <p>
               that values improving people's lives through accessible design
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
         {/* Ici doit venir le style qui va relier les skills avec saturn  */}
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
