import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <img
      alt="logo"
      className="cursor-pointer"
      height={100}
      width={100}
      src="https://wilsonclinic.com/wp-content/uploads/2018/12/placeholder-logo-2.png"
      onClick={() => navigate("/")}
    />
  );
}
