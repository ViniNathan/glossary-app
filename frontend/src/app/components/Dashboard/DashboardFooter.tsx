import React from "react";
import { FaKeyboard } from "react-icons/fa";

function DashboardFooter() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:gap-10 md:flex-row justify-center md:justify-between items-center py-4">
          <button
            type="button"
            className="w-full md:w-max text-md md:text-lg text-black md:text-white font-semibold border-2 bg-amber-200 md:bg-transparent border-amber-200 rounded-2xl px-3 md:px-6 py-2 md:py-4
          hover:border-amber-200 hover:bg-amber-200 hover:text-black ease-in-out duration-100"
          >
            PULAR
          </button>
          <div className="w-full flex flex-row justify-start md:justify-center items-center gap-4">
            <FaKeyboard className="size-5 md:size-8 flex-shrink-0" />
            <form action="text-translation" className="flex-1">
              <input type="text" placeholder="DIGITE A TRADUÇÃO" className="w-full border-2 border-gray-300 rounded-2xl text-md:text-lg font-semibold uppercase px-4 py-4" />
            </form>
          </div>
          <button
            type="button"
            className="w-full md:w-max text-md md:text-lg text-black md:text-white font-semibold border-2 bg-emerald-200 md:bg-transparent border-emerald-200 rounded-2xl px-3 md:px-6 py-2 md:py-4
            hover:border-emerald-200 hover:bg-emerald-200 hover:text-black ease-in-out duration-100"
          >
            VERIFICAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardFooter;
