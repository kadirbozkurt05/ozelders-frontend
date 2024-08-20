import useRegisterModal from "./use-register-modal";
import RegisterModalForm from "./register-modal-form";
import useLoginModal from "../login/use-login-modal";
import Modal from "../modal";

export default function RegisterModal() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();


  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={registerModal.close}
      title="Hosgeldiniz"
      subtitle="Kayit olun"
      bodyContent={<RegisterModalForm />}
      footerContent={
        <div className="text-neutral-500 mx-auto mt-4 font-light text-sm">
          <div className="flex flex-row items-center gap-2">
            <div>Bir hesabiniz var mi?</div>
            <div
              className="text-black font-bold cursor-pointer hover:underline"
              onClick={() => {
                registerModal.close();
                loginModal.open();
              }}
            >
              Giris yapin
            </div>
          </div>
        </div>
      }
    />
  );
}


{/* <div
      className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-800/70 transition-opacity duration-700 ${isVisibile ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative w-full md:w-[480px] my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
            <div className="p-1 border-0 hover:opacity-70 transition absolute right-9">
              <IoMdClose
                size={18}
                className="cursor-pointer"
                onClick={() => registerModal.close()}
              />
            </div>
            <div className="text-lg font-semibold">Kayit olun</div>
          </div>
          <div className="relative p-6 pb-0 flex-auto">
            <div className="flex flex-col gap-4">
              <Heading title="Hosgeldiniz" subtitle="Kayit olun" />
              <RegisterModalForm />
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-6 px-6">
            <div className="text-neutral-500 mx-auto mt-4 font-light text-sm">
              <div className="flex flex-row items-center gap-2">
                <div>Bir hesabiniz var mi?</div>
                <div
                  className="text-black font-bold cursor-pointer hover:underline"
                  onClick={() => {
                    registerModal.close();
                    loginModal.open();
                  }}
                >
                  Giris yapin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}