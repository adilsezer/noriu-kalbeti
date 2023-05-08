import { getDatabase, get, ref } from "firebase/database";
import { useState, useEffect } from "react";

interface Announcement {
  text: string;
  date: string;
}

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[] | null>(
    null
  );

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const data = await getAnnouncements();
      setAnnouncements(data);
    };
    fetchAnnouncements();
  }, []);

  const getAnnouncements = async (): Promise<Announcement[] | null> => {
    const db = getDatabase();
    const refPath = "announcements/";

    try {
      const snapshot = await get(ref(db, refPath));
      if (snapshot.exists()) {
        const announcement1 = snapshot.val().announcement1;
        const announcement2 = snapshot.val().announcement2;
        const announcement3 = snapshot.val().announcement3;
        return [
          { text: announcement1.text, date: announcement1.date },
          { text: announcement2.text, date: announcement2.date },
          { text: announcement3.text, date: announcement3.date },
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

  return (
    <div>
      <h1 className="dashboard-text">Announcements</h1>
      {announcements &&
        announcements.map((announcement, index) => (
          <div className="announcement-text" key={index}>
            <p>
              {announcement.date} - {announcement.text}
            </p>
          </div>
        ))}
    </div>
  );
}
