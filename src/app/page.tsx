import  Header  from "@/components/layout/Header";
import styles from "./page.module.css";
import  CategoriesSection  from "@/components/layout/CategoriesSection";
import  ProductSection  from "@/components/layout/ProductSection";
import AboutSection from "@/components/layout/AboutSection";


export async function getProducts(){
  const res = await fetch("http://localhost:3000/api/products",{ next: { revalidate: 60 } });
  const products = await res.json();
  return products;

}

export  default async function Home() {
  const products = await getProducts();
  const productsArray = products.products;

  return (
    <div>
      <Header />
      <CategoriesSection products={productsArray}/>
      <ProductSection />
      <AboutSection />
    </div>
  );
}
