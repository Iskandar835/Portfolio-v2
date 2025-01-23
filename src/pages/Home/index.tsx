import "./styles.css";

function Homepage() {
   return (
      <main>
         <section className="personnal-intro">
            <div className="name-container">
               <img src="/assets/arrow.png" alt="Image d'une flêche" />
               <p className="name">
                  Hello ! I Am{" "}
                  <span className="span-color">Sacha Vandermoeten</span>
               </p>
            </div>
            <div className="avatar-and-text-container">
               <div>
                  <img src="/assets/avatar.png" alt="Image de l'avatar" />
               </div>
               <div className="avatar-and-text-content">
                  <p>A Designer who</p>
                  <h1 className="intro-titles">
                     Judges a book <br />
                     by it's <span className="span-color">cover</span>...
                  </h1>
                  <p className="little-lines">
                     Because if the cover does not impress you what else can ?
                  </p>
               </div>
            </div>
         </section>
         <section className="professional-intro">
            <h2 className="intro-titles">I'm a Software Engineer.</h2>
            <p>Currently, I'm a Software Engineer at Facebook,</p>
            <p className="professional-intro-text">
               A self-taught UI/UX designer, functioning in the industry for 3+
               years now. <br />
               I make meaningful and delightful digital products that create an
               equilibrium <br />
               between user needs and business goals.
            </p>
         </section>
      </main>
   );
}

export default Homepage;
