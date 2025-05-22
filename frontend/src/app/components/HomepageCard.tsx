import React from "react";

const stats = [
  {
    id: 1,
    title: "Palavras",
    value: "+1000",
  },
  {
    id: 2,
    title: "Mais rápido",
    value: "+5X",
  },
  {
    id: 3,
    title: "Interativo",
    value: "100%",
  },
];

function HomepageCard() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="bg-[#141416] border border-[#3f3f46] rounded-3xl shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          <div className="md:w-1/3 flex flex-col justify-start items-center md:items-start gap-4">
            <h1 className="text-2xl font-semibold">Expanda seu vocabulário</h1>
            <p className="text-lg text-gray-400">Quanto mais você pratica, mais rápido expande seu vocabulário em inglês. Aumente suas habilidades linguísticas dia após dia.</p>
          </div>
          <div className="w-9/10 md:w-1/2 flex flex-row justify-between items-center">
            {stats.map(stat => (
              <div key={stat.id} className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-[#7f62f4]">{stat.value}</h1>
                <p className="text-lg text-gray-400">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageCard;
