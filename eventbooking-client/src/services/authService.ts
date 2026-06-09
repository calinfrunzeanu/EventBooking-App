import api from './api';

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  expiration: string;
  email: string;
  roles: string[];
}

export const authService = {
  async login(dto: LoginDto): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', dto);
    const data = response.data;
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  },

  async register(dto: RegisterDto): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', dto);
    const data = response.data;
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  },

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser(): AuthResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.roles?.includes('Admin') ?? false;
  },
};
