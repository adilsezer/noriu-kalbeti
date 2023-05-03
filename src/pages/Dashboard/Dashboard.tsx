import TopNavBar from "../../components/layout/TopNavBar";
import "./Dashboard.css";
import Footer from "../../components/layout/Footer";
import SideBar from "../../components/layout/SideBar";
import { useState } from "react";
import NextLessonContent from "./components/NextLessonContent";
import AccountDetails from "./components/AccountDetails";
import BillingDetails from "./components/BillingDetails";
import LessonPlans from "./components/LessonPlans";
import InlineComponent from "./components/BookLesson";
import FAQ from "./components/FAQ";
import LeaveFeedback from "./components/LeaveFeedback";
import Announcements from "./components/Announcements";
import DashboardWelcome from "./components/DashboardWelcome";

export default function Dashboard() {
  const [sideContentToRender, setSideContentToRender] = useState<JSX.Element>();

  if (!sideContentToRender) {
    setSideContentToRender(<DashboardWelcome />);
  }

  const handleSideBarClick = (item: string) => {
    switch (item) {
      case "Account Details":
        setSideContentToRender(<AccountDetails />);
        break;
      case "Next Lesson Details":
        setSideContentToRender(<NextLessonContent />);
        break;
      case "Billing Details":
        setSideContentToRender(<BillingDetails />);
        break;
      case "Lesson Plan":
        setSideContentToRender(<LessonPlans />);
        break;
      case "Book a Lesson":
        setSideContentToRender(<InlineComponent />);
        break;
      case "FAQ":
        setSideContentToRender(<FAQ />);
        break;
      case "Leave a Feedback":
        setSideContentToRender(<LeaveFeedback />);
        break;
      default:
        setSideContentToRender(<DashboardWelcome />);
    }
  };

  return (
    <div>
      <TopNavBar></TopNavBar>
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <SideBar onItemSelect={handleSideBarClick}></SideBar>
        </div>
        <div className="dashboard-content">{sideContentToRender}</div>
        <div className="dashboard-announcements">
          <Announcements />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
