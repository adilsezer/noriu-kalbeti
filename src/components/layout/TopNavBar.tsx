import "./TopNavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import appLogo from "../../assets/images/app-logo.png";
import { displayToast } from "../../utils/toast";

interface NavItem {
  key: string;
  path?: string;
  label: string;
  onClick?: () => void;
}

export default function TopNavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logout();
      displayToast("Successfully Logged Out", { type: "info" });
      navigate("/");
    } catch (error) {
      displayToast("Failed to Logout", { type: "error" });
    }
  };

  const generalNavItems: NavItem[] = [
    { key: "home", path: "/", label: "Home" },
    { key: "book-lesson", path: "/book-lesson", label: "Book a Lesson" },
    { key: "faq", path: "/faq", label: "FAQ" },
    { key: "contact", path: "/contact", label: "Contact" },
  ];

  const authenticatedNavItems: NavItem[] = [
    { key: "dashboard", path: "/dashboard", label: "Dashboard" },
    { key: "logout", label: "Logout", onClick: handleLogout },
  ];

  const unauthenticatedNavItems: NavItem[] = [
    { key: "signup", path: "/signup", label: "Sign Up" },
    { key: "login", path: "/login", label: "Login" },
  ];

  const extraNavItemsToRender: NavItem[] = isAuthenticated
    ? authenticatedNavItems
    : unauthenticatedNavItems;

  const NavItemComponent = ({ key, path, label, onClick }: NavItem) => (
    <li key={key}>
      {onClick ? (
        <button onClick={onClick} className="nav-button">
          {label}
        </button>
      ) : (
        <NavLink to={path || ""} aria-label={label}>
          {label}
        </NavLink>
      )}
    </li>
  );

  return (
    <header className="header">
      <nav className="left">
        <NavLink to="/">
          <img src={appLogo} alt="Logo" className="app-logo" />
        </NavLink>
      </nav>
      <nav className="mid">
        <ul className="top-navbar">
          {generalNavItems.map((item) => NavItemComponent(item))}
        </ul>
      </nav>
      <nav className="right">
        <ul className="top-navbar">
          {extraNavItemsToRender.map((item) => NavItemComponent(item))}
        </ul>
      </nav>
    </header>
  );
}
