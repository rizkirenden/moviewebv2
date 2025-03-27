import React from "react";
import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Cardcarousel from "@/components/cardcarousel";
import News from "@/components/news";
import Genrefilm from "@/components/genrefilm";
import Film from "@/components/film";
import Footer from "@/components/footer";
const Page = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="relative">
        <Carousel />
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/3">
            <Cardcarousel />
          </div>
        </div>
      </div>
      <div className="mt-72">
        <News />
      </div>
      <div>
        <Genrefilm />
      </div>
      <div>
        <Film />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
