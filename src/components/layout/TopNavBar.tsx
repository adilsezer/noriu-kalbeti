import "./TopNavBar.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import appLogo from "../../assets/images/app-logo.png";
import { displayToast } from "../../utils/toast";

interface NavItem {
  key: string;
  path: string;
  label: string;
  onClick?: () => void;
}

export default function TopNavBar() {
  const { isAuthenticated, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
    displayToast("Successfully Logged Out", { type: "info" });
  };

  const generalNavItems: NavItem[] = [
    { key: "home", path: "/", label: "Home" },
    {
      key: "book-lesson",
      path: "/book-lesson",
      label: "Book a Lesson",
    },
    { key: "faq", path: "/faq", label: "FAQ" },
    { key: "contact", path: "/contact", label: "Contact" },
  ];

  const authenticatedNavItems: NavItem[] = [
    { key: "dashboard", path: "/dashboard", label: "Dashboard" },
    { key: "logout", path: "/", label: "Logout", onClick: handleLogout },
  ];

  const unauthenticatedNavItems: NavItem[] = [
    { key: "signup", path: "/signup", label: "Sign Up" },
    { key: "login", path: "/login", label: "Login" },
  ];

  const extraNavItemsToRender: NavItem[] = isAuthenticated
    ? authenticatedNavItems
    : unauthenticatedNavItems;

  return (
    <header className="header">
      <div className="left">
        <NavLink to="/">
          <img src={appLogo} alt="Logo" className="app-logo" />
        </NavLink>
      </div>
      <div className="mid">
        <ul className="top-navbar">
          {generalNavItems.map(({ key, path, label, onClick }) => (
            <li key={key}>
              <NavLink to={path} onClick={onClick}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <ul className="top-navbar">
          {extraNavItemsToRender.map(({ key, path, label, onClick }) => (
            <li key={key}>
              <NavLink to={path} onClick={onClick}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
