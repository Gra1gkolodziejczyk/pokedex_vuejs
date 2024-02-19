import { defineStore } from 'pinia';
import router from '@/router';

const baseUrl: string = `${import.meta.env.VITE_API_URL}/users`;

export type User = {
  id: string;
  email: string;
  password: string;
  jwt: string;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
    returnUrl: null as string | null
  }),
  actions: {
    async login(email: string, password: string): Promise<User | any> {
      try {
        const response = await fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const user = await response.json();

        // Update pinia state
        this.user = user;

        // Store user details and jwt in local storage to keep the user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to previous URL or default to home page
        router.push(this.returnUrl || '/');
      } catch (error) {
        console.error('Login error:', error);
        // Handle login error here
      }
    },
    async register(username: string, email: string, password: string): Promise<User | any> {
      try {
        const response = await fetch(`${baseUrl}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        const user = await response.json();

        // Update pinia state
        this.user = user;

        // Store user details and jwt in local storage to keep the user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to home page after registration
        router.push('/');
      } catch (error) {
        console.error('Registration error:', error);
        // Handle registration error here
      }
    },
    logout(): void {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
  }
});