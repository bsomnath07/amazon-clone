import React from "react";
import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";
import { Link } from "react-router-dom";

const HomePage = () => {
  const products = [
    {
      id: 14,
      title: "We have a surprise for you",
      img: "../images/product_14.jpg",
      alt: "abc",
    },
    {
      id: 15,
      title: "Mens sports shoes",
      img: "../images/product_15.jpg",
      alt: "abc",
    },
    {
      id: 16,
      title: "Unlimited streaming",
      img: "../images/product_16.jpg",
      alt: "abc",
    },
    {
      id: 17,
      title: "More titles to explore",
      img: "../images/product_17.jpg",
      alt: "abc",
    },
    {
      id: 18,
      title: "Shop pet supplies",
      img: "../images/product_18.jpg",
      alt: "abc",
    },
    {
      id: 19,
      title: "Spring sale",
      img: "../images/product_19.jpg",
      alt: "abc",
    },
    {
      id: 20,
      title: "Echo Buds",
      img: "../images/product_20.jpg",
      alt: "abc",
    },
    {
      id: 21,
      title: "Family Plan: 3 months free",
      img: "../images/product_21.jpg",
      alt: "abc",
    },
  ];

  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <HomePageCard
                title={product.title}
                img={product.img}
                alt={product.alt}
              />            
            </Link>
          ))}
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="abc"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="abc"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

