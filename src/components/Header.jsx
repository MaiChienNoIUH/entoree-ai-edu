import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo.png";
import "../css/Header.css";

const Header = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="banner-logo" />
          <NavLink to="/" className="nav-link" activeclassname="active">
            Trang Chủ
          </NavLink>
          <NavLink
            to="/favorites"
            className="nav-link"
            activeclassname="active"
          >
            Khóa học Yêu Thích
          </NavLink>
        </div>

        <div className="nav-right">
          {currentUser ? (
            <div className="user-menu">
              <div className="user-info">
                <img
                  src={currentUser.avatar}
                  alt="avatar"
                  className="user-avatar"
                />
                <span className="user-name">{currentUser.name}</span>
              </div>

              <div className="dropdown-menu">
                <div className="dropdown-arrow"></div>
                <button onClick={() => navigate("/")}>Tài Khoản Của Tôi</button>
                <button onClick={() => navigate("/history")}>
                  Lịch sử xem
                </button>
                <button onClick={handleLogout}>Đăng Xuất</button>
              </div>
            </div>
          ) : (
            <button className="login-button" onClick={handleLogin}>
              Đăng nhập
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
