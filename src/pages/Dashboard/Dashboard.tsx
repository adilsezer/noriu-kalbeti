import { useAuthContext } from "../../contexts/AuthContext";
import NavBar from "../../components/layout/NavBar";
import "./Dashboard.css";
import Footer from "../../components/layout/Footer";
import ListCalendlyMeetings from "./components/ListCalendlyMeetings";
import UpcomingCalendlyMeeting from "./components/UpcomingCalendlyMeeting";
import ListUserLessonData from "./components/ListUserLessonData";

export default function Dashboard() {
  const { user } = useAuthContext();

  return (
    <div>
      <NavBar></NavBar>
      <p className="dashboard-title">{`Welcome, ${
        user?.name || user?.email
      }`}</p>
      <div className="dashboard-container">
        <ListUserLessonData></ListUserLessonData>
        <UpcomingCalendlyMeeting userEmail={user?.email ? user.email : ""} />
        <ListCalendlyMeetings userEmail={user?.email ? user.email : ""} />
      </div>
      <Footer></Footer>
    </div>
  );
}
