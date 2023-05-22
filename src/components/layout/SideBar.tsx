import { useState } from "react";
import "./SideBar.css";

interface SidebarProps {
  onItemSelect: (item: string) => void;
}

export default function SideBar({ onItemSelect }: SidebarProps) {
  const links = [
    { title: "Account Details" },
    { title: "Next Lesson Details" },
    { title: "Billing Details" },
    { title: "Lesson Plan" },
    { title: "Leave a Feedback" },
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
            <div
              className={`side-bar-link ${
                link.title === selectedItem ? "side-bar-link-active" : ""
              }`}
              onClick={() => handleClick(link.title)}
            >
              {link.title}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
