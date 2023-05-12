import { getDatabase, get, ref } from "firebase/database";
import { useState, useEffect } from "react";

interface Announcement {
  text: string;
  date: string;
}

const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[] | null>(
    null
  );

  useEffect(() => {
    const getAnnouncements = async (): Promise<Announcement[] | null> => {
      const db = getDatabase();
      const refPath = "announcements/";

      try {
        const snapshot = await get(ref(db, refPath));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const announcements: Announcement[] = [];

          for (const key in data) {
            const announcement = data[key];
            if (announcement.text && announcement.date) {
              announcements.push({
                text: announcement.text,
                date: announcement.date,
              });
            }
          }
          return announcements;
        } else {
          console.log("No data available");
          return null;
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const fetchAnnouncements = async () => {
      const data = await getAnnouncements();
      setAnnouncements(data);
    };
    fetchAnnouncements();
  }, []);

  return announcements;
};

export default function Announcements() {
  const announcements = useAnnouncements();

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
