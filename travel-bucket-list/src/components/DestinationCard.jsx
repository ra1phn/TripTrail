function DestinationCard({ destination, onToggleStatus }) {
  const { id, name, country, description, image, status } = destination;
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} />
      <div className ="card-content">
      <h2>{destination.name}</h2>
      <p><strong>Country:</strong> {destination.country}</p>
      <p>{destination.description}</p>
      <p className = "status">Status: {destination.status}</p>
      <button onClick = {() => onToggleStatus(id, status)}>
        Mark as {status === "Visited" ? "Not Yet" : "Visited"}
      </button>
      </div>
    </div>
  );
}

export default DestinationCard;



