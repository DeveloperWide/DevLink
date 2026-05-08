import { Outlet } from "react-router";

export default function AuthForm() {

  /* const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      const { email, password } = data;
      axiosInstance
        .post("/auth/login", { email, password })
        .then((res) => {
          console.log(res);
          setData({ ...data, email: "", password: "" });
          toast.success(
            res.data.message || "Logged in successfully! Welcome back.",
          );
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            err.response.data.message ||
              "Login failed! Please check your credentials.",
          );
        });
    } else {
      axiosInstance
        .post(`/auth/register`, data)
        .then((res) => {
          console.log(res);
          setData({ ...data, name: "", email: "", password: "" });
          toast.success(
            res.data.message || "Registered successfully! Please login.",
          );
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            err.response.data.message ||
              "Registration failed! Please try again.",
          );
        });
    }
  }; */

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-800 px-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 flex gap-y-3 items-center justify-center flex-col">
        <Outlet />
      </div>
    </div>
  );
}