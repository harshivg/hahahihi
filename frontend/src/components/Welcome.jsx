import React from 'react';
import Signin from '../pages/Signin';
import Carousel from './Carousel';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex">
        {/* Left side: Carousel */}
        <div className="w-1/2 flex items-center justify-center bg-yellow-400">
          <div className="">
            <Carousel />
          </div>
        </div>

        {/* Right side: Sign In */}
        <div className="w-1/2 bg-yellow-400 flex-col items-center justify-center">
          <div className="bg-gray-800 text-white text-center py-4 m-4 rounded-lg">
            <h1 className="text-4xl">Welcome to ShoppyMart</h1>
            <p className="text-lg">The local guide for your shopping experience</p>
          </div>
          <Signin />
        </div>
      </main>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 ShoppyMart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;