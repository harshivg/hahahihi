import React from "react";
import Signin from "../pages/Signin";
import Carousel from "./Carousel";

function LandingPage() {
  return (
    <>
      <div className="h-screen w-full flex flex-col bg-red-500">
        <div className="bg-gray-800 text-white text-center py-2">
          <h1 className="text-3xl">Welcome to ShoppyMart</h1>
          <p className="text-[1.2rem]">
            The local guide for your shopping experience
          </p>
        </div>
        <div className="flex items-center w-full h-full bg-yellow-400 p-5 grow">
          {/* Left side: Carousel */}
          <div className="w-1/2 px-[2rem]">
            <Carousel />
          </div>

          {/* Right side: Sign In */}
          <div className="w-1/2 px-[6rem]">
            <Signin />
          </div>
        </div>
        {/* Footer */}
        <div className="bg-gray-800 text-white text-center py-4">
          <div className="container mx-auto px-4">
            <p>&copy; 2024 ShoppyMart. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
