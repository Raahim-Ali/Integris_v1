import React from "react";
import Greenbtn from "./Greenbtn";
import Image from "next/image";

const highlightServices = (title) => {
  const words = title.split(" ");
  return words.map((word, index) => (
    <span
      key={index}
      className={
        word.toLowerCase() === "services" ||
        word.toLowerCase() === "web" ||
        word.toLowerCase() === "development" ||
        word.toLowerCase() === "work" ||
        word.toLowerCase() === "us" ||
        word.toLowerCase() === "full" ||
        word.toLowerCase() === "ops" ||
        word.toLowerCase() === "mobile" ||
        word.toLowerCase() === "software" ||
        word.toLowerCase() === "ui" ||
        word.toLowerCase() === "Software" ||
        word.toLowerCase() === "service"
          ? "text-green-500"
          : "text-whitePrimary"
      }
    >
      {word}
      {index < words.length - 1 && " "} {/* Add space between words */}
    </span>
  ));
};

const HeroSection = ({
  title,
  paragraph,
  btnText,
  btnWidth,
  imgSrc,
  titleWidth,
  pWidth,
}) => {
  return (
    <div className="bg-primaryBlack flex relative overflow-hidden sm:px-10  sm:py-10 pb-16">
      {/* Ellipse Section */}
      <div className="absolute left-0 bottom-0  bg-[#B318FF] w-48 h-52 lg:w-80 z-0 lg:h-52 rounded-3xl blur-[200px]"></div>
      <div className="flex justify-between align-center xl:px-40  pt-20 pb-10  px-8 xl:py-32 z-10">
        <div className="flex flex-col justify-center gap-5">
          {/* Text Section */}
          <h1
            style={{ lineHeight: 1.2 }}
            className="poppins text-4xl w-full sm:texl-6xl md:text-7xl  md:w-full lg:text-7xl lg:w-full xl:w-full xl:text-7xl font-black uppercase "
          >
            {highlightServices(title)}
          </h1>
          <div className="mb-3 ">
            <p className="text-whitePrimary text-xs  w-4/5 sm:w-4/5 sm:text-lg md:text-xl inter">
              {paragraph}
            </p>
          </div>
          <div className="z-10 flex w-fit">
            <Greenbtn buttonText={btnText} href="/Services" />
          </div>
        </div>

        <div>
          <img
            src={imgSrc}
            className="absolute right-0 sm:right-0  bottom-0 sm:bottom-[-160px] overflow-hidden object-fill w-64 z-1 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
