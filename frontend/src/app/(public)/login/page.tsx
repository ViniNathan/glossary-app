"use client";
import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

function LoginPage() {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Implementar a logica de login aqui
    console.log("Login form submitted");
  };

  return (
    <>
      <div className="absolute top-4 left-4">
        <FiArrowLeftCircle className="size-10 text-[#7f62f4] hover:text-[#7f5af0] cursor-pointer" />
      </div>
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-6 md:gap-8">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-[#7f5af0] to-[#2cb5e8] bg-clip-text text-transparent select-none">Comece</span>
          {" "}
          sua jornada
        </h1>
        <div className="w-full max-w-sm md:max-w-max flex flex-col items-left justify-center bg-gradient-to-br from-[#17161d] to-[#121213] border border-gray-600 rounded-lg px-4 py-6 md:px-6 md:py-10">
          <h1 className="text-xl font-bold md:text-2xl">Entrar</h1>
          <p className="text-sm text-gray-400 md:text-base">Faça login para começar sua jornada de aprendizado</p>

          <form className="flex flex-col gap-3 mt-6 md:gap-4 md:mt-8">
            <label htmlFor="email" className="text-xs font-semibold md:text-sm md:mb-[-0.5rem]">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="border border-gray-600 rounded-lg p-2 bg-transparent text-sm md:text-base"
            />
            <label htmlFor="password" className="text-xs font-semibold md:text-sm md:mb-[-0.5rem]">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="border border-gray-600 rounded-lg p-2 bg-transparent text-sm md:text-base"
            />
            <button
              type="submit"
              className="mt-3 bg-[#7f62f4] text-white rounded-3xl p-2 text-sm md:text-base md:mt-4"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>

  );
}

export default LoginPage;
