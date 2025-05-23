"use client";
import React from "react";

function LoginPage() {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Implementar a logica de login aqui
    console.log("Login form submitted");
  };

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-r from-[#7f5af0] to-[#2cb5e8] bg-clip-text text-transparent select-none">Comece</span>
        {" "}
        sua jornada
      </h1>
      <div className="w-max flex flex-col items-left justify-center bg-gradient-to-br from-[#17161d] to-[#121213] border border-gray-600 rounded-lg px-6 py-10">
        <h1 className="text-lg md:text-2xl font-bold">Entrar</h1>
        <p className="text-sm md:text-md text-gray-400">Faça login para começar sua jornada de aprendizado</p>

        <form className="flex flex-col gap-4 mt-8">
          <label htmlFor="email" className="text-sm font-semibold mb-[-0.5rem]">Email</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="border border-gray-600 rounded-lg p-2 bg-transparent"
          />
          <label htmlFor="password" className="text-sm font-semibold mb-[-0.5rem]">Senha</label>
          <input
            type="password"
            placeholder="••••••••"
            className="border border-gray-600 rounded-lg p-2 bg-transparent"
          />
          <button
            type="submit"
            className="mt-4 bg-[#7f62f4] text-white rounded-3xl p-2"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;
