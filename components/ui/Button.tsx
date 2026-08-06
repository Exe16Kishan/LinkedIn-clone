import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text: string;
}

function Button({
  icon,
  text,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        flex
        items-center
        gap-2
        px-5
        py-3
        rounded-md
        hover:bg-[#edf3f8]
        transition-colors
        text-[14px]
        font-semibold
        text-[#666666]
        ${className}
      `}
      {...props}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Button;