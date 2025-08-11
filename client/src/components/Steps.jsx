import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent leading-tight">
        Steps to remove background <br /> image in seconds
      </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 xl:mt-24 px-4">
  {/* Card 1 */}
  <div className="group flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded transition-transform duration-500 hover:scale-105">
    <img
      className="max-w-9 transform transition-transform duration-1000 group-hover:rotate-[180deg]"
      src={assets.upload_icon}
      alt="Upload"
    />
    <div>
      <p className="text-xl font-medium">Upload image</p>
      <p className="text-sm text-neutral-500 mt-1">
        This is a demo text, will replace it later. This is a demo..
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded transition-transform duration-500 hover:scale-105">
    <img
      className="max-w-9 transform transition-transform duration-1000 group-hover:rotate-[180deg]"
      src={assets.remove_bg_icon}
      alt="Remove Background"
    />
    <div>
      <p className="text-xl font-medium">Remove background</p>
      <p className="text-sm text-neutral-500 mt-1">
        This is a demo text, will replace it later. This is a demo..
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="group flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded transition-transform duration-500 hover:scale-105">
    <img
      className="max-w-9 transform transition-transform duration-1000 group-hover:rotate-[180deg]"
      src={assets.download_icon}
      alt="Download"
    />
    <div>
      <p className="text-xl font-medium">Download image</p>
      <p className="text-sm text-neutral-500 mt-1">
        This is a demo text, will replace it later. This is a demo..
      </p>
    </div>
  </div>
</div>


          
    </div>
  );
};

export default Steps;
