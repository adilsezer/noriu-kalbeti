import { NavLink } from "react-router-dom";
import "../Admin.css";

interface AdminTaskListProps {
  onItemSelect: (item: string) => void;
}

export default function AdminTaskList({ onItemSelect }: AdminTaskListProps) {
  const taskList = [
    { title: "Signup User", path: "" },
    { title: "Set Next Lesson Details", path: "" },
    { title: "Add an Announcement", path: "" },
    { title: "Upload a Lesson Plan File", path: "" },
  ];

  const handleClick = (item: string) => {
    onItemSelect(item);
  };

  return (
    <nav>
      <ul>
        {taskList.map((task) => (
          <li key={task.title}>
            <NavLink
              to={task.path}
              onClick={() => {
                handleClick(task.title);
              }}
            >
              {task.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
