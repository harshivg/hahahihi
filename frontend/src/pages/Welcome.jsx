import Signin from "./Signin";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {baseUrl} from "../components/config/config"

function LandingPage() {
  return (
    <div className="bg-blue-100 h-full flex flex-col ">
      {/* Hero Section */}
      <section className="bg-blue-600 text-emerald-500 decoration-red-950 text-center py-36 bg-[url('img3.jpg')] bg-cover h-full ">
        <div className="container mx-auto px-4 ">
          <h1
            className="text-4xl font-bold -translate-y-32 italic drop-shadow-2x
         text-black   "
          >
            Welcome to Hahahihi
          </h1>
          <p
            className="mt-4 text-lg translate-y-64 italic brightness-100
           drop-shadow-2x text-black   text-shadow text-shadow-md 
              "
          >
            Find the best routes for your shopping needs.
          </p>

          <p className="text-black">....</p>
          <p className="text-black">....</p>
        </div>
      </section>
    </div>
  );
}

function Welcome() {
  return (
    <div className="h-full">
      <div className="flex h-screen">
        <div className="w-1/2 bg-blue-100">
          <LandingPage />
        </div>
        <div className="w-1/2 bg-white">
          <Signin />
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center h-6">
        <div className="container mx-auto px-4 mb-5">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Welcome;
