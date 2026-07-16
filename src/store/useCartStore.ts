import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartState, CartItem } from '@/types/cart';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isMiniCartOpen: false,
      isSuccessModalOpen: false,
      totalItems: 0,
      totalPrice: 0,

      addItem: (product, color, variant, quantity) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (item) => item.id === `${product.id}-${color.id}-${variant.id}`
        );

        const newItems = [...items];
        if (existingItemIndex >= 0) {
          // If item already exists, increase quantity
          const existingItem = newItems[existingItemIndex];
          newItems[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + quantity,
          };
        } else {
          // Add new item
          newItems.push({
            id: `${product.id}-${color.id}-${variant.id}`,
            quantity,
            product,
            color,
            variant,
          });
        }

        // Calculate totals
        const totalItems = newItems.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = newItems.reduce(
          (acc, item) => acc + item.product.basePrice * item.quantity,
          0
        );

        set({ items: newItems, totalItems, totalPrice });
      },

      removeItem: (id) => {
        const { items } = get();
        const newItems = items.filter((item) => item.id !== id);

        const totalItems = newItems.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = newItems.reduce(
          (acc, item) => acc + item.product.basePrice * item.quantity,
          0
        );

        set({ items: newItems, totalItems, totalPrice });
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;

        const { items } = get();
        const newItems = items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity };
          }
          return item;
        });

        const totalItems = newItems.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = newItems.reduce(
          (acc, item) => acc + item.product.basePrice * item.quantity,
          0
        );

        set({ items: newItems, totalItems, totalPrice });
      },

      toggleMiniCart: (isOpen) => {
        set((state) => ({
          isMiniCartOpen: isOpen !== undefined ? isOpen : !state.isMiniCartOpen,
        }));
      },

      showSuccessModal: () => {
        set({ isSuccessModalOpen: true });
        setTimeout(() => {
          set({ isSuccessModalOpen: false });
        }, 2000);
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },
    }),
    {
      name: 'luxe-cart-storage',
      partialize: (state) => ({ items: state.items, totalItems: state.totalItems, totalPrice: state.totalPrice }), // don't persist UI state like isMiniCartOpen
    }
  )
);
