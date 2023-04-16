import React, { useState, useEffect } from "react";
import GetCalendlyMeetings from "./GetCalendlyMeetings";

interface Meeting {
  uri: string;
  name: string;
  event_type: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}

const CalendlyMeetings: React.FC<{
  userEmail: string;
}> = ({ userEmail }) => {
  const [upcomingMeeting, setUpcomingMeeting] = useState<Meeting | null>(null);

  useEffect(() => {
    GetCalendlyMeetings(userEmail).then((meetings) => {
      const upcomingMeetings = meetings.filter((meeting) => {
        const startTime = new Date(meeting.start_time);
        return startTime > new Date();
      });
      const nextMeeting =
        upcomingMeetings.length > 0 ? upcomingMeetings[0] : null;

      setUpcomingMeeting(nextMeeting);
    });
  }, [userEmail]);

  return (
    <div>
      <h1>Upcoming Lesson</h1>
      <p>
        {upcomingMeeting?.start_time
          ? new Date(upcomingMeeting.start_time).toLocaleString()
          : ""}
      </p>
    </div>
  );
};

export default CalendlyMeetings;
