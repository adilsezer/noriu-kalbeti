import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import appLogo from "../../assets/images/app-logo.png";
import { displayToast } from "../../utils/toast";
export default function Navbar() {
  const { isAuthenticated, logout } = useAuthContext();
  const handleLogout = () => {
    logout();
    displayToast("Successfully Logged Out", { type: "info" });
  };

  return (
    <header className="header">
      {isAuthenticated ? (
        <div>
          <div className="left">
            <Link to="/">
              <img src={appLogo} alt="Logo" className="app-logo" />
            </Link>
          </div>
          <div className="mid">
            <ul className="navbar">
              <li key="home">
                <Link to="/">Home</Link>
              </li>
              <li key="lesson-plans">
                <Link to="/lesson-plans">Lesson Plans</Link>
              </li>
              <li key="book-lesson">
                <Link to="/book-lesson">Book a Lesson</Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="navbar">
              <li key="dashboard">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li key="update-profile">
                <Link to="/update-profile">Update Profile</Link>
              </li>
              <li key="logout" onClick={handleLogout}>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="left">
            <Link to="/">
              <img src={appLogo} alt="Logo" className="app-logo" />
            </Link>
          </div>
          <div className="mid">
            <ul className="navbar">
              <li key="home">
                <Link to="/">Home</Link>
              </li>
              <li key="why-noriu-kalbeti">
                <Link to="/why-noriu-kalbeti">Why Noriu Kalbeti?</Link>
              </li>
              <li key="book-lesson">
                <Link to="/book-lesson">Book a Lesson</Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="navbar">
              <li key="signup">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li key="login">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
