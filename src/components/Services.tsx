import React from "react";
import ServicesData from "../constants/Services";
export default function Services() {
  return (
    <>
      <div>
        <h1 className=" text-[#095aab] text-center font-bold text-[4rem] py-4 ">
          Our Services
        </h1>
        <p className="text-black text-lg text-center">
          At Delta Tooling Solution we Offer the followng services to augment
          your machining needs
        </p>
        <div className="w-11/12  mx-auto   p-4 md:p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ServicesData.map((item, index) => (
              <>
                <div
                  className="p-1 mt-6 hover:bg-blue-300 hover:text-white delay-150 ease-in-out transition-all cursor-pointer"
                  key={index}
                >
                  <div className=" p-6 ">
                    <div
                      className="w-full h-[200px]"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div className="mt-2 text-[#0368ab] font-sans-serif text-[18px] font-medium">
                      {item.title}
                    </div>

                    <div className=" text-[16px] font-normal my-6">
                      {item.description}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* circle */}
    </>
  );
}
