import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useClerk();
  const {credit, loadCreditsData} = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData()
    }
  },[isSignedIn])

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/20 shadow-sm">
      <div className="flex items-center justify-between mx-4 py-4 lg:mx-20">
        <Link to="/" className="group">
          <img
            className="cursor-pointer w-32 sm:w-44 transition-transform duration-300 group-hover:scale-105"
            src={assets.logo}
            alt="Logo"
          />
        </Link>
        {isSignedIn ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={() => navigate('/buy')} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-110 transition-all duration-700 ">
              <img className="w-5" src={assets.credit_icon} alt="" />
              <p className="text-sm sm:text-sm font-medium text-gray-600">Credits: {credit}</p>
            </button>
            <p className="text-gray-600 max-sm:hidden">Hi, {user.fullName}</p>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="relative overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900 text-white flex items-center gap-4 px-6 py-3 sm:px-10 sm:py-4 text-sm font-medium rounded-full hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300 ease-in-out group shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get started</span>
            <img
              className="w-3 sm:w-4 relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              src={assets.arrow_icon}
              alt="Arrow"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
