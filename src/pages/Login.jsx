import { useState, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogIn, FileText } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // clear error when typing
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // reset previous error
    setError("");
    try {
      const res = await API.post("/auth/login", form);
      login(res.data.user, res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error logging in");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1f1f1f] text-white flex flex-col justify-center items-center px-4">
      <div className="bg-[#1f1f1f] border border-[#065a60] rounded-lg shadow-md p-10 flex flex-col items-center 
                      max-w-md w-full hover:shadow-[0_0_15px_#06B6D4] transition-all duration-500">
        
        <h1 className="text-4xl font-bold text-[#00bfa5] drop-shadow-[0_0_10px_#06B6D4] mb-4 text-center">
          My Notes App
        </h1>

        <FileText className="w-20 h-20 text-[#00ffe0] drop-shadow-[0_0_15px_#00ffe0] mb-6 animate-pulse" />

        <p className="text-gray-300 text-center mb-4">
          Login to access your notes.
        </p>

        {/* error inline */}
        {error && (
          <p className="text-red-500 text-sm mb-2 text-center">
            {error}
          </p>
        )}

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md p-3 bg-[#212f45] text-white border border-[#065a60]
                       focus:outline-none focus:ring-2 focus:ring-[#00bfa5] placeholder-gray-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-md p-3 bg-[#212f45] text-white border border-[#065a60]
                       focus:outline-none focus:ring-2 focus:ring-[#00bfa5] placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-md bg-[#006466] text-[#00ffe0] font-medium
                       hover:shadow-[0_0_10px_#00ffe0] transition"
          >
            Login
          </button>
        </form>
      </div>

      <p className="text-gray-500 mt-6 text-sm">
        &copy; 2025 My Notes App. All rights reserved.
      </p>
    </div>
  );
}
