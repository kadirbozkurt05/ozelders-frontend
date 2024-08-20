import useLoginModal from "../login/use-login-modal";
import useTeacherRegisterModal from "./use-teacher-register-modal";
import TeacherRegisterForm from "./teacher-register-form";
import Modal from "../modal";

export default function TeacherRegisterModal() {
  const teacherRegisterModal = useTeacherRegisterModal();
  const loginModal = useLoginModal();

  return (
    <Modal
      isOpen={teacherRegisterModal.isOpen}
      onClose={teacherRegisterModal.close}
      title="Öğretmen Kaydı"
      subtitle="Öğretmen olarak kaydolun"
      bodyContent={<TeacherRegisterForm teacherRegisterModal={teacherRegisterModal}/>}
      footerContent={
        <>
          <div className="flex flex-row items-center gap-2">
            <div>Zaten bir hesabınız var mı?</div>
            <div
              className="text-black font-bold cursor-pointer hover:underline"
              onClick={() => {
                teacherRegisterModal.close();
                loginModal.open();
              }}
            >
              Giriş yapın
            </div>
          </div>
        </>
      }
    />
  );
}
