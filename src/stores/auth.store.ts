import type { User } from '@/types/user';
import { defineStore } from 'pinia';
import router from '@/router';

const baseUrl: string = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
    returnUrl: null as string | null
  }),
  actions: {
    async login(email: string, password: string): Promise<User | any> {
      try {
        const response = await fetch(`${baseUrl}/auth/login`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }
        const user = await response.json();
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));

        router.push(this.returnUrl || '/');
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    async register(username: string, email: string, password: string): Promise<User | any> {
      try {
        const response = await fetch(`${baseUrl}/auth/register`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
          throw new Error('Register failed');
        }
        const user = await response.json();
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/login');
      } catch (error) {
        console.log('Registration error:', error);
      }
    },
    logout(): void {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
  }
});