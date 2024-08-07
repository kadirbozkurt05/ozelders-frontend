import Container from "@/components/container";
import Categories from "@/components/navbar/categories";
import LandingCard1 from "@/components/ui/landingCard1";

import { useUser } from "@/contexts/user-context";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <Categories />
      <Container>
        <LandingCard1 />
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Container>
    </>
  );
}
