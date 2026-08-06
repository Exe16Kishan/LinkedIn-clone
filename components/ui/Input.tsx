import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({
  placeholder = "Write something",
  type = "text",
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`
        flex-1
        h-10
        outline-none
        rounded-full
        border
        border-gray-400
        px-5
        text-left
        text-[15px]
        font-medium
        text-gray-600
        hover:bg-gray-100
        transition-colors
        ${className}
      `}
      {...props}
    />
  );
}

export default Input;