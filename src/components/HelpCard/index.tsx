import "./styles.css";
import { HelpCardType } from "../../typescript/HelpCardType";
import data from "../../data/database.json";
import { motion } from "motion/react";
import Button from "../Button";

function HelpCard({ source, alt, title, story }: HelpCardType) {
   const sendEmail = () => {
      window.location.href = data.contact[1].href;
   };

   return (
      <motion.article
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}
         className="help-card-container"
      >
         <img src={source} alt={alt} />
         <div className="help-card-content">
            <h3>{title}</h3>
            <p className="little-lines">{story}</p>
            <div className="help-card-btn-container">
               <Button content="ME CONTACTER" onclick={sendEmail} />
            </div>
         </div>
      </motion.article>
   );
}

export default HelpCard;
