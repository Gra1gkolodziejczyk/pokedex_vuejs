import type { User } from '@/types/user';
import { defineStore } from 'pinia';
import router from '@/router';

const baseUrl: string = `${import.meta.env.VITE_BASE_URL}/users`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('access_token') || 'null') as User["access_token"] | null,
    returnUrl: null as string | null
  }),
  actions: {
    async login(email: string, password: string): Promise<User["access_token"] | any> {
      try {
        const response = await fetch(`${baseUrl}/auth/login`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
          throw new Error('La connection à raté');
        }
        const user = await response.json();
        this.user = user.access_token;
        localStorage.setItem('access_token', JSON.stringify(user.access_token));

        router.push(this.returnUrl || '/');
      } catch (error) {
        console.error('Erreur de connexion:', error);
      }
    },
    async register(username: string, email: string, password: string): Promise<User["access_token"] | any> {
      try {
        const response = await fetch(`${baseUrl}/auth/register`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
          throw new Error("L'inscription à raté");
        }
        const user = await response.json();
        this.user = user.access_token;
        localStorage.setItem('access_token', JSON.stringify(user.access_token));
        router.push('/login');
      } catch (error) {
        console.log('Erreur inscription:', error);
      }
    },
    logout(): void {
      this.user = null;
      localStorage.removeItem('access_token');
      router.push('/login');
    }
  }
});