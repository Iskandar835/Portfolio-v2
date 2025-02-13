export type ButtonType = {
   onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
   content: string;
   className?: string;
};
