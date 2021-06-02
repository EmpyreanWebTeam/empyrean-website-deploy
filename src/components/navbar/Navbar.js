import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a href="../">Game</a>
        <a href="../swiper/empyrean">Profile</a>
        <a className="active_link" href="#">
          Stats
        </a>
        <a href="../">Log Out</a>
      </div>
      <div className="navbar__right">
        <a href="../">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="../">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="../">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
