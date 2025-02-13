import "./styles.css";
import data from "../../../data/database.json";
import HelpCard from "../../HelpCard";
import PurpleShadow from "../../PurpleShadow";

function Help() {
   return (
      <>
         <div className="all-help-card">
            {data.help.map((help) => (
               <HelpCard
                  key={help.id}
                  source={help.picture.source}
                  alt={help.picture.alt}
                  title={help.name}
                  story={help.story}
               />
            ))}
         </div>
         <div className="help-shadow-container">
            <PurpleShadow isLargeVersion={true} />
         </div>
      </>
   );
}

export default Help;
