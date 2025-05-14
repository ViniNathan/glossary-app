'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo do App */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#7f5af0] to-[#2cb5e8] bg-clip-text text-transparent select-none">
              Glossary<span className="text-white">UP</span>
            </Link>
          </div>

          {/* Botão de menu - mobile*/}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-200 hover:text-white hover:bg-[#18181b] focus:outline-none"
            aria-label="Menu"
          >
            <IoMenu className="h-6 w-6" />
          </button>

          {/* Botões de navegação - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-1 text-sm font-light tracking-widest uppercase text-gray-200 hover:text-white transition-colors rounded-full"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="px-4 py-1 text-sm font-light tracking-widest uppercase text-white border hover:bg-white hover:text-[#18181b] transition-colors rounded-full"
            >
              Criar Conta
            </Link>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/login"
                className="block px-3 py-2 text-sm font-light tracking-widest uppercase text-gray-200 hover:text-white hover:bg-[#18181b] transition-colors rounded-md"
              >
                Entrar
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 text-sm font-light tracking-widest uppercase text-white bg-[#18181b] hover:bg-[#232329] transition-colors rounded-md"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 