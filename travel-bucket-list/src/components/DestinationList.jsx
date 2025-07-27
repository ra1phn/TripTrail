import DestinationCard from "./DestinationCard";

function DestinationList({ destinations }) {
  return (
    <div className="destinations">
      {destinations.map((dest, index) => (
        <DestinationCard key={index} destination={dest} />
      ))}
    </div>
  );
}

export default DestinationList;