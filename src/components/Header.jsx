import { NavLink } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="nav-left">
          <NavLink to="/" className="nav-link" activeclassname="active">
            Trang Chủ
          </NavLink>
          <NavLink to="/favorites" className="nav-link" activeclassname="active">
            Khóa học Yêu Thích
          </NavLink>
        </div>
        <div className="nav-right">
          <button className="login-button">Đăng nhập</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
