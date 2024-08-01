import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PricePulse</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section px-4 py-12 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          🔥Trendings
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
  {allProducts?.map((product) => (
    <div 
      key={product._id} 
      className="flex flex-auto gap-x-8 gap-y-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 transition-transform transform duration-300 hover:scale-105 hover:opacity-100">
      <ProductCard product={product} />
    </div>
  ))}
</div>
      </section>
    </>
  );
};

export default Home;
