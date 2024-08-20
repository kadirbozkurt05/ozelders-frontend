import { useEffect } from "react";
import { useTeacherInfoStore } from "./teacher-info";
import { useUser } from "./user-context";

export default function TeacherInfoInit() {
  const { user } = useUser();
  const { fetchTeacherInfo, initialized } = useTeacherInfoStore();

  useEffect(() => {
    if (!initialized) {
      fetchTeacherInfo();
    }
  }, [initialized, fetchTeacherInfo, user]);

  return null;
}
