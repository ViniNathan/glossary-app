'use client';
import { useState } from 'react';
import Link from 'next/link';

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

          {/* Botões de Navegação */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-1 text-sm font-light tracking-widest uppercase text-gray-200 hover:text-white transition-colors rounded-full"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="px-4 py-1 text-sm font-light tracking-widest uppercase text-white bg-[#18181b] hover:bg-[#232329] transition-colors rounded-full"
            >
              Criar Conta
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 