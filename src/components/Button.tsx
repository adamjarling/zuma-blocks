import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  classNames?: string;
  href?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-start py-5 overflow-hidden font-bold border px-7 group"
    >
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-100 opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gray-100 opacity-100 group-hover:-translate-x-8"></span>
      <span className="relative w-full text-left text-gray-100 uppercase transition-colors duration-200 ease-in-out group-hover:text-gray-900">
        {children}
      </span>
      <span className="absolute inset-0 border border-gray-100"></span>
    </a>
  );
};

export default Button;
