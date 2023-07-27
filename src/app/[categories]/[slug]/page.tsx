

import React from 'react';
interface Props {
  params: {
    slug: string;
  };
}

const ProductItemPage = ({params}:Props) => {
  return (
    <div><h1 style={{"color":"black"}}>{params.slug}</h1></div>
  )
}

export default ProductItemPage