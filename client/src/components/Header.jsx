import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-10 py-4 mt-10 sm:mt-20 px-6 lg:px-44">
      {/* ----------------Left Side ------------------ */}
      <div className="w-full sm:w-1/2">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove <br className="hidden md:inline" />{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="hidden md:inline" /> images for free
        </h1>
        <p className="text-gray-500 my-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          consectetur assumenda. <br className="hidden sm:inline" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          expedita.
        </p>
        <input type="file" id="Upload1" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700"
          htmlFor="Upload1"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-sm text-white">Upload your image</p>
        </label>
      </div>

      {/* ------------------Right Side-------------------- */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          src={assets.header_img}
          alt=""
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </div>
  );
};

export default Header;
