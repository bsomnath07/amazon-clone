import React from "react";
import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";
const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
 
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have surprise for you"}
            img={"../images/home_grid_1.jpg"}
            alt="abc"
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"watch the rings of Power"}
            img={"../images/home_grid_2.jpg"}
            alt="abc"
            link={"start streaming now"}
          />
          <HomePageCard
            title={"unlimited streaming"}
            img={"../images/home_grid_3.jpg"}
            alt="abc"
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            alt="abc"
            link={"Browse Kindle unlimited"}
          />
          <HomePageCard
            title={"Shop pet supplies"}
            img={"../images/home_grid_5.jpg"}
            alt="abc"
            link={"See more"}
          />
          <HomePageCard
            title={"Spring sale"}
            img={"../images/home_grid_6.jpg"}
            alt="abc"
            link={"see the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            alt="abc"
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            alt="abc"
            link={"Learn more"}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={"../images/banner_image_2.jpg"} alt="abc" />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img className="h-[100%] m-auto" src={"../images/banner_image.jpg"} alt="abc" />
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
