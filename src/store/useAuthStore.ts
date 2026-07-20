import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  avatar?: string;
  address?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, phone?: string) => void;
  logout: () => void;
  register: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (email: string, phone?: string) => {
        // Dummy logic to check admin role
        const isAdmin = email.toLowerCase().includes('admin');
        const name = isAdmin ? 'Administrator' : email.split('@')[0];

        set({
          isAuthenticated: true,
          user: {
            id: Math.random().toString(36).substr(2, 9),
            name: name,
            email: email,
            phone: phone || '0123456789',
            isAdmin: isAdmin,
          },
        });
      },
      logout: () => {
        set({ isAuthenticated: false, user: null });
      },
      register: (data: Partial<User>) => {
        // Just simulate registration by logging them in
        const email = data.email || `user_${Math.random().toString(36).substr(2, 5)}@example.com`;
        const isAdmin = email.toLowerCase().includes('admin');
        set({
          isAuthenticated: true,
          user: {
            id: Math.random().toString(36).substr(2, 9),
            name: data.name || email.split('@')[0],
            email: email,
            phone: data.phone || '0123456789',
            isAdmin: isAdmin,
          },
        });
      },
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
    }
  )
);
