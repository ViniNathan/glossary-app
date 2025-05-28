import React from "react";
import { FaHeart } from "react-icons/fa6";

function DashboardTopbar() {
  return (
    <div className="container mt-4 md:mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="bg-gray-500 h-6 w-full rounded-2xl"></div>
        <div className="text-red-400 flex flex-row justify-center items-center gap-2">
          <FaHeart className="size-6 md:size-8" />
          <span className="text-2xl font-semibold">5</span>
        </div>
      </div>
      <p className="text-lg font-semibold text-gray-400 mt-4 uppercase">DIFÍCIL</p>
    </div>
  );
}

export default DashboardTopbar;
