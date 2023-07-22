
import { Header } from "@/components/layout/Header";
import styles from "./page.module.css";
import { CategoriesSection } from "@/components/layout/CategoriesSection";
import { ProductSection } from "@/components/layout/ProductSection";

export default function Home() {
  return (
    <div>
     <Header />
     <CategoriesSection />
     <ProductSection />
    </div>
  );
}
