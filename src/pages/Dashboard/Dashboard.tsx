import TopNavBar from "../../components/layout/TopNavBar";
import "./Dashboard.css";
import Footer from "../../components/layout/Footer";
import SideBar from "../../components/layout/SideBar";
import NextLessonContent from "./components/NextLessonContent";
import AccountDetails from "./components/AccountDetails";
import BillingDetails from "./components/BillingDetails";
import LessonPlans from "./components/LessonPlans";
import InlineComponent from "./components/BookLesson";
import FAQ from "./components/FAQ";
import LeaveFeedback from "./components/LeaveFeedback";
import Announcements from "./components/Announcements";
import DashboardWelcome from "./components/DashboardWelcome";
import { useState } from "react";

export default function Dashboard() {
  const [sideContentToRender, setSideContentToRender] = useState<JSX.Element>(
    <DashboardWelcome />
  );

  const componentMapping: { [key: string]: JSX.Element } = {
    "Account Details": <AccountDetails />,
    "Next Lesson Details": <NextLessonContent />,
    "Billing Details": <BillingDetails />,
    "Lesson Plan": <LessonPlans />,
    "Book a Lesson": <InlineComponent />,
    FAQ: <FAQ />,
    "Leave a Feedback": <LeaveFeedback />,
  };

  const handleSideBarClick = (item: string) => {
    setSideContentToRender(componentMapping[item] || <DashboardWelcome />);
  };

  return (
    <div>
      <TopNavBar />
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <SideBar onItemSelect={handleSideBarClick} />
        </div>
        <div className="dashboard-content">{sideContentToRender}</div>
        <div className="dashboard-announcements">
          <Announcements />
        </div>
      </div>
      <Footer />
    </div>
  );
}
