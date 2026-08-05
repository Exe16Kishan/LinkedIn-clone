import { ReactNode } from "react";

interface CardType {
  children: ReactNode;
}

function Card({ children }: CardType) {
  return <div className={`border-2 h-10`}>{children}</div>;
}

export default Card;
