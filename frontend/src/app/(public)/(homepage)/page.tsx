import React from "react";

function Homepage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* <div className="absolute top-30 left-40 w-90 h-90 bg-gradient-to-br from-purple-500 to-blue-400 opacity-40 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-tl from-blue-400 to-cyan-400 opacity-30 rounded-full blur-2xl z-0" /> */}

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
          Aprenda vocabulário <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">sem esforço</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-8 max-w-2xl">
          Expanda seu vocabulário em inglês utilizando sua voz e nossa abordagem interativa de aprendizado
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-full bg-transparent border border-purple-700 hover:bg-purple-700 hover:border-purple-700 text-white font-semibold shadow-lg transition-all duration-200">
            Começar agora
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold shadow-lg transition-all duration-200">
            Como funciona
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
