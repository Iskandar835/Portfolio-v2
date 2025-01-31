import "./styles.css";

function Button({ content }: { content: string }) {
   return (
      <>
         <button className="btn">{content}</button>
      </>
   );
}

export default Button;
