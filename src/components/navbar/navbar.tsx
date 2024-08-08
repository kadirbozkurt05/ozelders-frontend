import Container from "../container";
import ProfileMenu from "./profile-menu";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="absolute w-full z-20 shadow-sm border-b h-16">
      <Container className="max-w-[1600px] h-full flex flex-row items-center justify-between">
        <Logo />
        <div></div>
        <ProfileMenu />
      </Container>
    </nav>
  );
}
