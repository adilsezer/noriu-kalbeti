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

const ListCalendlyMeetings: React.FC<{
  userEmail: string;
}> = ({ userEmail }) => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    GetCalendlyMeetings(userEmail).then((meetings) => setMeetings(meetings));
  }, [userEmail]);

  const currentMonthMeetings = meetings.filter((meeting) => {
    const startTime = new Date(meeting.start_time);
    return startTime.getMonth() === new Date().getMonth();
  });

  const previousMonthMeetings = meetings.filter((meeting) => {
    const startTime = new Date(meeting.start_time);
    return startTime.getMonth() === new Date().getMonth() - 1;
  });

  const nextMonthMeetings = meetings.filter((meeting) => {
    const startTime = new Date(meeting.start_time);
    return startTime.getMonth() === new Date().getMonth() + 1;
  });

  const listMeetingsForMonth = (meetings: Meeting[]) => {
    return meetings.map((meeting, index) => (
      <li key={index}>
        {new Date(meeting.start_time).toLocaleString()} - {meeting.name}
      </li>
    ));
  };

  const currentMonth = new Date().getMonth(); // get the current month as a number
  const previousMonth = currentMonth - 1; // subtract 1 to get the previous month
  const nextMonth = currentMonth + 1; // add 1 to get the next month

  const getMonthName = (month: number): string => {
    const date = new Date(Date.UTC(2000, month, 1)); // create a date object for the specified month
    const monthName = date.toLocaleString("default", { month: "long" }); // get the month name using toLocaleString()

    return monthName;
  };

  return (
    <div>
      <h1>Lesson History</h1>
      <p>
        You had {previousMonthMeetings.length} lessons in{" "}
        {getMonthName(previousMonth)}
      </p>
      <p>
        Amount Due in {getMonthName(previousMonth)}: €
        {23 * previousMonthMeetings.length}
      </p>
      <ul>{listMeetingsForMonth(previousMonthMeetings)}</ul>
      <p>
        <p>
          You had {currentMonthMeetings.length} lessons in{" "}
          {getMonthName(currentMonth)}
        </p>
        <p>
          Amount Due in {getMonthName(currentMonth)}: €
          {23 * currentMonthMeetings.length}
        </p>
        <ul>{listMeetingsForMonth(currentMonthMeetings)}</ul>
        <p>
          You had {nextMonthMeetings.length} lessons in{" "}
          {getMonthName(nextMonth)}
        </p>
        Amount Due in {getMonthName(nextMonth)}: €
        {23 * nextMonthMeetings.length}
      </p>
      <ul>{listMeetingsForMonth(nextMonthMeetings)}</ul>
    </div>
  );
};

export default ListCalendlyMeetings;
