

import ManageProduct from '@/components/UI/ManageProduct';
import AboutSection from '@/components/layout/AboutSection';
import CategoriesSection from '@/components/layout/CategoriesSection';
import ProductDetail from '@/components/product/ProductDetail';
import React from 'react';

export async function getStaticParams(){
  const res = await fetch("http://localhost:3000/api/products",{ next: { revalidate: 60 } });
  const products = await res.json();
  return products;

  

}

export default async function ProductItemPage(){
  const products = await getStaticParams();
  const productsArray = products.products;
  console.log(productsArray, 'products array');
  return (
    <div>
      <ProductDetail products={productsArray}/>
      <CategoriesSection />
      <AboutSection />  
      
    </div>
  )
}

