import React from "react";

function LoginPage() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-r from-[#7f5af0] to-[#2cb5e8] bg-clip-text text-transparent select-none">Comece</span>
        {" "}
        sua jornada
      </h1>
      <div className="w-max flex flex-col items-left justify-center bg-gradient-to-br from-[#17161d] to-[#121213] border border-gray-600 rounded-lg px-6 py-10">
        <h1 className="text-2xl font-bold mb-4">Entrar</h1>
        <p className="text-md text-gray-400">Faça login para começar sua jornada de aprendizado</p>

        <form className="flex flex-col gap-4 mt-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-600 rounded-lg p-2 bg-transparent"
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-gray-600 rounded-lg p-2 bg-transparent"
          />
          <button
            type="submit"
            className="bg-[#7f62f4] text-white rounded-lg p-2"
          >
            Entrar
          </button>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;
