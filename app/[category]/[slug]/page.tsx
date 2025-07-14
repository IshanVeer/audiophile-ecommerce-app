"use client";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetail = () => {
  const { slug } = useParams();
  return (
    <div>
      <h2>{slug}</h2>
    </div>
  );
};

export default ProductDetail;
