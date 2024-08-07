import { create } from "zustand";

type TRegisterModal = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useRegisterModal = create<TRegisterModal>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useRegisterModal;
