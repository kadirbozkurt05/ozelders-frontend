import { create } from "zustand";
import type { TTeacherInfo } from "@/lib/types";

type TTeacherInfoStore = {
  teacherInfo: TTeacherInfo | null;
  initialized: boolean;
  refreshTeacherInfo: () => void;
  fetchTeacherInfo: () => void;
  setTeacherInfo: (teacherInfo: TTeacherInfo) => void;
};

export const useTeacherInfoStore = create<TTeacherInfoStore>((set) => ({
  teacherInfo: null,
  initialized: false,
  fetchTeacherInfo: async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/teacher-info`, {
      credentials: "include",
    });
    if (!res.ok) {
      console.error("Failed to fetch teacher info");
      return;
    }
    const teacherInfo = await res.json();
    set({ teacherInfo, initialized: true });
  },
  refreshTeacherInfo: () => {
    set({ teacherInfo: null, initialized: false });
    set((state) => ({ ...state, fetchTeacherInfo: state.fetchTeacherInfo }));
  },
  setTeacherInfo: (teacherInfo) => set({ teacherInfo, initialized: true }),
}));
