import "./styles.css";

function ExpIndicator() {
   const currentDate = new Date();
   const pastDate = new Date("2023-08-01T12:00:00Z");

   const currentYear = currentDate.getFullYear();
   const pastYear = pastDate.getFullYear();

   const yearsDiff = currentYear - pastYear;

   return (
      <div className="xp-indicator">
         <p className="all-years">
            {yearsDiff}+<span className="time-marker">Ans</span>
         </p>
      </div>
   );
}

export default ExpIndicator;
