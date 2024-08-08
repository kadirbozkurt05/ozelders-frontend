import useLoginModal from "./use-login-modal";
import useRegisterModal from "../register/use-register-modal";
import LoginModalForm from "./login-modal-form";
import Heading from "@/components/heading";

import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";

export default function LoginModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isVisibile, setIsVisible] = useState(false);

  useEffect(() => {
    if (loginModal.isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [loginModal.isOpen]);

  if (!loginModal.isOpen && !isVisibile) return null;

  return (
    <div
      className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-800/70 transition-opacity duration-700 ${isVisibile ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative w-full md:w-[480px] my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
            <div className="p-1 border-0 hover:opacity-70 transition absolute right-9">
              <IoMdClose
                size={18}
                className="cursor-pointer"
                onClick={() => loginModal.close()}
              />
            </div>
            <div className="text-lg font-semibold">Giris yapin</div>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="flex flex-col gap-4">
              <Heading title="Tekrar hosgeldiniz" subtitle="Giris yapin" />
              <LoginModalForm />
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-6 px-6">
            <div className="flex flex-col items-center gap-2 w-full">
              <Button variant={"outline"} onClick={() => {}}>
                <FcGoogle className="absolute left-6" size={18} />
                Google ile giris yapin
              </Button>
              <Button variant={"outline"} onClick={() => {}}>
                <FcGoogle className="absolute left-6" size={18} />
                Google ile giris yapin
              </Button>
            </div>
            <div className="text-neutral-500 mx-auto mt-4 font-light text-sm">
              <div className="flex flex-row items-center gap-2">
                <div>Bir hesabiniz yok mu?</div>
                <div
                  className="text-black font-bold cursor-pointer hover:underline"
                  onClick={() => {
                    loginModal.close();
                    registerModal.open();
                  }}
                >
                  Kayit olun
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
