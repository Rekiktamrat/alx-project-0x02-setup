import { type ButtonProps } from "@/interfaces";
import React from "react";

const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "px-2 py 1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};
const Button: React.FC<ButtonProps> = ({ children, size, shape, onclick, styles }) => {
  return <button onClick={onclick} className={`${styles} ${sizeClasses[size]} ${shape}`}>{children}</button>;
};

export default Button;
