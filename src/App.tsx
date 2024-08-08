import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import TeacherRegister from "./pages/teacher-register/teacher-register";

import LoginModal from "./components/modals/login/login-modal";
import RegisterModal from "./components/modals/register/register-modal";
import TermsOfService from "./pages/terms/termsOfService";

export default function App() {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={2500} hideProgressBar />
      <LoginModal />
      <RegisterModal />
      <Router>
        <Navbar />
        <div className="w-full min-h-screen pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teacher-register" element={<TeacherRegister />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
