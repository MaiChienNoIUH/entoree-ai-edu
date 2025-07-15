import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users";
import "../css/LoginPage.css";
import loginBanner from "../assets/image/login-banner.png";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("nomai6789@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (matchedUser) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      toast.info(`Chào mừng ${matchedUser.name} login.`,{
        position: "top-right",
      });
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    } else {
      setError("Email hoặc mật khẩu không đúng.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src={loginBanner} alt="Banner" className="login-banner" />
      </div>
      <div className="login-right">
        <h1 className="logo">antoree</h1>
        <h2>Login</h2>
        <label>Email hoặc số điện thoại</label>
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mật khẩu</label>
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
