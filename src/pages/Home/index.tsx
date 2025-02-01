import "./styles.css";
import data from "../../data/database.json";
import PurpleShadow from "../../components/PurpleShadow";
import Tags from "../../components/Tags";
import Project from "../../components/Containers/Project";
import WorkExperience from "../../components/Containers/WorkExperience";

function Homepage() {
   const sortProjects = data?.projects.sort((pjtA, pjtB) =>
      new Date(pjtA.date) > new Date(pjtB.date) ? -1 : 1
   );

   return (
      <main>
         <section className="personnal-intro">
            <div className="name-container">
               <img src="/assets/arrow.png" alt="Image d'une flêche" />
               <p className="name">
                  Bonjour ! Je suis{" "}
                  <span className="span-color">Sacha Vandermoeten</span>
               </p>
            </div>
            <div className="avatar-and-text-container">
               <div className="avatar-and-shadow">
                  <PurpleShadow isLargeVersion={false} />
                  <img src="/assets/avatar.png" alt="Image de l'avatar" />
               </div>
               <div className="avatar-and-text-content">
                  <p>Un développeur qui</p>
                  <h1 className="intro-titles">
                     Juge un livre <br />
                     par sa <span className="span-color">couverture</span>...
                  </h1>
                  <p className="little-lines">
                     Parce que si la couverture ne vous impressionne pas,
                     qu'est-ce qui le fera ?
                  </p>
               </div>
            </div>
         </section>
         <section className="professional-intro">
            <h2 className="intro-titles">Je suis Développeur Frontend.</h2>
            <p className="intro-tags">
               Vous pouvez me contacter sur{" "}
               <Tags
                  href="https://www.linkedin.com/in/sacha-vandermoeten-57124631b/"
                  content="LinkedIn"
               />{" "}
               ou en message direct sur{" "}
               <Tags
                  href="https://discordapp.com/users/1167449314218487818"
                  content="Discord"
               />
               <br />
               et découvrir mes projets sur{" "}
               <Tags href="https://github.com/Iskandar835" content="Github" />
            </p>

            <p className="professional-intro-text">
               Développeur passionné, travaillant dans le secteur depuis plus de
               2 ans maintenant. <br />
               Je développe des produits numériques significatifs et agréables
               qui apportent un équilibre <br />
               entre les besoins des utilisateurs et les objectifs commerciaux.
            </p>
         </section>
         <section className="all-projects">
            {sortProjects.map((item, index) => (
               <Project
                  key={item.id}
                  indexIsEven={index % 2 === 0 ? true : false}
                  date={item.date}
                  title={item.name}
                  story={item.story}
                  technos={item.technos}
                  picture={item.picture}
               />
            ))}
         </section>
         <section className="all-work-experience">
            <h2 className="section-titles">Expériences Professionnelles</h2>
            <WorkExperience />
         </section>
      </main>
   );
}

export default Homepage;
