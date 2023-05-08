import React, { useState, useEffect } from "react";
import getCalendlyMeetings from "./GetCalendlyMeetings";
import "../Dashboard.css";
import { useAuthContext } from "../../../contexts/AuthContext";

interface Meeting {
  uri: string;
  name: string;
  event_type: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}

export default function BillingDetails() {
  const { user } = useAuthContext();
  const userEmail = user?.email || "";

  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    getCalendlyMeetings(userEmail).then((meetings) => setMeetings(meetings));
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
    <div>
      <h1 className="dashboard-text">Lesson History</h1>
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
          <tr>
            <td></td>
            <td></td>
            <td>
              <strong>
                Total: €
                {23 *
                  (previousMonthMeetings.length +
                    currentMonthMeetings.length +
                    nextMonthMeetings.length)}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="payment-info">
        <h3 className="dashboard-text">
          Please make all payments to the account below
        </h3>
        <p>Bank Name: Bank of Ireland</p>
        <p>Account Name: John Smith</p>
        <p>Sort Code: 12-34-56</p>
        <p>IBAN: IE 12 1234 1234 1234 1234 1234</p>
      </div>
    </div>
  );
}
