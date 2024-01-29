import React from "react";
import { AboutData } from "../constants/Aboutus";

export default function About() {
  return (
    <>
      <div className="flex justify-between w-11/12 mx-auto pt-20">
        <div className="w-full md:w-1/2">
          <h1 className=" text-[#2596be] text-center font-bold text-[3rem] py-2 border-b-4 mt-10 border-[#2596be] w-44">
            About
          </h1>
          <p className="my-3">{AboutData.text}</p>
        </div>
        <div className="w-full md:w-1/2 "
          style={{
            backgroundImage: `url(${AboutData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
    </>
  );
}
