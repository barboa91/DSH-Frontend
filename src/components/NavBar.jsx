import "../style/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* Home Icon */}
        <Link to="/main">
          <button className="nav-button">Home</button>
        </Link>
        {/* Calendar Icon */}
        <Link to="">
          <button className="nav-button">Calendar</button>
        </Link>
        {/* Person Icon */}
        <Link to="">
          <button className="nav-button">Person</button>
        </Link>
        {/* Notification Icon */}
        <Link to="">
          <button className="nav-button">Notify</button>
        </Link>
        {/* Mail Icon */}
        <Link to="">
          <button className="nav-button">Mail</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
