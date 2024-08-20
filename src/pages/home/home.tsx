import LandingCard from "./landing-card";

import { useUser } from "@/contexts/user-context";
import HowItWorks from "./how-it-works";
import Container from "@/components/container";
import { useTeacherInfoStore } from "@/contexts/teacher-info";

export default function Home() {
  const { user } = useUser();
  const { teacherInfo } = useTeacherInfoStore();

  return (
    <>
      <LandingCard />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(teacherInfo, null, 2)}</pre>
      <Container>
        <HowItWorks />
      </Container>
    </>
  );
}
