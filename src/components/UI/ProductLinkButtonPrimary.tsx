import React from "react";
import css from "./ProductLinkButtonPrimary.module.css";
import Link from "next/link";

interface Props {
  path: string;
  type: string;
}

export const ProductLinkButtonPrimary = ({ path, type }: Props) => {
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
      See product
    </Link>
  );
};
