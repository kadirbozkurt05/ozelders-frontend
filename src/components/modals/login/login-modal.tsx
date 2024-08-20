import useLoginModal from "./use-login-modal";
import useRegisterModal from "../register/use-register-modal";
import LoginModalForm from "./login-modal-form";
import useTeacherRegisterModal from "../teacher-register/use-teacher-register-modal";
import Modal from "../modal";

export default function LoginModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const teacherRegisterModal = useTeacherRegisterModal();

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.close}
      title="Tekrar hosgeldiniz"
      subtitle="Giris yapin"
      bodyContent={<LoginModalForm />}
      firstLabel="Google ile giris yapin"
      firstAction={() => {}}
      secondLabel="Facebook ile giris yapin"
      secondAction={() => {
        loginModal.close();
        registerModal.open();
      }}
      footerContent={
        <>
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
          <div className="flex flex-row items-center gap-2 mt-2">
            <div>Ders vermek mi istiyorsunuz ?</div>
            <div
              className="text-black font-bold cursor-pointer hover:underline"
              onClick={() => {
                loginModal.close();
                teacherRegisterModal.open();
              }}
            >
              Buraya tiklayin
            </div>
          </div>
        </>
      }
    />
  );
}
