import React from "react";
import ProductData from "../constants/ProductSection";
import ToolData from "../constants/Tools";


export default function Products() {
  return (
    <>
      {/* Product section start */}

      <div className="my-8 md:my-10 lg:my-10">
        <h1 className=" text-[#095aab] text-center font-bold text-[4rem] py-4 underline ">
          Our Products
        </h1>
        <div className="w-[97%] mx-auto p-4 md:p-0 bg-slate-200">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {ProductData.map((item, index) => (
              <div
                className=" p-1 mt-6 delay-150 ease-in-out transition-all cursor-pointer"
                key={index}
              >
                <div className="lg:flex p-6 lg:p-10">
                  <div className="lg:w-3/4 text-justify lg:p-10">
                    <div className="mt-2 text-[#0368ab]  text-[18px] lg:text-[35px] font-bold">
                      {item.heading}
                    </div>
                    <div className=" text-[16px] font-normal my-3 lg:pr-10 ">
                      {item.text1}
                    </div>
                    <div className=" text-[16px] font-normal my-3 lg:pr-10 ">
                      {item.text2}
                    </div>
                  </div>

                  <div
                    className="w-full h-[200px] rounded-xl mt-4 lg:w-[600px] lg:h-[350px] lg:px-10"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product section end */}

      {/* Tools Section start */}

      <div className="w-[97%] mx-auto md:p-0 bg-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
            {ToolData.map((item, index) => (
              <div
                className=" bg-gray-900  transition delay-100 hover:scale-95 cursor-pointer"
                key={index}
              >
                  <div
                    className="border border-gray-300 w-full h-[450px] md:w-[330px] md:h-[330px] lg:w-[265px] lg:h-[265px] md:p-2 "
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
              </div>
            ))}
        </div>
      </div>

      {/* Tool section end */}

    </>
  );
}
