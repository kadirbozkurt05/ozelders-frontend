import Avatar from "./avatar";
import useLoginModal from "../modals/login/use-login-modal";

import { useCallback, useState } from "react";
import { useUser } from "@/contexts/user-context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

export default function ProfileMenu() {
  const navigate = useNavigate();
  const loginModal = useLoginModal();
  const { user, refreshUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  async function handleLogout() {
    const response = await fetch(`/api/auth/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const resData = await response.json();
      return toast.error(resData.error);
    }

    toast.info("Logged out successfully.");
    navigate("/");
    refreshUser();
  }

  return (
    <div className="flex flex-row gap-3 relative items-center">
      <div className="block cursor-pointer" onClick={handleOpen}>
        {user ? (
          <div className="flex flex-row items-center gap-1 p-2 rounded-sm hover:shadow-md">
            <Avatar />
            <IoIosMenu className="w-6 h-6" />
          </div>
        ) : (
          <div className="flex flex-row items-center text-sm gap-2 lg:gap-4">
            <div
              className="p-1 lg:px-4 lg:py-2 hover:bg-accent"
              onClick={() => navigate("/ogretmen-kaydi")}
            >
              Ders verin
            </div>
            <div
              className="p-1 lg:px-4 lg:py-2 hover:bg-accent"
              onClick={() => loginModal.open()}
            >
              Giris yapin
            </div>
          </div>
        )}
      </div>
      {isOpen && user && (
        <div className="absolute w-64 bg-white right-0 top-8 lg:top-10 rounded-sm shadow-md overflow-hidden z-50 text-black p-5 text-sm">
          <div className="flex flex-col cursor-pointer">
            <ProfileMenuItem onClick={() => handleLogout()} label="Logout" />
            <ProfileMenuItem onClick={() => handleLogout()} label="Logout" />
            <ProfileMenuItem onClick={() => handleLogout()} label="Logout" />
            <ProfileMenuItem onClick={() => handleLogout()} label="Logout" />
            <ProfileMenuItem onClick={() => handleLogout()} label="Logout" />
          </div>
        </div>
      )}
    </div>
  );
}

type TProfileMenuItem = {
  onClick: () => void;
  label: string;
};
function ProfileMenuItem({ onClick, label }: TProfileMenuItem) {
  return (
    <div className="p-3 hover:bg-gray-100 transition" onClick={onClick}>
      {label}
    </div>
  );
}
