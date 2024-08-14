import LandingCard from "./landing-card";

import { useUser } from "@/contexts/user-context";
import HowItWorks from "./how-it-works";
import Container from "@/components/container";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <LandingCard />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Container>
        <HowItWorks />
      </Container>
    </>
  );
}
