"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

import type { LoginRequest } from "@/types/auth";

import { authService } from "@/services/auth";

function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await authService.login(formData);
      localStorage.setItem("glossaryUpToken", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      router.push("/dashboard");
    }
    catch (err: any) {
      setError(err.response?.data?.message || "Erro ao fazer login");
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Link className="absolute top-4 left-4" href="/">
        <FiArrowLeftCircle className="size-10 text-[#7f62f4] hover:text-[#7f5af0] cursor-pointer" />
      </Link>
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-6 md:gap-8">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl select-none">
          <span className="bg-gradient-to-r from-[#7f5af0] to-[#2cb5e8] bg-clip-text text-transparent">Comece</span>
          {" "}
          sua jornada
        </h1>
        <div className="w-full max-w-sm md:max-w-max flex flex-col items-left justify-center bg-gradient-to-br from-[#17161d] to-[#121213] border border-gray-600 rounded-lg px-4 py-6 md:px-6 md:py-10">
          <h1 className="text-xl font-bold md:text-2xl">Entrar</h1>
          <p className="text-sm text-gray-400 md:text-base">Faça login para começar sua jornada de aprendizado</p>

          {error && (
            <div className="mt-4 p-2 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-3 mt-6 md:gap-4 md:mt-8">
            <label htmlFor="email" className="text-xs font-semibold md:text-sm md:mb-[-0.5rem]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="border border-gray-600 rounded-lg p-2 bg-transparent text-sm md:text-base"
              required
            />
            <label htmlFor="password" className="text-xs font-semibold md:text-sm md:mb-[-0.5rem]">Senha</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="border border-gray-600 rounded-lg p-2 bg-transparent text-sm md:text-base"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="mt-3 bg-[#7f62f4] text-white rounded-3xl p-2 text-sm md:text-base md:mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
        <Link href="/register" className="text-white text-md mt-[-0.5rem]">
          Ainda não tem uma conta?
          {" "}
          <span className="font-bold text-[#7f5af0]">Registre-se</span>
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
