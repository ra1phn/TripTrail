import { Link } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DestinationForm from "./components/DestinationForm";
import DestinationList from "./components/DestinationList";

function App() {
  const [destinations, setDestinations] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  function handleAddDestination(newDestination) {
  console.log(" Sending:", newDestination);
  fetch("http://localhost:4000/destinations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDestination),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(" Saved to db.json:", data);
      setDestinations([...destinations, data]);
    })
    .catch((error) => console.error(" POST error:", error));
}
function handleToggleStatus(id, currentStatus) {
  const updatedStatus = currentStatus === "Visited" ? "Not Yet" : "Visited";

  fetch(`http://localhost:4000/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status: updatedStatus })
  })
    .then(res => res.json())
    .then((updatedDestination) => {
      setDestinations(destinations.map(dest =>
        dest.id === id ? updatedDestination : dest
      ));
    });
}

  return (
    <div className="app">
      <h1>🌍 Trip Trail</h1>
      <Link to="/goals">Set Travel Goals</Link>
      <DestinationList destinations={destinations} onToggleStatus={handleToggleStatus}/>
      <DestinationForm onAdd={handleAddDestination} />
    </div>
  );
}

export default App;

