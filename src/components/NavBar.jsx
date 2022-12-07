import "../style/navbar.css";
import { Link } from "react-router-dom";
import home from "../assets/icons/home.svg";
import calendar from "../assets/icons/calendar.svg";
import person from "../assets/icons/Profile.svg";
import notifications from "../assets/icons/notifs.svg";
import mail from "../assets/icons/messages.svg";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* Home Icon */}
        <Link to="/main">
          <button className="nav-button">
            <img src={home} alt="home" className="filter-orange" />
          </button>
        </Link>
        {/* Calendar Icon */}
        <Link to="">
          <button className="nav-button">
            <img src={calendar} alt="home" className="filter-orange" />
          </button>
        </Link>
        {/* Person Icon */}
        <Link to="">
          <button className="nav-button">
            <img src={person} alt="home" className="filter-orange" />
          </button>
        </Link>
        {/* Notification Icon */}
        <Link to="">
          <button className="nav-button">
            <img src={notifications} alt="home" className="filter-orange" />
          </button>
        </Link>
        {/* Mail Icon */}
        <Link to="">
          <button className="nav-button">
            <img src={mail} alt="home" className="filter-orange" />
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
