interface Meeting {
  uri: string;
  name: string;
  event_type: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}

export const getCalendlyMeetings = async (
  userEmail: string
): Promise<Meeting[]> => {
  try {
    const url = `https://api.calendly.com/scheduled_events?organization=${process.env.REACT_APP_CALENDLY_ORGANIZATION}&invitee_email=${userEmail}&status=active`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CALENDLY_ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Error fetching Calendly meetings: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.collection as Meeting[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getCalendlyMeetings;
