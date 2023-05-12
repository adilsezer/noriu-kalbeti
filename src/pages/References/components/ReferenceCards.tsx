import "../References.css";

interface Reference {
  title: string;
  description: string;
  image: string;
}

interface ReferenceCardsProps {
  referenceArray: Reference[];
}

const ReferenceCards: React.FC<ReferenceCardsProps> = ({ referenceArray }) => {
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
};

export default ReferenceCards;
