import React from "react";
import css from "./ProductLinkButtonPrimary.module.css";
import Link from "next/link";

interface Props {
  path: string;
  type: string;
  name: string;

}

export const ProductLinkButtonPrimary = ({ path, type, name }: Props) => {
  const productLinkTypeClass =
    type === "primary"
      ? css.primary
      : type === "dark"
      ? css.dark
      : type === "transparent"
      ? css.transparent
      : css.primary;
  return (
    <Link href={path} className={`${css.productLink} ${productLinkTypeClass}`}>
      {name}
    </Link>
  );
};
