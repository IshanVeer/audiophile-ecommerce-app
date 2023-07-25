"use client";

import React from "react";


interface Props {
  params: {
    categories: string;
  };
}



const CategoriesPage = ({ params }: Props) => {
    console.log(params.categories)
  return (
    <div>
      <h1>categories:{params.categories}</h1>
    </div>
  );
};

export default CategoriesPage;
