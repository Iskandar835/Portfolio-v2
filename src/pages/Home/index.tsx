import "./styles.css";
import PurpleShadow from "../../components/PurpleShadow";

function Homepage() {
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
                  <PurpleShadow />
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
            <h2 className="intro-titles">Je suis un Développeur Frontend.</h2>
            <p>Actuellement, Je suis développeur frontend free-lance.</p>
            {/*cette ligne sera remplacer par les contactS de maniere simple et epurée*/}
            <p className="professional-intro-text">
               Développeur passionné, travaillant dans le secteur depuis plus de
               2 ans maintenant. <br />
               Je développe des produits numériques significatifs et agréables
               qui apportent un équilibre <br />
               entre les besoins des utilisateurs et les objectifs commerciaux.
            </p>
         </section>
      </main>
   );
}

export default Homepage;
