import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import TeacherRegister from "./pages/teacher-register/teacher-register";
import LoginModal from "./components/modals/login/login-modal";
import RegisterModal from "./components/modals/register/register-modal";
import TermsOfService from "./pages/terms/termsOfService";
import PrivacyPolicy from "./pages/privacy/privacy-policy";
import ReturnPolicy from "./pages/return/return-conditions";
import SalesContract from "./pages/sales-contract/sales-contract";
import Footer from "./components/footer/footer";
import RegisterTeacher from "./pages/register-teacher/register-teacher.tsx";
import TeacherRegisterModal from "./components/modals/teacher-register/teacher-register-modal.tsx";
import UserProvider from "./contexts/user-context.tsx";
import ScrollToTop from "./components/scroll-to-top.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TeacherInfoInit from "./contexts/teacher-info-init.tsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <ToastContainer position="top-left" autoClose={3000} />
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <TeacherInfoInit />
          <Router>
            <LoginModal />
            <RegisterModal />
            <TeacherRegisterModal />
            <ScrollToTop />
            <Navbar />
            <div className="w-full min-h-screen pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ogretmen-kaydi" element={<TeacherRegister />} />
                <Route
                  path="/sartlar-ve-kosullar"
                  element={<TermsOfService />}
                />
                <Route
                  path="/gizlilik-sozlesmesi"
                  element={<PrivacyPolicy />}
                />
                <Route path="/iade-sartlari" element={<ReturnPolicy />} />
                <Route
                  path="/mesafeli-satis-sozlesmesi"
                  element={<SalesContract />}
                />
                <Route path="/ogretmen-kayit" element={<RegisterTeacher />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </UserProvider>
      </QueryClientProvider>
    </div>
  );
}
