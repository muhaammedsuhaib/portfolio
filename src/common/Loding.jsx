import React from "react";
import { FaSpinner } from "react-icons/fa";
import colors from "../utils/theam";

const Loading = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${colors.background} p-4`}
    >
      <div className="relative flex justify-center items-center">
        <FaSpinner className="text-teal-500 text-6xl animate-spin" />
      </div>

      <h2
        className={`mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse`}
      >
        Please wait...
      </h2>
    </div>
  );
};

export default Loading;
