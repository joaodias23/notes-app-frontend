import { useState, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      login(res.data.user, res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <AuthForm
      title="Register"
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      fields={[
        { name: "username", placeholder: "Username" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "password", type: "password", placeholder: "Password" },
      ]}
    />
  );
}
