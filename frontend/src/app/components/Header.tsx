"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

import { authService } from "../../services/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    }
    else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const validateToken = async () => {
    const token = document.cookie.split("; ").find(row => row.startsWith("glossaryUpToken="));
    if (token) {
      const response = await authService.validateToken(token.split("=")[1]);
      return response;
    }
    return false;
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const tokenResponse = await validateToken();
        if (tokenResponse && tokenResponse.valid) {
          setIsAuthenticated(true);
        }
        else {
          setIsAuthenticated(false);
        }
      }
      catch (error) {
        setIsAuthenticated(false);
      }
      finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <motion.div
      className="w-full bg-[#0a0a0c] fixed top-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo do App */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#7f5af0] to-[#2cb5e8] bg-clip-text text-transparent select-none">
              Glossary
              <span className="text-white">UP</span>
            </Link>
          </div>

          {/* Botão de menu - mobile */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-200 hover:text-white hover:bg-[#18181b] focus:outline-none"
            aria-label="Menu"
          >
            <IoMenu className="h-6 w-6" />
          </button>

          {/* Botões de navegação - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoading && (
              <>
                {isAuthenticated
                  ? (
                      <Link
                        href="/dashboard"
                        className="px-4 py-1 text-sm font-light tracking-widest uppercase text-white border-2 hover:bg-white hover:text-[#18181b] transition-colors rounded-full"
                      >
                        Dashboard
                      </Link>
                    )
                  : (
                      <>
                        <Link
                          href="/login"
                          className="px-4 py-1 text-sm font-light tracking-widest uppercase text-gray-200 hover:text-white transition-colors rounded-full"
                        >
                          Entrar
                        </Link>
                        <Link
                          href="/register"
                          className="px-4 py-1 text-sm font-light tracking-widest uppercase text-white border-2 hover:bg-white hover:text-[#18181b] transition-colors rounded-full"
                        >
                          Criar Conta
                        </Link>
                      </>
                    )}
              </>
            )}
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {!isLoading && (
                <>
                  {isAuthenticated
                    ? (
                        <Link
                          href="/dashboard"
                          className="block px-3 py-2 text-sm font-light tracking-widest uppercase text-white bg-[#18181b] hover:bg-[#232329] transition-colors rounded-md"
                        >
                          Dashboard
                        </Link>
                      )
                    : (
                        <>
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
                        </>
                      )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
