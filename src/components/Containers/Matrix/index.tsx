import "./styles.css";
import { useEffect, useRef } from "react";

function Matrix() {
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const canvasWidth = 580;
      const canvasHeight = 350;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ".repeat(6).split("");
      const fontSize = 13;
      const columns = Math.floor(canvas.width / fontSize);
      const drops = new Array(columns).fill(1);

      const draw = () => {
         ctx.fillStyle = "rgba(17, 7, 31, 0.3)";
         ctx.fillRect(0, 0, canvas.width, canvas.height);

         for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = "#9857d3";
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
               drops[i] = 0;
            }
         }
      };

      const interval = setInterval(draw, 70);

      return () => {
         clearInterval(interval);
      };
   }, []);

   return <canvas ref={canvasRef} />;
}

export default Matrix;
