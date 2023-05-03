import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./SideBar.css";

interface SidebarProps {
  onItemSelect: (item: string) => void;
}

export default function SideBar({ onItemSelect }: SidebarProps) {
  const links = [
    { title: "Account Details", path: "" },
    { title: "Next Lesson Details", path: "" },
    { title: "Billing Details", path: "" },
    { title: "Lesson Plan", path: "" },
    { title: "Book a Lesson", path: "" },
    { title: "FAQ", path: "" },
    { title: "Leave a Feedback", path: "" },
  ];

  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (item: string) => {
    setSelectedItem(item);
    onItemSelect(item);
  };

  return (
    <nav className="side-bar">
      <ul className="side-bar-links">
        {links.map((link) => (
          <li key={link.title}>
            <NavLink
              to={link.path}
              className={`side-bar-link ${
                link.title === selectedItem ? "side-bar-link-active" : ""
              }`}
              onClick={() => {
                setSelectedItem("");
                handleClick(link.title);
              }}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
