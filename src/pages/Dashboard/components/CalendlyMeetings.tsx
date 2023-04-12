import React, { useState, useEffect } from "react";
import fetchMeetings from "./FetchCalendlyMeetings";

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
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    fetchMeetings(userEmail).then((meetings) => setMeetings(meetings));
  }, [userEmail]);

  const listItems = meetings.map((meeting, index) => (
    <li key={index}>{new Date(meeting.start_time).toLocaleString()}</li>
  ));

  const currentDate: Date = new Date();
  const currentMonthName: string = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(currentDate);

  currentDate.setMonth(currentDate.getMonth() - 1);
  const previousMonthName: string = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(currentDate);

  return (
    <div>
      <h1>Lesson History</h1>
      <p>
        You had {meetings.length} lessons in {currentMonthName} and{" "}
        {previousMonthName}
      </p>
      <p>Amount Due: €{23 * meetings.length}</p>
      <ul>{listItems}</ul>
    </div>
  );
};

export default CalendlyMeetings;
