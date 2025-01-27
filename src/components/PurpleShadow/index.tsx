import "./styles.css";

type PurpleShadowProps = {
   isLargeVersion: boolean;
};

function PurpleShadow({ isLargeVersion }: PurpleShadowProps) {
   return (
      <div
         className={
            isLargeVersion
               ? "purple-shadow-container large-version"
               : "purple-shadow-container"
         }
      >
         <div className="purple-shadow"></div>
      </div>
   );
}

export default PurpleShadow;
