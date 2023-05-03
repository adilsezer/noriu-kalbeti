export default function Announcements() {
  const announcementArray = [
    {
      text: "Lorem ipsum1 dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl.",
      date: "2021-10-10",
    },
    {
      text: "Lorem ipsum2 dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl.",
      date: "2021-10-10",
    },
    {
      text: "Lorem ipsum3 dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl.",
      date: "2021-10-10",
    },
  ];

  return (
    <div>
      <h1 className="dashboard-text">Announcements</h1>
      {announcementArray.map((announcement) => (
        <div className="announcement-text" key={announcement.text}>
          <p>
            {announcement.date} - {announcement.text}
          </p>
        </div>
      ))}
    </div>
  );
}
