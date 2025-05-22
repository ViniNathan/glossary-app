import React from "react";

const steps = [
  {
    id: 1,
    title: "Crie uma conta",
    description: "Registre-se e acesse o GlossaryUP",
  },
  {
    id: 2,
    title: "Veja a palavra",
    description: "Uma palavra em inglês será exibida",
  },
  {
    id: 3,
    title: "Fale a tradução",
    description: "Diga a tradução da palavra em português",
  },
  {
    id: 4,
    title: "Ganhe pontos",
    description: "Acumule XP e avance no ranking",
  },
];

function Steps() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-8 md:gap-4">
        {steps.map(step => (
          <div key={step.id} className="flex flex-col justify-center items-center gap-2 w-full md:w-auto md:max-w-[250px]">
            <h3 className="text-xl font-bold w-12 h-12 flex items-center justify-center bg-purple-900 rounded-full">{step.id}</h3>
            <h1 className="text-2xl font-semibold text-center">{step.title}</h1>
            <p className="text-lg text-gray-400 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
