import React from "react";
import Carousel from "./Carousel";
import HomePageCard from "./HomePageCard";
import CaraouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";

const HomePage = () => {
  return (
    <div className=" bg-amazonclone-background">
      <div className=" min-w-[1000px] max-w-[1500px] bg-amazonclone-background m-auto">
        <Carousel />
        <div className=" grid grid-cols-3 xl:grid-cols-4 -mt-32">
          <HomePageCard
            title={"We have a surprised for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse kindle unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <div className=" xl:hidden m-3 pt-[66px]">
            <img src="../images/banner_image_2.jpg"></img>
          </div>
        </div>
        <CarouselProduct />
        <CaraouselCategory />
        <div className="h-[250px] py-5 ">
          <img
            className="h-[100%] m-auto"
            src="../images/banner_image.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
