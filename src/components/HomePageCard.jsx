import React from "react";

const HomePageCard = ({ title, img, link }) => {
  return (
    <div className=" h-[450px] bg-white m-3 z-30">
      <div className=" text-lg  xl:text-xl font-semibold ml-4 mt-4">
        {title}
      </div>
      <div className=" h-[300px] m-4">
        <img className=" w-[100%] h-[100%] object-cover " src={img}></img>
      </div>
      <div className="text-xs xl:text-sm text-blue-400 ml-4 hover:cursor-pointer hover:text-blue-900 transition  ease-in-out">
        {link}
      </div>
    </div>
  );
};

export default HomePageCard;
