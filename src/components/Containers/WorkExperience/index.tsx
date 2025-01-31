import "./styles.css";
import WorkCard from "../../WorkCard";
import PurpleShadow from "../../PurpleShadow";

function WorkExperience() {
   return (
      <>
         <div className="all-work-card">
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
         </div>
         <div className="work-shadow-container">
            <PurpleShadow isLargeVersion={true} />
         </div>
      </>
   );
}

export default WorkExperience;
