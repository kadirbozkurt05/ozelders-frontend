import LandingCard from "./landing-card";

import { useUser } from "@/contexts/user-context";
import HowItWorks from "./how-it-works";
import Container from "@/components/container";
import { useTeacherInfoStore } from "@/contexts/teacher-info";
import FindTeacher from "./find-teacher";
import MeetTeachers from "./meet-teachers";

export default function Home() {
  const { user } = useUser();
  const { teacherInfo } = useTeacherInfoStore();

  return (
    <>
        <FindTeacher />
      <LandingCard />
      <MeetTeachers />
      <Container>
        <HowItWorks />
      </Container>
    </>
  );
}
