import "../References.css";

export default function ReferenceCards() {
  const referenceArray = [
    {
      title: "Title1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio vitae diam aliquam aliquet sit amet quis nisl.",
      image: "https://picsum.photos/200",
    },
    {
      title: "Title2",
      description: "Description",
      image: "https://picsum.photos/200",
    },
    {
      title: "Title3",
      description:
        "Description asdasdasd as da d adadadasdsad asdsadasdsadasdasd asdsadadasdasd",
      image: "https://picsum.photos/200",
    },
    {
      title: "Title4",
      description: "Description",
      image: "https://picsum.photos/200",
    },
    {
      title: "Title5",
      description: "Description",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <div>
      <h1 className="dashboard-text">References</h1>
      <div className="reference-cards">
        {referenceArray.map((reference) => (
          <div className="reference-card" key={reference.title}>
            <h2>{reference.title}</h2>
            <img src={reference.image} alt="reference" />
            <p>{reference.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
