import  Header  from "@/components/layout/Header";
import styles from "./page.module.css";
import  CategoriesSection  from "@/components/layout/CategoriesSection";
import  ProductSection  from "@/components/layout/ProductSection";
import AboutSection from "@/components/layout/AboutSection";



export  default  function Home() {
  

  return (
    <div>
      <Header />
      <CategoriesSection />
      <ProductSection />
      <AboutSection />
    </div>
  );
}
