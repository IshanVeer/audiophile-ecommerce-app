import Link from "next/link";
import React from "react";

interface ButtonProps {
  buttonStyle?: string;
  label: string;
  isLink?: boolean;
  route?: string;
  className?: string;
}

const Button = ({
  className,
  buttonStyle,
  label,
  isLink = false,
  route,
}: ButtonProps) => {
  const buttonClass = `${className} px-6 py-2 transition duration-150 ${
    buttonStyle === "secondary" ? "button-secondary" : "button-primary"
  }`;

  return (
    <>
      {isLink ? (
        <Link className={buttonClass} href={route || "/"}>
          {label}
        </Link>
      ) : (
        <button className={buttonClass}>{label}</button>
      )}
    </>
  );
};

export default Button;
