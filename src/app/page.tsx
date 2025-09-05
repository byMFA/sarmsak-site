import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

import { categories } from "@/data/categories";
import { featured } from "@/data/products";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <CategoryGrid items={categories} />
      <ProductGrid items={featured} />
      <Newsletter />
      <Footer />
    </>
  );
}
