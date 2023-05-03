import getCalendlyMeetings from "./GetCalendlyMeetings";

interface Meeting {
  uri: string;
  name: string;
  event_type: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}

async function getUpcomingLesson(userEmail: string): Promise<Meeting | null> {
  // Get the user's email from the auth context

  // Get the user's upcoming meetings from Calendly
  const meetings = await getCalendlyMeetings(userEmail);

  // Filter the meetings to find the next upcoming one
  const upcomingMeetings = meetings.filter((meeting) => {
    const startTime = new Date(meeting.start_time);
    return startTime > new Date();
  });

  // Return the next upcoming meeting or null if there are no upcoming meetings
  const nextMeeting = upcomingMeetings.length > 0 ? upcomingMeetings[0] : null;
  return nextMeeting;
}

export default getUpcomingLesson;
