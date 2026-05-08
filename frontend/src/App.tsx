import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import AuthForm from "./pages/Auth";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { Navigate } from "react-router";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthForm />}>
          {/* Redirect / -> /signup */}
          <Route index element={<Navigate to="signup" replace />} />
          
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
