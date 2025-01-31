import "./styles.css";
import Button from "../Button";

function WorkCard() {
   return (
      <article className="work-card-container">
         <img src="/assets/i-work.png" alt="" />
         <div className="work-card-content">
            <h3>CIB on the Mobile</h3>
            <p>
               Take your client onboard seamlessly by our amazing tool of
               digital onboard process.
            </p>
            <div className="work-card-btn-container">
               <Button />
            </div>
         </div>
      </article>
   );
}

export default WorkCard;
