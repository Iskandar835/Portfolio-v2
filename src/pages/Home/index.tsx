import "./styles.css";

function Homepage() {
   return (
      <main>
         <section className="perso-and-pro-section">
            <section>
               <img src="/assets/avatar.png" alt="Imaghe de l'avatar" />
               <img src="/assets/arrow.png" alt="Image d'une flêche" />
               <p>
                  Hello! I Am <span>Ibrahim Memon</span>
               </p>
               <p>A Designer who</p>
               <h1>
                  Judges a book by its <span>cover</span>...
               </h1>
               <p>Because if the cover does not impress you what else can?</p>
            </section>
            <section className="professional-intro-section">
               <div className="professional-intro-title">
                  <h2>I'm a Software Engineer.</h2>
                  <p>Currently, I'm a Software Engineer at Facebook,</p>
               </div>
               <div className="professional-intro-text">
                  <p>
                     A self-taught UI/UX designer, functioning in the industry
                     for 3+ years now.
                  </p>
                  <p>
                     I make meaningful and delightful digital products that
                     create an equilibrium <br />
                     between user needs and business goals.
                  </p>
               </div>
            </section>
         </section>
      </main>
   );
}

export default Homepage;
