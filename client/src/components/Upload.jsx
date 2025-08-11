import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent leading-tight">
        See the magic. Try now
          </h1>
          
          <div className="text-center mb-24">
              <input type="file" id="Upload2" hidden />
                      <label
                        className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700"
                        htmlFor="Upload2"
                      >
                        <img width={20} src={assets.upload_btn_icon} alt="" />
                        <p className="text-sm text-white">Upload your image</p>
                      </label>
          </div>

    </div>
  );
};

export default Upload;
