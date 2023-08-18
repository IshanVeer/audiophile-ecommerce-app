import React from "react";
import css from "./ProductLinkButtonPrimary.module.css";
import Link from "next/link";

interface Props {
  path: string;
  type: string;
  name: string;

  width: string;
  onClick?: () => void;

}

const ProductLinkButtonPrimary = ({ path, type, name, width, onClick }: Props) => {

  const linkWidthClass = width === "full" ? css.full : css.half;
  const productLinkTypeClass =
    type === "primary"
      ? css.primary
      : type === "dark"
      ? css.dark
      : type === "transparent"
      ? css.transparent
      : css.primary;


  return (
    <Link href={path} className={`${css.productLink} ${productLinkTypeClass} ${linkWidthClass}`} onClick={onClick}>
      {name}
    </Link>
  );
};
export default ProductLinkButtonPrimary;

