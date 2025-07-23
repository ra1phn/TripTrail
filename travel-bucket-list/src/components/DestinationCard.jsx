function DestinationCard({ destination }) {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} />
      <div className ="card-content">
      <h2>{destination.name}</h2>
      <p><strong>Country:</strong> {destination.country}</p>
      <p>{destination.description}</p>
      <p className = "status">Status: {destination.status}</p>
      </div>
    </div>
  );
}

export default DestinationCard;



