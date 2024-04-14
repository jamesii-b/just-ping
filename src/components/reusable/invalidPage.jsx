// src/components/NotFound.js

import React from "react";
import { Link } from "react-router-dom";
import "./invalid-style.css";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 id="fade-in" className="text-5xl text-gray-800 font-bold mb-8">
        404 - Page Not Found
      </h1>
      <p id="fade-in" className="text-xl text-gray-600 mb-8">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link
        to="/"
        id="bounce"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
