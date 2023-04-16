import { ref, getDatabase, get, child } from "firebase/database";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";

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

  const listItems = Object.entries(usersDBEntries).map((userDBEntry, index) => (
    <li key={index}>{userDBEntry[0] + " " + userDBEntry[1]}</li>
  ));

  return <ul>{listItems}</ul>;
}
