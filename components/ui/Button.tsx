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
  const buttonClass = `${className} uppercase text-[13px] leading-[18px] cursor-pointer px-9 py-3.5 transition duration-150 ${
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
