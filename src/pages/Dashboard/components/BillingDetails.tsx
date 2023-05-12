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

const getMonthName = (month: number): string => {
  const date = new Date(Date.UTC(2000, month, 1));
  const monthName = date.toLocaleString("default", { month: "long" });

  return monthName;
};

const filterMeetingsByMonth = (meetings: Meeting[], monthOffset: number) => {
  const targetMonth = new Date().getMonth() + monthOffset;
  return meetings.filter((meeting) => {
    const startTime = new Date(meeting.start_time);
    return startTime.getMonth() === targetMonth;
  });
};

export default function BillingDetails() {
  const { user } = useAuthContext();
  const userEmail = user?.email || "";

  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    getCalendlyMeetings(userEmail).then((meetings) => setMeetings(meetings));
  }, [userEmail]);

  const previousMonthMeetings = filterMeetingsByMonth(meetings, -1);
  const currentMonthMeetings = filterMeetingsByMonth(meetings, 0);
  const nextMonthMeetings = filterMeetingsByMonth(meetings, 1);

  const listMeetingsForMonth = (meetings: Meeting[]) => {
    return meetings.map((meeting) => (
      <div key={meeting.uri}>
        {new Date(meeting.start_time).toLocaleString()} - {meeting.name}
      </div>
    ));
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
            <td>{getMonthName(new Date().getMonth() - 1)}</td>
            <td>{listMeetingsForMonth(previousMonthMeetings)}</td>
            <td>€{23 * previousMonthMeetings.length}</td>
          </tr>
          <tr>
            <td>{getMonthName(new Date().getMonth())}</td>
            <td>{listMeetingsForMonth(currentMonthMeetings)}</td>
            <td>€{23 * currentMonthMeetings.length}</td>
          </tr>
          <tr>
            <td>{getMonthName(new Date().getMonth() + 1)}</td>
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
