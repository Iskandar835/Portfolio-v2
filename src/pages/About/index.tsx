import "./styles.css";
import { motion } from "motion/react";
import Button from "../../components/Button";
import ExpIndicator from "../../components/xpIndicator";

function AboutPage() {
   const goToLinkedIn = () => {
      window.open(
         "https://www.linkedin.com/in/sacha-vandermoeten-57124631b/",
         "_blank"
      );
   };

   return (
      <main>
         <section className="about-text-and-img">
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="about-text-section"
            >
               <h1 className="section-titles">À PROPOS</h1>
               <p className="about-description">
                  Après avoir découvert ma passion pour le développement web,
                  j’ai décidé de me former sérieusement. Aujourd’hui, je
                  maîtrise des technologies modernes, à la pointe du web et de
                  son écosystème. J’ai réalisé plusieurs projets en solo et en
                  équipe, toujours avec l’envie d’apprendre et de m’améliorer.
                  Pour moi, un bon site web ne se limite pas à du code
                  fonctionnel. Il s’agit de construire des expériences fluides
                  et agréables pour les utilisateurs, dans un monde où tout se
                  digitalise de plus en plus. C’est pourquoi j’accorde une
                  attention particulière à l’optimisation, l’accessibilité et la
                  performance.
               </p>
               <Button
                  className="btn-about"
                  onclick={goToLinkedIn}
                  content="EN SAVOIR PLUS"
               />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="about-img-section"
            >
               <img
                  src="/assets/datacenter.jpg"
                  alt="Image d'un data center"
                  className="first-img-about"
               />
               <img
                  src="/assets/programming.jpg"
                  alt="Dessin d'un developpeur"
                  className="second-img-about"
               />
               <img
                  src="/assets/developer-drawing.jpg"
                  alt="Image de programmation"
                  className="third-img-about"
               />
               <div className="exp-indicator-container">
                  <ExpIndicator />
               </div>
            </motion.div>
         </section>
      </main>
   );
}

export default AboutPage;
