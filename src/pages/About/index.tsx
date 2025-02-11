import Button from "../../components/Button";
import "./styles.css";

function AboutPage() {
   return (
      <main>
         <section className="about-text-and-img">
            <div className="about-text-section">
               <h1>ABOUT US</h1>
               <p className="about-description">
                  From they fine john he give of rich he. They age and draw mrs
                  like. Improving end distrusts may instantly was household
                  applauded incommode. Why kept very ever home mrs. Considered
                  sympathize ten uncommonly occasional assistance sufficient
                  not.
               </p>
               <Button content="EXPLORE MORE" />
            </div>
            <div className="about-img-section">
               <img
                  src="/assets/datacenter.jpg"
                  alt="Image d'un data center"
                  className="first-img-about"
               />
               <img
                  src="/assets/developer-drawing.jpg"
                  alt="Dessin d'un developpeur"
                  className="second-img-about"
               />
               <img
                  src="/assets/programming.jpg"
                  alt="Image de programmation"
                  className="third-img-about"
               />
               <div className="xp-indicator">
                  <p className="all-years">
                     2+ <span className="time-marker">Years</span>
                  </p>
               </div>
            </div>
         </section>
      </main>
   );
}

export default AboutPage;
