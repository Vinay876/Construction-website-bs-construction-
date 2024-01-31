import React from "react";
import { VideoGalleryData } from "../constants/VideoGallery";

export default function VideoGallery() {
  return (
    <>
      <h1 className=" text-[#095aab] text-center font-bold text-[4rem] py-4 underline ">
        Gallery
      </h1>

      <div className="w-11/12 mx-auto  md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VideoGalleryData.map((item, index) => (
            <div className="mt-6  cursor-pointer" key={index}>
              <div className="relative">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${item.videoId
                    .split("/")
                    .pop()}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full "
                ></iframe>
                <div className="-mt-8 text-[#fff] font-sans-serif text-[18px] text-center font-semibold">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
