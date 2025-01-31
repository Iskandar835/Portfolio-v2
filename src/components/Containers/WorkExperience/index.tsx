import "./styles.css";
import data from "../../../data/database.json";
import WorkCard from "../../WorkCard";
import PurpleShadow from "../../PurpleShadow";

function WorkExperience() {
   const sortExperience = data?.works.sort((pjtA, pjtB) =>
      new Date(pjtA.date) > new Date(pjtB.date) ? -1 : 1
   );

   return (
      <>
         <div className="all-work-card">
            {sortExperience.map((work) => (
               <WorkCard
                  key={work.id}
                  source={work.picture.source}
                  alt={work.picture.alt}
                  title={work.name}
                  story={work.story}
               />
            ))}
         </div>
         <div className="work-shadow-container">
            <PurpleShadow isLargeVersion={true} />
         </div>
      </>
   );
}

export default WorkExperience;
