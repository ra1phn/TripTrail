import DestinationCard from "./DestinationCard";

function DestinationList({ destinations, onToggleStatus  }) {
  return (
    <div className="destinations">
      {destinations.map((dest, index) => (
        <DestinationCard 
          key={index} 
          destination={dest} 
          onToggleStatus={onToggleStatus}/>
      ))}
    </div>
  );
}

export default DestinationList;