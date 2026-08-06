import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-lg
        border
        border-zinc-200
        shadow-sm
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;