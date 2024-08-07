import { create } from "zustand";

type TLoginModal = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useLoginModal = create<TLoginModal>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useLoginModal;
