

import React from 'react';
interface Props {
  params: {
    slug: string;
  };
}
export async function getStaticParams(){
  const res = await fetch("http://localhost:3000/api/products",{ next: { revalidate: 60 } });
  const products = await res.json();
  

}

const ProductItemPage = ({params}:Props) => {
  return (
    <div><h1 style={{"color":"black"}}>{params.slug}</h1></div>
  )
}

export default ProductItemPage