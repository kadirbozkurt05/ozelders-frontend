import { create } from "zustand";

type TListingModal = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useListingModal = create<TListingModal>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useListingModal;
