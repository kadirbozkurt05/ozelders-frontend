import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <img
      alt="logo"
      className="cursor-pointer hidden md:block"
      height={100}
      width={100}
      src="/logo.svg"
      onClick={() => navigate("/")}
    />
  );
}
