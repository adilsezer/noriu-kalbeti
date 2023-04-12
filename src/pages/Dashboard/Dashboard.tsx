import { getDatabase, ref, child, get } from "firebase/database";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import NavBar from "../../components/layout/NavBar";
import "./Dashboard.css";
import Footer from "../../components/layout/Footer";
import CalendlyMeetings from "./components/CalendlyMeetings";
import UpcomingCalendlyMeeting from "./components/UpcomingCalendlyMeeting";

type usersDBType = {
  nextLessonDate: string;
  lessonTopic: string;
  assignedHW: string;
};

export default function Dashboard() {
  const { user } = useAuthContext();

  const [usersDBEntries, setUsersDBEntries] = useState<usersDBType[]>([]);

  const dbRef = ref(getDatabase());
  useEffect(() => {
    get(child(dbRef, `users/${user?.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUsersDBEntries(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef, user?.uid]);

  const listItems = Object.entries(usersDBEntries).map((userDBEntry, index) => (
    <li key={index}>{userDBEntry[0] + " " + userDBEntry[1]}</li>
  ));

  return (
    <div>
      <NavBar></NavBar>
      <p>{`Welcome, ${user?.name || user?.email}`}</p>
      <ul>{listItems}</ul>
      <UpcomingCalendlyMeeting userEmail={user?.email ? user.email : ""} />
      <CalendlyMeetings userEmail={user?.email ? user.email : ""} />
      <Footer></Footer>
    </div>
  );
}
