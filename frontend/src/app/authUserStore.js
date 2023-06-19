import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const authUserStore = (set) => ({
  authUser: null,
  login: (data) => {
    set(() => ({
      authUser: data,
    }));
  },
  logout: () => {
    set(() => ({
      authUser: null,
    }));
  },
});

const useAuthUserStore = create(
  devtools(
    persist(authUserStore, {
      name: 'authUser',
    })
  )
);

export default useAuthUserStore;
