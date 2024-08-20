import { create } from "zustand";

type TTeacherRegisterModal = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useTeacherRegisterModal = create<TTeacherRegisterModal>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useTeacherRegisterModal;
