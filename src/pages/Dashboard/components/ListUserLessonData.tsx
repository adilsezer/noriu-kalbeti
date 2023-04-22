import { ref, getDatabase, get, child } from "firebase/database";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import "../Dashboard.css";

type usersDBType = {
  nextLessonDate: string;
  lessonTopic: string;
  assignedHW: string;
};

export default function ListUserLessonData() {
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

  const formatTitle = (text: string): string =>
    text.replace(/-/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());

  const listItems = Object.entries(usersDBEntries).map((userDBEntry, index) => (
    <p>{formatTitle(userDBEntry[0]) + ": " + userDBEntry[1]}</p>
  ));

  return (
    <div className="dashboard-card">
      <h1 className="dashboard-title">Lesson Details</h1>
      {listItems}
    </div>
  );
}
