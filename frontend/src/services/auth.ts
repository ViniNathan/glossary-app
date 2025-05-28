import axios from "axios";

import type { AuthResponse, LoginRequest, RegisterRequest, ValidateTokenResponse } from "../types/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
});

export const authService = {
  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/register", {
      ...data,
      confirmPassword: data.password,
    });
    return response.data;
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/login", data);
    return response.data;
  },

  async validateToken(token: string): Promise<ValidateTokenResponse> {
    try {
      const response = await api.get<ValidateTokenResponse>("/auth/validate", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    }
    catch (error: any) {
      if (error.response?.data) {
        return error.response.data;
      }
      return {
        valid: false,
        message: "Erro ao validar token",
        error: "NETWORK_ERROR",
      };
    }
  },
};
