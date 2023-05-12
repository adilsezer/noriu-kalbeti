import { ref, getDatabase, get, child } from "firebase/database";
import { useState, useEffect, useRef } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import "../Dashboard.css";
import getUpcomingLesson from "./GetUpcomingLesson";
import { ClipLoader } from "react-spinners";
import Button from "../../../components/ui/Button";
import sendEmail from "../../../utils/emailSender";

type usersDBEntry = {
  key: string;
  value: any;
};

type usersDBType = usersDBEntry[];

interface Meeting {
  uri: string;
  name: string;
  event_type: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}

export default function NextLessonContent() {
  const { user } = useAuthContext();
  const userEmail = user?.email || "";
  const [usersDBEntries, setUsersDBEntries] = useState<usersDBType>([]);
  const [upcomingMeeting, setUpcomingMeeting] = useState<Meeting>();
  const emailForm = useRef<HTMLFormElement>(null);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await sendEmail({
        message: message,
        userEmail: user?.email || "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const dbRef = ref(getDatabase());
  useEffect(() => {
    get(child(dbRef, `users/${user?.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersDBData = snapshot.val();
          const usersDBEntriesArray = Object.entries(usersDBData).sort(
            (a, b) => {
              return b[0].localeCompare(a[0]);
            }
          );

          const sortedUsersDBEntries: usersDBType = usersDBEntriesArray.map(
            ([key, value]) => ({ key, value })
          );
          setUsersDBEntries(sortedUsersDBEntries);
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef, user?.uid]);

  const formatTitle = (text: string): string =>
    text.replace(/-/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());

  useEffect(() => {
    getUpcomingLesson(userEmail).then((meeting) => {
      if (meeting) {
        setUpcomingMeeting(meeting);
      }
    });
  }, [userEmail]);

  const listItems = (
    <table>
      <tbody>
        <tr>
          <th>Next Lesson Date</th>
          <td>
            {upcomingMeeting?.start_time
              ? new Date(upcomingMeeting.start_time).toLocaleString()
              : "No Lesson"}
          </td>
        </tr>
        {usersDBEntries.map(
          (userDBEntry, index) =>
            userDBEntry.key !== "userName" && (
              <tr key={index}>
                <th>{formatTitle(userDBEntry.key)}</th>
                <td>{userDBEntry.value.toString()}</td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );

  return (
    <div>
      <h1 className="dashboard-text">Next Lesson Details</h1>
      <p className="dashboard-text">
        {upcomingMeeting?.start_time
          ? Math.floor(
              (new Date(upcomingMeeting.start_time).getTime() -
                new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            ) + " days left until the next lesson! Are you getting ready?"
          : "No Lesson"}
      </p>

      {listItems}
      <br />
      <form ref={emailForm} onSubmit={handleSubmit}>
        <p className="dashboard-text">
          Send a message to your teacher for the next lesson
        </p>

        <textarea
          id="message"
          name="message"
          required
          rows={10}
          value={
            message.endsWith("Sent by: " + user?.email || "")
              ? message
              : message + "\nSent by: " + user?.email
          }
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          style={{
            resize: "none",
            padding: "10px",
            width: "75%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            fontFamily: "inherit",
            fontSize: "inherit",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "20px",
          }}
        />

        <div className="dashboard-text">
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="button-component"
          >
            {loading ? <ClipLoader size={25} color="#FFF" /> : "Send Email"}
          </Button>
        </div>
      </form>
    </div>
  );
}
