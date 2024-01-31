import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { IoIosArrowDropup } from "react-icons/io";
import About from "./components/About";
import VideoGallery from "./components/VideoGallery";

function App() {
  return (
    <>
    
      <Navbar />
      <About />
      <Services />
      <VideoGallery />
      <div className="relative h-16 flex items-center justify-end mr-6">
        <div className="w-12 h-12 border-2 border-blue-500 p-3 rounded-full flex items-center justify-center ml-4">
          <IoIosArrowDropup className="text-[20px]" />
        </div>
      </div>
    </>
  );
}

export default App;
