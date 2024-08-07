import Container from "@/components/container";
import Categories from "@/components/navbar/categories";

import { useUser } from "@/contexts/user-context";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <Categories />
      <Container>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Container>
    </>
  );
}
