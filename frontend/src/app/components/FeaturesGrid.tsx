import Image from "next/image";
import React from "react";

import gamification from "../../assets/gamification.png";
import ranking from "../../assets/ranking.png";
import rocketship from "../../assets/rocketship.png";
import smartphone from "../../assets/smartphone.png";

function FeaturesGrid() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-center my-8">Como funciona</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 p-4 md:p-6 min-h-[80vh]">
        {/* Card 1 */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 flex flex-col justify-end p-6 md:p-8 shadow-lg h-[300px] md:h-auto lg:col-span-3 lg:row-span-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Aprenda novas palavras</h2>
          <p className="text-white text-sm opacity-80">
            Aprenda novas palavras
            <br />
            com o nosso sistema de gamificação.
          </p>
          <button className="mt-2 px-6 py-2 bg-white text-purple-700 rounded-full font-semibold shadow">Começar agora</button>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-gradient-to-br from-[#53555a] to-[#1c1d1f] shadow-lg relative overflow-hidden h-[300px] md:h-auto lg:col-span-2 lg:row-span-2">
          <div className="absolute inset-0 z-10 p-6">
            <h2 className="text-xl md:text-4xl font-semibold text-white mb-4">Evolua na <br /> velocidade <br /> da luz</h2>
          </div>
          <Image
            src={rocketship}
            alt="Rocketship"
            className="object-contain object-bottom-right opacity-100"
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-gradient-to-tr from-blue-800 to-violet-950 flex flex-col justify-end items-center p-6 shadow-lg h-[300px] relative overflow-hidden md:h-auto lg:col-span-1 lg:row-span-4">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 z-10">Interface minimalista</h2>
          <Image
            src={smartphone}
            alt="Smartphone"
            className="object-contain"
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <p className="text-white text-sm z-10">
            Obtenha a alta performance
            <br />
            com uma estrutura moderna.
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl bg-gradient-to-br from-[#2f3031] to-[#1a1818] flex flex-col justify-between items-start p-6 md:p-8 shadow-lg h-[300px] md:h-auto lg:col-span-2 lg:row-span-2 relative overflow-hidden">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 z-10">Gamificação</h2>
          <Image
            src={gamification}
            alt="Gamification"
            className="object-contain object-bottom-right opacity-35"
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="w-full z-10">
            <p className="text-md text-white z-10">Sistema de vidas, XP e ranking</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="rounded-2xl bg-gradient-to-br from-[#2f3031] to-[#1a1818] flex flex-col justify-between items-start relative overflow-hidden p-6 md:p-8 shadow-lg h-[300px] md:h-auto md:col-span-2 lg:col-span-3 lg:row-span-2">
          <h2 className="text-xl md:text-4xl font-semibold text-white mb-4 z-10">Verifique seu progresso</h2>
          <Image
            src={ranking}
            alt="Ranking"
            className="object-contain object-bottom-right opacity-25"
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="text-md text-white z-10">Faça o tracking do seu desenvolvimento utilizando o sistema de histórico e estatísticas</div>
        </div>
      </div>
    </>
  );
}

export default FeaturesGrid;
