"use client";

import { useEffect, useState } from "react";

import type { UseAuthReturn, User, ValidateTokenResponse } from "../types/auth.ts";

import { authService } from "../services/auth";
import { cookieUtils } from "../utils/cookies";

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const validateToken = async (): Promise<boolean> => {
    const token = cookieUtils.getAuthToken();

    if (!token) {
      setUser(null);
      setLoading(false);
      return false;
    }

    try {
      const response: ValidateTokenResponse = await authService.validateToken(token);

      if (response.valid && response.user) {
        setUser(response.user);
        setLoading(false);
        return true;
      }
      else {
        setUser(null);
        cookieUtils.removeAuthToken();
        setLoading(false);
        return false;
      }
    }
    catch (error) {
      console.error("Erro ao validar token:", error);
      setUser(null);
      cookieUtils.removeAuthToken();
      setLoading(false);
      return false;
    }
  };

  const logout = (): void => {
    setUser(null);
    cookieUtils.removeAuthToken();
    window.location.href = "/login";
  };

  useEffect(() => {
    validateToken();
  }, []);

  return {
    user,
    loading,
    isAuthenticated: !!user,
    validateToken,
    logout,
  };
}
