import React, { useState, useEffect } from "react";
import GetCalendlyMeetings from "./GetCalendlyMeetings";
import "../Dashboard.css";

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
      <div key={index}>
        {new Date(meeting.start_time).toLocaleString()} - {meeting.name}
      </div>
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
    <div className="dashboard-card">
      <h1 className="dashboard-title">Lesson History</h1>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Lessons</th>
            <th>Amount Due</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{getMonthName(previousMonth)}</td>
            <td>{listMeetingsForMonth(previousMonthMeetings)}</td>
            <td>€{23 * previousMonthMeetings.length}</td>
          </tr>
          <tr>
            <td>{getMonthName(currentMonth)}</td>
            <td>{listMeetingsForMonth(currentMonthMeetings)}</td>
            <td>€{23 * currentMonthMeetings.length}</td>
          </tr>
          <tr>
            <td>{getMonthName(nextMonth)}</td>
            <td>{listMeetingsForMonth(nextMonthMeetings)}</td>
            <td>€{23 * nextMonthMeetings.length}</td>
          </tr>
        </tbody>
      </table>
      <div className="payment-info">
        <p className="payment-info-label">
          Please make all payments to the account below
        </p>
        <ul className="payment-info-list">
          <li>
            <span className="payment-info-label">Bank Name:</span> Bank of
            Ireland
          </li>
          <li>
            <span className="payment-info-label">Account Name:</span> John Smith
          </li>
          <li>
            <span className="payment-info-label">Sort Code:</span> 12-34-56
          </li>
          <li>
            <span className="payment-info-label">IBAN:</span> IE 12 1234 1234
            1234 1234 1234
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListCalendlyMeetings;
