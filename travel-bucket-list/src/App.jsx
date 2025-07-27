import "./App.css";
import { useEffect, useState } from "react";
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
  console.log("📤 Sending:", newDestination);
  fetch("http://localhost:4000/destinations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDestination),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("✅ Saved to db.json:", data);
      setDestinations([...destinations, data]);
    })
    .catch((error) => console.error("❌ POST error:", error));
}


  return (
    <div className="app">
      <h1>🌍 Trip Trail</h1>
      <DestinationForm onAdd={handleAddDestination} />
      <DestinationList destinations={destinations} />
    </div>
  );
}

export default App;
