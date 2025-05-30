export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
}

export interface AuthError {
  message: string;
  field?: string;
}

export interface FormState {
  isLoading: boolean;
  error: AuthError | null;
}
export interface ValidateTokenResponse {
  valid: boolean;
  message: string;
  user?: {
    id: string;
    name: string;
    email: string;
    xp: number;
    lives: number;
    createdAt: string;
    updatedAt: string;
  };
  error?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  xp: number;
  lives: number;
}

export interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  validateToken: () => Promise<boolean>;
  logout: () => void;
}
