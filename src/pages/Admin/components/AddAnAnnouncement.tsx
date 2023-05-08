import { useEffect, useRef, useState } from "react";
import Button from "../../../components/ui/Button";
import { getDatabase, set, ref, get } from "firebase/database";
import { displayToast } from "../../../utils/toast";

interface Announcement {
  text: string;
  date: string;
}

export default function AddAnAnnouncement() {
  const textareaAnnouncementRef = useRef<HTMLTextAreaElement>(null);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [lastTwoAnnouncements, setLastTwoAnnouncements] = useState<
    Announcement[] | null
  >(null);

  const currentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };

  const addAnnouncement = async () => {
    const db = getDatabase();
    console.log(lastTwoAnnouncements);
    await set(ref(db, "announcements/"), {
      announcement1: { text: newAnnouncement, date: currentDate() },
      announcement2: {
        text: lastTwoAnnouncements?.[0]?.text ?? "",
        date: lastTwoAnnouncements?.[0]?.date ?? "",
      },
      announcement3: {
        text: lastTwoAnnouncements?.[1]?.text ?? "",
        date: lastTwoAnnouncements?.[1]?.date ?? "",
      },
    });

    setLastTwoAnnouncements([
      { text: newAnnouncement, date: currentDate() },
      ...(lastTwoAnnouncements ?? []).slice(0, 1),
    ]);

    displayToast("Announcement Added", { type: "success" });

    setNewAnnouncement("");
    if (textareaAnnouncementRef.current) {
      textareaAnnouncementRef.current.value = "";
    }
  };

  useEffect(() => {
    getLastTwoAnnouncements().then((announcements) => {
      setLastTwoAnnouncements(announcements);
    });
  }, []);

  const getLastTwoAnnouncements = async (): Promise<Announcement[] | null> => {
    const db = getDatabase();
    const refPath = "announcements/";

    try {
      const snapshot = await get(ref(db, refPath));
      if (snapshot.exists()) {
        return [
          {
            text: snapshot.val().announcement1.text,
            date: snapshot.val().announcement1.date,
          },
          {
            text: snapshot.val().announcement2.text,
            date: snapshot.val().announcement2.date,
          },
        ];
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewAnnouncement(e.target.value);
  };

  return (
    <div>
      <h1>Add An Announcement</h1>
      <p>
        You can use this page to add an announcement to the dashboard page of
        the website.
      </p>
      <textarea
        id="textarea-announcement"
        name="textarea-announcement"
        ref={textareaAnnouncementRef}
        placeholder="Enter An Announcement"
        onChange={handleOnChange}
        style={{
          resize: "none",
          padding: "10px",
          width: "50%",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
          fontFamily: "inherit",
          fontSize: "inherit",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          height: "150px",
        }}
      />
      <Button className="button-component" onClick={addAnnouncement}>
        Submit
      </Button>
    </div>
  );
}
