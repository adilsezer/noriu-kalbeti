import { useState } from "react";
import TopNavBar from "../../components/layout/TopNavBar";
import Footer from "../../components/layout/Footer";
import AdminTaskList from "./components/AdminTaskList";
import SignUpUser from "./components/SignUpUser";
import SetNextLessonDetails from "./components/SetNextLessonDetails";
import AddAnAnnouncement from "./components/AddAnAnnouncement";
import UploadALessonPlanFile from "./components/UploadALessonPlanFile";
import AdminWelcome from "./components/AdminWelcome";

export default function AdminPage() {
  const [adminContentToRender, setAdminContentToRender] =
    useState<JSX.Element>();

  if (!adminContentToRender) {
    setAdminContentToRender(<AdminWelcome />);
  }

  const handleAdminTaskListClick = (item: string) => {
    switch (item) {
      case "Signup User":
        setAdminContentToRender(<SignUpUser />);
        break;
      case "Set Next Lesson Details":
        setAdminContentToRender(<SetNextLessonDetails />);
        break;
      case "Add an Announcement":
        setAdminContentToRender(<AddAnAnnouncement />);
        break;
      case "Upload a Lesson Plan File":
        setAdminContentToRender(<UploadALessonPlanFile />);
        break;
      default:
        setAdminContentToRender(<AdminWelcome />);
    }
  };

  return (
    <div>
      <TopNavBar />
      <h1 className="center-text">Admin Page</h1>
      <div className="admin-container">
        <div className="admin-left-list">
          <AdminTaskList onItemSelect={handleAdminTaskListClick} />
        </div>
        <div className="admin-content">{adminContentToRender}</div>
      </div>
      <Footer />
    </div>
  );
}
