import Link from "next/link";
import React from "react";
import { LuArrowBigUpDash, LuSettings } from "react-icons/lu";
import { PiRankingFill } from "react-icons/pi";

function DashboardHeader() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo do App */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-sm md:text-2xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#7f5af0] to-[#2cb5e8] bg-clip-text text-transparent select-none">
              <span>Glossary</span>
              <span className="text-white">UP</span>
            </Link>
          </div>

          {/* Botões de navegação */}
          <div className="flex flex-row items-center justify-center space-x-4 md:space-x-12">
            <div className="flex flex-row justify-center items-center gap-1">
              <LuArrowBigUpDash className="size-6 md:size-8" />
              <div className="text-lg md:text-2xl font-medium md:font-semibold">500</div>
            </div>
            <div className="flex flex-row justify-center items-center gap-1">
              <PiRankingFill className="size-6 md:size-8" />
              <div className="text-lg md:text-2xl font-medium md:font-semibold">28°</div>
            </div>

            <LuSettings className="size-5 md:size-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
