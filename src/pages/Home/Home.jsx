import React from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import LargeMiddleImg from "../../components/LGmiddleImg/LargeMiddleImg";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

const Home = () => {
  return (
    <>
      <BannerTop />
      <LargeMiddleImg />
      <FeaturedProducts type="featured" />
      <TrendingProducts />
    </>
  );
};

export default Home;
